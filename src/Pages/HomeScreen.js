import React, { useState, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { categorias, noticias } from '../data/Noticias';
import AppBar from '../Components/AppBar';
import BottomNav from '../Components/BottomNav';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = 105;
const ITEM_SPACING = 12;

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [unreadCount, setUnreadCount] = useState(1);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const filteredNews = noticias.filter((n) => {
    const matchCategory = selectedCategory ? n.category === selectedCategory : true;
    const matchSearch = searchQuery
      ? n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        n.summary.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchCategory && matchSearch;
  });

  const handleCategoryPress = (item, index) => {
    setSelectedCategory(item.name);
    
    // Solo centrar si es una categoría del medio no las 2 primeras ni las 2 últimas
    if (flatListRef.current) {
      const totalItems = categorias.length;
      
      // Las 2 primeras categorías no se mueven
      if (index <= 1) {
        return;
      }
      
      // Las 2 últimas categorías no se mueven
      if (index >= totalItems - 2) {
        return;
      }
      
      // Solo las categorías del medio se centran
      const offset = index * (ITEM_WIDTH + ITEM_SPACING) - (width / 2) + (ITEM_WIDTH / 2);
      flatListRef.current.scrollToOffset({
        offset: Math.max(0, offset),
        animated: true,
      });
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* AppBar compacto */}
      <AppBar
        style={{ height: 45 }}
        onSearchPress={() => setSearchVisible(true)}
        onNotificationsPress={() =>
          navigation.navigate('Notifications', { markRead: true })
        }
        hasUnread={unreadCount > 0}
      />

      {/* Carrusel animado de categorías */}
      <View style={{ paddingTop: 20, paddingBottom: 15 }}>
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
              <View
                style={{
                  marginHorizontal: ITEM_SPACING / 2,
                  alignItems: 'center',
                  paddingVertical: 8,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => handleCategoryPress(item, index)}
                >
                  <Animated.View
                    style={[
                      styles.categoryCard,
                      {
                        transform: [{ scale: isSelected ? 1.15 : 1.0 }],
                        opacity: isSelected ? 1 : 0.85,
                      },
                    ]}
                  >
                    <Image source={{ uri: item.image }} style={styles.categoryImage} />
                  </Animated.View>
                  <Text
                    style={[
                      styles.categoryName,
                      isSelected && styles.categoryNameSelected,
                    ]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>

      {/* Lista de noticias */}
      <FlatList
        data={filteredNews}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSummary}>{item.summary}</Text>
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
        contentContainerStyle={{ paddingBottom: 100, paddingTop: 10 }}
        removeClippedSubviews
        initialNumToRender={5}
      />

      {/* Modal de búsqueda */}
      <Modal visible={searchVisible} animationType="fade" transparent>
        <View style={styles.searchModal}>
          <View style={styles.searchModalContent}>
            <View style={styles.searchInputContainer}>
              <Ionicons name="search" size={20} color="#999" />
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar noticias..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus
              />
              <TouchableOpacity onPress={() => setSearchVisible(false)}>
                <Ionicons name="close" size={24} color="#2D2D2D" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <BottomNav activeTab="home" />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    width: ITEM_WIDTH,
    height: 65,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: { 
    width: '100%', 
    height: '100%',
  },
  categoryName: {
    marginTop: 5,
    fontWeight: '600',
    textAlign: 'center',
    color: '#222',
    fontSize: 11,
  },
  categoryNameSelected: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 15,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: { width: '100%', height: 180 },
  cardContent: { padding: 15 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  cardSummary: { fontSize: 14, color: '#666', marginBottom: 10 },
  cardDate: { fontSize: 12, color: '#999', marginBottom: 10 },
  cardButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#0a325aff',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  cardButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  searchModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchModalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '90%',
    padding: 15,
    elevation: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: { flex: 1, marginLeft: 8, height: 40 },
});