import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function SoporteScreen() {
  const abrirCorreo = () => {
    Linking.openURL("mailto:soporte@miapp.com?subject=Ayuda%20con%20la%20app");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contactar Soporte</Text>
      <Text style={styles.text}>
        Si tienes algún problema o duda, nuestro equipo de soporte está disponible para ayudarte.
      </Text>

      <TouchableOpacity style={styles.boton} onPress={abrirCorreo}>
        <Text style={styles.botonTexto}>Enviar correo a soporte</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 15 },
  text: { fontSize: 16, color: "#333", marginBottom: 20 },
  boton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
  },
  botonTexto: { color: "#fff", fontSize: 18, textAlign: "center" },
});