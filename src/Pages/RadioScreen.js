import React, { useState, useEffect } from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BottomNav from '../Components/BottomNav'; // barra de navegación inferior

export default function RadioScreen() {
  const navigation = useNavigation();
  const [listening, setListening] = useState(false);
  const [mensaje, setMensaje] = useState('Presiona ▶ para comenzar a escuchar');

  useEffect(() => {
    let interval;
    if (listening) {
      const mensajes = [
        'Tocando: Coldplay - Viva la Vida',
        'Tocando: Dua Lipa - Levitating',
        'Anuncio: ¡Escucha sin interrupciones!',
        'Tocando: Imagine Dragons - Believer',
      ];
      let index = 0;
      interval = setInterval(() => {
        setMensaje(mensajes[index]);
        index = (index + 1) % mensajes.length;
      }, 3000);
    } else {
      setMensaje('Presiona ▶ para comenzar a escuchar');
    }

    return () => clearInterval(interval);
  }, [listening]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>RadioMix 101.5 FM</Text>

        <Ionicons 
          name={listening ? 'radio' : 'radio-outline'} 
          size={100} 
          color="#003366" 
          style={{ marginVertical: 30 }}
        />

        <TouchableOpacity style={styles.button} onPress={() => setListening(!listening)}>
          <Text style={styles.buttonText}>
            {listening ? 'Detener' : 'Escuchar en vivo'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.message}>{mensaje}</Text>
      </View>

      {/* Barra de navegación inferior fija */}
      <BottomNav activeTab="radio" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
  },
  content: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 20,
  },
  title: { 
    fontSize: 24, 
    color: '#003366', 
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40
  },
  button: {
    backgroundColor: '#003366', 
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 20,
    alignSelf: 'center'
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: 'bold',
    textAlign: 'center'
  },
  message: { 
    color: '#003366', 
    fontSize: 16, 
    textAlign: 'center', 
    marginBottom: 20
  },
  backButton: {
    position: 'absolute',
    bottom: 70, // arriba de la barra
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});