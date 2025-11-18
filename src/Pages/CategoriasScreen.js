import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { noticias } from '../data/Noticias';
import BottomNav from '../Components/BottomNav';

/*** Pantalla que muestra las noticias filtradas por categoría.
 * Recibe route para obtener la categoría seleccionada y navigation para navegar a detalles.*/
export default function CategoryScreen({ route, navigation }) {
  // Obtenemos la categoría enviada desde HomeScreen o un valor por defecto
  const category = route?.params?.category || 'Sin categoría';

  // Filtramos las noticias que coinciden con la categoría seleccionada
  const filteredNews = (noticias || []).filter((n) => n.category === category);

  // Función que maneja el botón Ver más y navega a la pantalla de detalle
  const handlePress = (newsId) => {
    if (navigation?.navigate) {
      navigation.navigate('NewsDetail', { newsId }); // Pasamos el id de la noticia
    }
  };

  return (
    <View style={styles.container}>
      {/* Contenedor desplazable para mostrar todas las noticias */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Título de la categoría */}
        <Text style={styles.header}>Noticias de {category}</Text>

        {/* Mostrar noticias filtradas o mensaje si no hay noticias */}
        {filteredNews.length > 0 ? (
          filteredNews.map((n) => (
            <View key={n.id} style={styles.card}>
              {/* Imagen de la noticia */}
              <Image source={{ uri: n.image }} style={styles.image} />

              {/* Título, resumen y fecha */}
              <Text style={styles.title}>{n.title}</Text>
              <Text style={styles.summary}>{n.summary}</Text>
              <Text style={styles.date}>{n.date}</Text>
            

              {/* Botón "Ver más" */}
              <TouchableOpacity style={styles.button} onPress={() => handlePress(n.id)}>
                <Text style={styles.buttonText}>Ver más</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          // Mensaje cuando no hay noticias en la categoría
          <Text style={styles.noNews}>No hay noticias en esta categoría</Text>
        )}
      </ScrollView>

      {/* Barra de navegación inferior */}
      <BottomNav activeTab="" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    padding: 15,
    paddingBottom: 100, 
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden',
    padding: 10,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  summary: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },

  button: {
    marginTop: 10,
    backgroundColor: '#0a325aff',
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  noNews: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#444',
  },
});
