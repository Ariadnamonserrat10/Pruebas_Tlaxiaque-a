import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

export default function NewsScreen() {
  const [news, setNews] = useState([]);
  const [isConnected, setIsConnected] = useState(true);
  const [wpError, setWpError] = useState(false);

  useEffect(() => {
    // Detecta conexión a Internet
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    fetchNews();

    return () => unsubscribe();
  }, []);

  const fetchNews = async () => {
    try {
      setWpError(false);
      const response = await fetch('https://tuwordpress.com/wp-json/wp/v2/posts');

      if (!response.ok) { 
        setWpError(true);
        return;
      }

      const data = await response.json();
      setNews(data);

    } catch (error) {
      // Error de conexión con WordPress
      setWpError(true);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      
      {/* Lista de noticias */}
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title.rendered}</Text>
          </View>
        )}
      />

      {/* Mensaje solo si NO hay internet o WordPress no responde */}
      {(!isConnected || wpError) && (
        <View style={styles.errorBar}>
          <Text style={styles.errorText}>
            Sin conexión a Internet o al servidor.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 8,
    elevation: 3
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  errorBar: {
    width: '100%',
    padding: 12,
    backgroundColor: '#ff5252',
    alignItems: 'center',
  },
  errorText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
