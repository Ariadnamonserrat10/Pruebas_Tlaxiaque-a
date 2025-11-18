import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import NewsCard from "../components/NewsCard";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function NewsListScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { categoria, noticiasFiltradas } = route.params;

  const abrirDetalle = (news) => {
    navigation.navigate("NewsDetail", { news });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Noticias: {categoria}</Text>

      {noticiasFiltradas.length === 0 ? (
        <Text style={styles.empty}>No hay noticias aún en esta categoría.</Text>
      ) : (
        noticiasFiltradas.map((item) => (
          <NewsCard
            key={item.id}
            title={item.titulo}
            image={item.imagen}
            date={item.fecha}
            onPress={() => abrirDetalle(item)}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#0a325a",
  },
  empty: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 40,
  },
});
