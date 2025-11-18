import React, { useEffect, useState, memo, useCallback } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, ActivityIndicator, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getNoticiaById } from '../services/api';

const Paragraph = memo(({ text }) => (
  <Text style={styles.content}>{text}</Text>
));

export default function NewsDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { newsId } = route.params; // ✔ ahora recibimos SOLO EL ID

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState(null);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  // -------------------------
  //   ✔ Cargar noticia real
  // -------------------------
  useEffect(() => {
    async function loadNews() {
      setLoading(true);
      const result = await getNoticiaById(newsId);

      if (result && result.length > 0) {
        setNews(result[0]);
      }

      setLoading(false);
    }

    loadNews();
  }, [newsId]);

  // -------------------------
  //   ✔ Loading
  // -------------------------
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0a325aff" />
      </View>
    );
  }

  // -------------------------
  //   ✔ Error si no carga
  // -------------------------
  if (!news) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ fontSize: 18, color: 'red' }}>No se pudo cargar la noticia.</Text>
      </View>
    );
  }

  const paragraphs = news.content
    ? news.content.split('\n')
    : [];

  // -------------------------
  //   ✔ Render final
  // -------------------------
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image 
          source={{ uri: news.image }}
          style={styles.newsImage}
          resizeMode="cover"
        />

        <View style={styles.contentContainer}>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.date}>{news.date}</Text>

          {paragraphs.map((p, index) => (
            <Paragraph key={index} text={p} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={handleGoBack}
        >
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// -------------------------
//    ✔ Estilos originales
// -------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 120,
    flexGrow: 1,
  },
  newsImage: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  contentContainer: {
    backgroundColor: '#fff',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    minHeight: 400,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  date: {
    fontSize: 14,
    color: '#999',
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 26,
    marginBottom: 15,
  },
  navbar: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 30 : 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  backButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0a325aff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
