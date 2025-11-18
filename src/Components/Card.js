
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// Se define y exporta el componente NewsCard
// Recibe dos props news objeto con datos de la noticia y onPress
export default function NewsCard({ news, onPress }) {
  return (
    // TouchableOpacity hace que toda la tarjeta sea presionable
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.cardContainer}>
      
      {/* Muestra la imagen principal de la noticia */}
      <Image source={{ uri: news.image }} style={styles.newsImage} />

      {/* Contenedor de la información de la noticia */}
      <View style={styles.newsContent}>
        <Text style={styles.newsTitle}>{news.title}</Text>
        <Text style={styles.newsSummary}>{news.summary}</Text>
        <Text style={styles.newsDate}>{news.date}</Text>

        {/* Botón Ver más */}
        <TouchableOpacity style={styles.moreButton} onPress={onPress}>
          <Text style={styles.moreButtonText}>Ver más</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // Contenedor principal de la tarjeta
  cardContainer: {
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },

  // Imagen de la noticia
  newsImage: {
    width: '100%',
    height: 180,
  },

  // Contenedor del texto y botón
  newsContent: {
    padding: 15,
  },

  // Título de la noticia
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },

  // Resumen de la noticia
  newsSummary: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },

  // Fecha de la noticia
  newsDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  
  // Botón "Ver más"
  moreButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#1E90FF',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 12,
  },

  // Texto dentro del botón
  moreButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

