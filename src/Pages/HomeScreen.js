import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import CategoriaCard from "../components/CategoriaCard";
import NewsCard from "../components/NewsCard";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [categorias, setCategorias] = useState([]);
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const API = "https://noticieroselreloj.com/wp-json/api";

  // Cargar categorías y noticias
  const cargarDatos = async () => {
    try {
      const resCat = await fetch(`${API}/categorias`);
      const jsonCat = await resCat.json();

      const resNot = await fetch(`${API}/noticias`);
      const jsonNot = await resNot.json();

      setCategorias(jsonCat);
      setNoticias(jsonNot);
    } catch (error) {
      console.log("Error cargando datos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  // Filtrar noticias por categoría
  const abrirCategoria = async (categoria) => {
    try {
      const res = await fetch(`${API}/noticias/categoria/${categoria}`);
      const json = await res.json();

      navigation.navigate("NewsList", {
        categoria,
        noticiasFiltradas: json
      });
    } catch (error) {
      console.log("Error filtrando:", error);
    }
  };

  const abrirDetalle = (news) => {
    navigation.navigate("NewsDetail", { news });
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0a325a" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.section}>Categorías</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
        {categorias.map((cat) => (
          <CategoriaCard
            key={cat.id}
            name={cat.name}
            image={cat.image}
            onPress={() => abrirCategoria(cat.name)}
          />
        ))}
      </ScrollView>

      <Text style={styles.section}>Últimas Noticias</Text>

      {noticias.map((item) => (
        <NewsCard
          key={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          onPress={() => abrirDetalle(item)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  section: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0a325a",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
