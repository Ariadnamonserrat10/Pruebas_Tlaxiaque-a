import React from "react";
import { ScrollView, Text, StyleSheet, Platform, StatusBar } from "react-native";

export default function TerminosScreen() {
  return (
    <ScrollView style={[styles.container,{padding :30} ]}> 
      <Text style={styles.titulo}>Términos y Condiciones</Text>
      <Text style={styles.text}>
        Al usar esta aplicación, aceptas los siguientes términos y condiciones:
      </Text>
      <Text style={styles.text}>
        1. No podrás usar la app con fines ilegales o no autorizados.{"\n"}
        2. Nos reservamos el derecho de modificar o suspender el servicio en
        cualquier momento.{"\n"}
        3. El uso continuado implica la aceptación de los cambios realizados.
        
      </Text>
      <Text style={styles.text}>
        Agradecemos tu confianza al usar nuestra aplicación.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff",  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 60, 
  },
  text: { fontSize: 16, color: "#333", marginBottom: 10 },
});