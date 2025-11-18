import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { getNoticias } from '../services/api';
import BottomNav from '../Components/BottomNav';

export default function CategoryScreen({ route, navigation }) {
  const category = route?.params?.category || 'Sin categoría';
  
  const [loading, setLoading] = useState(true);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      const noticias = await getNoticias();

      const filtered = noticias.filter((n) => n.category === category);
      setNewsList(filtered);

      setLoading(false);
    }

    loadData();
  }, [category]);

  const handlePress = (newsId) => {
    navigation.navigate('NewsDetail', { newsId });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <Text style={styles.header}>Noticias de {category}</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#0a325aff" style={{ marginTop: 40 }} />
        ) : newsList.length > 0 ? (
          newsList.map((n) => (
            <View key={n.id} style={styles.card}>
              <Image source={{ uri: n.image }} style={styles.image} />

              <Text style={styles.title}>{n.title}</Text>
              <Text style={styles.summary}>{n.summary}</Text>
              <Text style={styles.date}>{n.date}</Text>

              <TouchableOpacity style={styles.button} onPress={() => handlePress(n.id)}>
                <Text style={styles.buttonText}>Ver más</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noNews}>No hay noticias en esta categoría</Text>
        )}
      </ScrollView>

      <BottomNav activeTab="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  scrollContent: { padding: 15, paddingBottom: 100 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    padding: 10,
    elevation: 2,
  },
  image: { width: '100%', height: 180, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 8 },
  summary: { fontSize: 14, color: '#666', marginTop: 5 },
  date: { fontSize: 12, color: '#999', marginTop: 5 },
  button: {
    marginTop: 10,
    backgroundColor: '#0a325aff',
    padding: 8,
    borderRadius: 8,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  noNews: { textAlign: 'center', marginTop: 30, fontSize: 16, color: '#444' },
});
