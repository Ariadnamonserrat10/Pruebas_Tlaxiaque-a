import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

// Se define y exporta un componente funcional llamado CategoriaCard
// Este componente recibe tres props name, image y onPress
export default function CategoriaCard({ name, image, onPress }) {
  return (
    // TouchableOpacity hace que el elemento sea presionable como un botón
    // Cuando el usuario toca la tarjeta, se ejecuta la función onPress 
    <TouchableOpacity style={styles.card} onPress={onPress}>
      
      {/* Muestra la imagen de la categoría, cargada desde una URL */}
      <Image source={{ uri: image }} style={styles.image} />
      
      {/* Muestra el nombre de la categoría debajo de la imagen */}
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

// Se definen los estilos del componente usando StyleSheet de React Native
const styles = StyleSheet.create({
  // Estilo del contenedor principal de la tarjeta
  card: { 
    width: 140, // Ancho fijo
    marginRight: 15, // Espacio entre tarjetas
    alignItems: 'center', // Centra el contenido horizontalmente
  },

  // Estilo de la imagen de la categoría
  image: { 
    width: 140, // Misma anchura que la tarjeta
    height: 100, // Altura de la imagen
    borderRadius: 10, // Bordes redondeados para estética
  },

  // Estilo del texto (nombre de la categoría)
  name: { 
    marginTop: 5, // Espacio entre la imagen y el texto
    fontWeight: 'bold', // Hace el texto en negritas
    textAlign: 'center', // Centra el texto horizontalmente
  },
});
