import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AparienciaScreen() {
  const [tema, setTema] = useState("Claro");

  const temas = ["Claro", "Oscuro"];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: tema === "Oscuro" ? "#000" : "#fff" },
      ]}
    >
      <Text
        style={[
          styles.titulo,
          { color: tema === "Oscuro" ? "#fff" : "#000" },
        ]}
      >
        Apariencia
      </Text>

      {temas.map((item) => (
        <TouchableOpacity
          key={item}
          style={[
            styles.item,
            {
              backgroundColor:
                tema === item ? (tema === "Oscuro" ? "#222" : "#e0e0e0") : "transparent",
            },
          ]}
          onPress={() => setTema(item)}
        >
          <Text
            style={[
              styles.text,
              { color: tema === "Oscuro" ? "#fff" : "#000" },
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}

      <Text
        style={[
          styles.seleccion,
          { color: tema === "Oscuro" ? "#ccc" : "#333" },
        ]}
      >
        Tema seleccionado: {tema}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#888",
  },
  text: { fontSize: 18 },
  seleccion: { marginTop: 20, fontSize: 16 },
});