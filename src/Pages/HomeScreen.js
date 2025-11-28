import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, Animated, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AppBar from '../Components/AppBar';
import BottomNav from '../Components/BottomNav';
import NetInfo from '@react-native-community/netinfo';

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
  const [isConnected, setIsConnected] = useState(true);
  const [showConnectionMessage, setShowConnectionMessage] = useState(false);
  const [connectionMessage, setConnectionMessage] = useState('');
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const API_BASE = 'http://192.168.218.71/Pruebas/wp-json/noticias/v1';

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
  }, [ads.length]);

  // Traer categorías
  useEffect(() => {
    fetch(`${API_BASE}/categorias`)
      .then(res => res.json())
      .then(data => setCategorias(data))
      .catch(err => console.error('Error categorías:', err));
  }, []);

  // Traer noticias, opcionalmente por categoría
  useEffect(() => {
    let url = `${API_BASE}/noticias`;
    if (selectedCategory) url += `?categoria=${selectedCategory}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setNoticias(data))
      .catch(err => console.error('Error noticias:', err));
  }, [selectedCategory]);

  // Filtrar noticias por búsqueda (en todas las categorías)
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

  // escucha del estado de red (import dinámico con fallback a ping si no está NetInfo)
  useEffect(() => {
    let timeoutId = null;
    const unsubscribe = NetInfo.addEventListener(state => {
      const online = !!(state.isConnected && (state.isInternetReachable !== false));
      setIsConnected(online);

      if (!online) {
        setConnectionMessage('Sin conexión a internet');
        setShowConnectionMessage(true);
        // mantener el banner hasta que vuelva la conexión
      } else {
        setConnectionMessage('Conexión restaurada');
        setShowConnectionMessage(true);
        // ocultar automáticamente después de 2.5s
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setShowConnectionMessage(false);
        }, 2500);
      }
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {showConnectionMessage && (
        <View style={[
            styles.connectionBanner,
            connectionMessage.includes('restaurada') ? styles.connectionRestored : styles.offlineBar
          ]}>
          <Text style={styles.offlineText}>{connectionMessage}</Text>
        </View>
      )}

      {/* Sección de Anuncios - Más pequeña y colorida */}
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

        {/* Indicadores de anuncios */}
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

      <AppBar
        style={{ height: 45 }}
        onSearchPress={() => setSearchVisible(true)}
        onNotificationsPress={() =>
          navigation.navigate('Notifications', { markRead: true })
        }
        hasUnread={unreadCount > 0}
      />

      <View style={styles.categoriesContainer}>
        <Animated.FlatList
          ref={flatListRef}
          data={categorias}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          bounces={false}
          contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
          renderItem={({ item, index }) => {
            const isSelected = selectedCategory === item.name;
            return (
              <View style={styles.categoryItemContainer}>
                <TouchableOpacity activeOpacity={0.9} onPress={() => handleCategoryPress(item, index)}>
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

      <FlatList
        data={filteredNews}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSummary}>{truncateText(item.summary, 80)}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
              <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('NewsDetail', { news: item })}>
                <Text style={styles.cardButtonText}>Ver más</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="search" size={48} color="#ccc" />
            <Text style={styles.emptyText}>No se encontraron noticias</Text>
          </View>
        }
      />

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
                placeholderTextColor="#999"
              />
              <TouchableOpacity onPress={handleCloseSearch}>
                <Ionicons name="close" size={24} color="#2D2D2D" />
              </TouchableOpacity>
            </View>

            {/* Resultados de búsqueda en modal */}
            <View style={styles.searchResultsContainer}>
              {searchQuery.trim() ? (
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
                        <Text style={styles.searchResultTitle} numberOfLines={2}>{item.title}</Text>
                        <Text style={styles.searchResultSummary} numberOfLines={1}>{item.summary}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                  scrollEnabled={true}
                />
              ) : (
                <Text style={styles.searchPlaceholder}>Escribe para buscar noticias...</Text>
              )}
            </View>
          </View>
        </View>
      </Modal>

      {/* mensaje inferior si no hay conexión */}
      {showConnectionMessage && (
        <View style={[
            styles.connectionBanner,
            connectionMessage.includes('restaurada') ? styles.connectionRestored : styles.offlineBar
          ]}>
          <Text style={styles.offlineText}>{connectionMessage}</Text>
        </View>
      )}

      <BottomNav activeTab="home" />
    </View>
  );
}

const styles = StyleSheet.create({
  adsContainer: {
    position: 'relative',
    width: '100%',
    height: AD_HEIGHT,
    borderRadius: 12,
    marginHorizontal: '3%',
    marginTop: height * 0.01,
    marginBottom: height * 0.01,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    overflow: 'hidden',
  },
  adsTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adsContentWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.04,
    width: '100%',
  },
  adsTextContainer: {
    flex: 1,
  },
  adsTitle: {
    color: '#fff',
    fontSize: width * 0.032,
    fontWeight: 'bold',
  },
  adsSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: width * 0.025,
    marginTop: 2,
  },
  adsIconContainer: {
    marginLeft: 10,
  },
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
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  indicatorActive: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  categoriesContainer: {
    paddingTop: height * 0.015,
    paddingBottom: height * 0.015,
  },
  categoryItemContainer: {
    marginHorizontal: ITEM_SPACING / 2,
    alignItems: 'center',
    paddingVertical: height * 0.008,
    justifyContent: 'center',
  },
  categoryCard: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#222',
    fontSize: width * 0.028,
  },
  categoryNameSelected: {
    color: '#FF0000',
    fontWeight: 'bold',
    fontSize: width * 0.032,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: '5%',
    marginBottom: height * 0.02,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: height * 0.22,
  },
  cardContent: {
    padding: width * 0.04,
  },
  cardTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardSummary: {
    fontSize: width * 0.035,
    color: '#666',
    marginBottom: 10,
  },
  cardDate: {
    fontSize: width * 0.03,
    color: '#999',
    marginBottom: 10,
  },
  cardButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#0a325aff',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.035,
  },
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
    elevation: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    height: 45,
    fontSize: 16,
  },
  searchResultsContainer: {
    maxHeight: height * 0.65,
  },
  searchResultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  searchResultImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  searchResultText: {
    flex: 1,
  },
  searchResultTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 4,
  },
  searchResultSummary: {
    fontSize: 12,
    color: '#666',
  },
  searchPlaceholder: {
    textAlign: 'center',
    color: '#999',
    fontSize: 14,
    paddingVertical: 20,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    color: '#999',
    fontSize: 16,
    marginTop: 10,
  },
  offlineBar: {
    // ahora es un estilo sólo de color (se aplica junto a connectionBanner)
    backgroundColor: '#e74c3c',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    minHeight: 36,
  },
  offlineText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: width * 0.034,
  },
  connectionBanner: {
    position: 'absolute',
    left: '6%',
    right: '6%',
    top: AD_HEIGHT + height * 0.015,
    // padding vertical se controla en los variantes (offlineBar / connectionRestored)
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    zIndex: 9999,
    // pequeña elevación extra para sombras en Android/iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  connectionRestored: {
    backgroundColor: '#27ae60', // verde
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
});
