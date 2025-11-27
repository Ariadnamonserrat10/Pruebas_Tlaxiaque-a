import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import NetInfo from '@react-native-community/netinfo'; // 🟢 IMPORTANTE
import AppBar from '../Components/AppBar';
import BottomNav from '../Components/BottomNav';

const { width, height } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.18;
const ITEM_SPACING = 12;
const ITEM_HEIGHT = width * 0.12;
const AD_HEIGHT = height * 0.06;

export default function HomeScreen() {
  const [categorias, setCategorias] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [unreadCount, setUnreadCount] = useState(1);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  const [isConnected, setIsConnected] = useState(true); // 🟢 ESTADO DE INTERNET

  const navigation = useNavigation();
  const flatListRef = useRef(null);

  const API_BASE = 'http://192.168.0.106/webcurso/wp-json/noticias/v1';

  //  DETECTAR INTERNET
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      console.log("Conexión:", state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  // Anuncios simulados con colores vibrantes
  const ads = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x100/FF6B6B/FFFFFF?text=🎁+Oferta+Especial',
      title: 'Oferta especial',
      gradient: ['#FF6B6B', '#FF5252'],
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400x100/4ECDC4/FFFFFF?text=🏆+Promoción',
      title: 'Promoción limitada',
      gradient: ['#4ECDC4', '#45B7AA'],
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/400x100/FFE66D/333333?text=💰+Descuento',
      title: 'Descuento especial',
      gradient: ['#FFE66D', '#FFD700'],
    },
  ];

  // Cambiar anuncio cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Traer categorías
  useEffect(() => {
    fetch(`${API_BASE}/categorias`)
      .then(res => res.json())
      .then(data => setCategorias(data))
      .catch(err => console.error('Error categorías:', err));
  }, []);

  // Traer noticias por categoría
  useEffect(() => {
    let url = `${API_BASE}/noticias`;
    if (selectedCategory) url += `?categoria=${selectedCategory}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setNoticias(data))
      .catch(err => console.error('Error noticias:', err));
  }, [selectedCategory]);

  const filteredNews = noticias.filter(n => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      n.title.toLowerCase().includes(query) ||
      n.summary.toLowerCase().includes(query)
    );
  });

  const handleCategoryPress = (item, index) => {
    setSelectedCategory(item.name);

    if (flatListRef.current) {
      const totalItems = categorias.length;
      if (index <= 1 || index >= totalItems - 2) return;
      const offset = index * (ITEM_WIDTH + ITEM_SPACING) - (width / 2) + ITEM_WIDTH / 2;
      flatListRef.current.scrollToOffset({ offset: Math.max(0, offset), animated: true });
    }
  };

  const truncateText = (text, maxLength = 80) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const handleCloseSearch = () => {
    setSearchQuery('');
    setSearchVisible(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      {/* Anuncios */}
      <View style={[styles.adsContainer, { backgroundColor: ads[currentAdIndex].gradient[0] }]}>
        <TouchableOpacity activeOpacity={0.7} style={styles.adsTouchable}>
          <View style={styles.adsContentWrapper}>
            <View style={styles.adsTextContainer}>
              <Text style={styles.adsTitle}>{ads[currentAdIndex].title}</Text>
              <Text style={styles.adsSubtitle}>¡Descubre más!</Text>
            </View>
            <View style={styles.adsIconContainer}>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </View>
          </View>
        </TouchableOpacity>

        {/* Indicadores */}
        <View style={styles.adsIndicators}>
          {ads.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentAdIndex === index && styles.indicatorActive,
              ]}
            />
          ))}
        </View>
      </View>

      {/* AppBar */}
      <AppBar
        style={{ height: 45 }}
        onSearchPress={() => setSearchVisible(true)}
        onNotificationsPress={() =>
          navigation.navigate('Notifications', { markRead: true })
        }
        hasUnread={unreadCount > 0}
      />

      {/* Categorías */}
      <View style={styles.categoriesContainer}>
        <Animated.FlatList
          ref={flatListRef}
          data={categorias}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
          renderItem={({ item, index }) => {
            const isSelected = selectedCategory === item.name;
            return (
              <View style={styles.categoryItemContainer}>
                <TouchableOpacity onPress={() => handleCategoryPress(item, index)}>
                  <Animated.View
                    style={[
                      styles.categoryCard,
                      { transform: [{ scale: isSelected ? 1.15 : 1 }], opacity: isSelected ? 1 : 0.85 },
                    ]}
                  >
                    <Image source={{ uri: item.image }} style={styles.categoryImage} />
                  </Animated.View>
                  <Text style={[styles.categoryName, isSelected && styles.categoryNameSelected]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      {/* Noticias */}
      <FlatList
        data={filteredNews}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSummary}>{truncateText(item.summary, 80)}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
              <TouchableOpacity
                style={styles.cardButton}
                onPress={() => navigation.navigate('NewsDetail', { news: item })}
              >
                <Text style={styles.cardButtonText}>Ver más</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Buscador Modal */}
      <Modal visible={searchVisible} animationType="fade" transparent>
        <View style={styles.searchModal}>
          <View style={styles.searchModalContent}>
            <View style={styles.searchInputContainer}>
              <Ionicons name="search" size={20} color="#999" />
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar en todas las categorías..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus
              />
              <TouchableOpacity onPress={handleCloseSearch}>
                <Ionicons name="close" size={24} color="#2D2D2D" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={filteredNews}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.searchResultItem}
                  onPress={() => {
                    navigation.navigate('NewsDetail', { news: item });
                    handleCloseSearch();
                  }}
                >
                  <Image source={{ uri: item.image }} style={styles.searchResultImage} />
                  <View style={styles.searchResultText}>
                    <Text style={styles.searchResultTitle}>{item.title}</Text>
                    <Text style={styles.searchResultSummary}>{item.summary}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Bottom Nav */}
      <BottomNav activeTab="home" />

      {/* MENSAJE SI NO HAY INTERNET */}
      {!isConnected && (
        <View style={styles.noInternetBanner}>
          <Text style={styles.noInternetText}>No tienes conexión a Internet</Text>
        </View>
      )}

    </View>
  );
}

// -------------------- ESTILOS --------------------

const styles = StyleSheet.create({
  adsContainer: {
    position: 'relative',
    width: '100%',
    height: AD_HEIGHT,
    borderRadius: 20,
    marginHorizontal: '3%',
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
  },
  adsTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adsContentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
  },
  adsTextContainer: { flex: 1 },
  adsTitle: { color: '#fff', fontSize: width * 0.032, fontWeight: 'bold' },
  adsSubtitle: { color: 'rgba(255,255,255,0.9)', fontSize: width * 0.025, marginTop: 2 },
  adsIconContainer: { marginLeft: 10 },
  adsIndicators: {
    position: 'absolute',
    bottom: height * 0.008,
    left: '50%',
    transform: [{ translateX: -20 }],
    flexDirection: 'row',
    gap: 5,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  indicatorActive: { backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4 },

  categoriesContainer: {
    paddingTop: height * 0.015,
    paddingBottom: height * 0.015,
  },
  categoryItemContainer: {
    marginHorizontal: ITEM_SPACING / 2,
    alignItems: 'center',
  },
  categoryCard: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 10,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryName: {
    marginTop: 5,
    fontWeight: '600',
    textAlign: 'center',
  },
  categoryNameSelected: {
    color: '#dfd3d3ff',
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: '5%',
    marginBottom: height * 0.02,
    overflow: 'hidden',
  },
  cardImage: { width: '100%', height: height * 0.22 },
  cardContent: { padding: width * 0.04 },
  cardTitle: { fontSize: width * 0.045, fontWeight: 'bold' },
  cardSummary: { fontSize: width * 0.035, color: '#666', marginTop: 5 },
  cardDate: { fontSize: width * 0.03, color: '#999', marginVertical: 10 },
  cardButton: {
    backgroundColor: '#0a325aff',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  cardButtonText: { color: '#fff', fontWeight: 'bold', fontSize: width * 0.035 },

  searchModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-start',
    paddingTop: height * 0.05,
  },
  searchModalContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '95%',
    maxHeight: height * 0.8,
    marginHorizontal: '2.5%',
    padding: 15,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  searchInput: { flex: 1, marginLeft: 8, height: 45, fontSize: 16 },

  searchResultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchResultImage: { width: 50, height: 50, borderRadius: 8, marginRight: 12 },
  searchResultText: { flex: 1 },
  searchResultTitle: { fontWeight: 'bold', marginBottom: 4 },
  searchResultSummary: { fontSize: 12, color: '#666' },

  noInternetBanner: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    backgroundColor: "#0c0c0cff",
    alignItems: "center",
    zIndex: 999,
  },
  noInternetText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
