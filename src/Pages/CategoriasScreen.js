import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';
import BottomNav from '../Components/BottomNav';
import { apiFetch } from "../services/api";

r
// const API_BASE = 'http://192.168.0.106/webcurso/wp-json/noticias/v1';
  const API_BASE = 'http://192.168.20.66/webcurso/wp-json/noticias/v1';


export default function CategoryScreen({ route, navigation }) {
  const category = route?.params?.category || 'Sin categoría';
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/noticias?categoria=${category}`)
    // apiFetch(`${API_BASE}/noticias?categoria=${category}`)
      .then((res) => res.json())
      .then((data) => setNoticias(data))
      .catch((err) => console.log('ERROR noticias:', err))
      .finally(() => setLoading(false));
  }, [category]);

  const handlePress = (news) => {
    navigation.navigate('NewsDetail', { news });
  };

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>Noticias de {category}</Text>

        {noticias.length > 0 ? (
          noticias.map((n) => (
            <View key={n.id} style={styles.card}>
              <Image source={{ uri: n.imagen }} style={styles.image} />
              <Text style={styles.title}>{n.titulo}</Text>
              <Text style={styles.summary}>
                {n.descripcion.length > 100 ? n.descripcion.substring(0, 100) + '...' : n.descripcion}
              </Text>
              <Text style={styles.date}>{n.fecha}</Text>

              <TouchableOpacity style={styles.button} onPress={() => handlePress(n)}>
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
  card: { backgroundColor: '#fff', borderRadius: 15, marginBottom: 20, overflow: 'hidden', padding: 10, elevation: 2 },
  image: { width: '100%', height: 180, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 8 },
  summary: { fontSize: 14, color: '#666', marginTop: 5 },
  date: { fontSize: 12, color: '#999', marginTop: 5 },
  button: { marginTop: 10, backgroundColor: '#0a325aff', padding: 8, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
  noNews: { textAlign: 'center', marginTop: 30, fontSize: 16, color: '#444' },
});
