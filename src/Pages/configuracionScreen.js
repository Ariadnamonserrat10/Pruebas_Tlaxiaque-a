import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomNav from "../Components/BottomNav";

export default function ConfiguracionScreen({ navigation }) {
  // 🔹 Estado del tema (Claro u Oscuro)
  const [tema, setTema] = useState("Claro");

  const fondo = tema === "Oscuro" ? "#000" : "#f5f5f5";
  const texto = tema === "Oscuro" ? "#fff" : "#000";
  const tarjeta = tema === "Oscuro" ? "#1c1c1c" : "#fff";

  return (
    <View style={{ flex: 1, backgroundColor: fondo }}>
      <ScrollView contentContainerStyle={{ padding: 10, paddingBottom: 100 }}>
        <Text style={[styles.titulo, { color: texto, paddingTop: 10 }]}>
          Configuración
        </Text>

        {/* Legal */}
        <View style={[styles.card, { backgroundColor: tarjeta }]}>
          <Text style={[styles.subtitulo, { color: texto }]}>Legal</Text>

          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Política de Privacidad")}
          >
            <Ionicons name="document-text-outline" size={22} color="#5B4CCC" />
            <Text style={[styles.text, { color: texto }]}>Política de privacidad</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Términos y Condiciones")}
          >
            <Ionicons name="newspaper-outline" size={22} color="#5B4CCC" />
            <Text style={[styles.text, { color: texto }]}>Términos y condiciones</Text>
          </TouchableOpacity>
        </View>

        {/* Soporte */}
        <View style={[styles.card, { backgroundColor: tarjeta }]}>
          <Text style={[styles.subtitulo, { color: texto }]}>Soporte</Text>

          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Contactar Soporte")}
          >
            <Ionicons name="headset-outline" size={22} color="#5B4CCC" />
            <Text style={[styles.text, { color: texto }]}>Contactar soporte</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Preguntas Frecuentes")}
          >
            <Ionicons name="help-circle-outline" size={22} color="#5B4CCC" />
            <Text style={[styles.text, { color: texto }]}>Preguntas frecuentes</Text>
          </TouchableOpacity>
          
        </View>
            

        {/* 🔘 Ajustes de Apariencia (comentado)
        <View style={[styles.card, { backgroundColor: tarjeta }]}>
          <Text style={[styles.subtitulo, { color: texto }]}>Ajustes de Apariencia</Text>

          <TouchableOpacity
            style={styles.item}
            onPress={() => setTema(tema === "Claro" ? "Oscuro" : "Claro")}
          >
            <Ionicons name="contrast-outline" size={22} color="#5B4CCC" />
            <Text style={[styles.text, { color: texto }]}>
              Cambiar a modo {tema === "Claro" ? "Oscuro" : "Claro"}
            </Text>
          </TouchableOpacity>
        </View>
        */}
      </ScrollView>

      <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
        <BottomNav activeTab="settings" />
      </View>
    </View>
  );
  
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  titulo: { fontSize: 26, fontWeight: "bold", marginVertical: 10, marginTop: 50 },
  card: {
    borderRadius: 12,
    padding: 10,
    marginVertical: 8,
    elevation: 3,
  },
  subtitulo: { fontWeight: "bold", fontSize: 18, marginBottom: 5 },
  item: { flexDirection: "row", alignItems: "center", paddingVertical: 10 },
  text: { fontSize: 16, marginLeft: 10 },
});
