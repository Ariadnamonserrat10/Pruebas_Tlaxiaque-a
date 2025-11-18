import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function PreguntasScreen() {
  return (
    <ScrollView style={[styles.container,{padding :30} ]}> 
      <Text style={styles.titulo}>Preguntas Frecuentes</Text>

      <Text style={styles.pregunta}>¿Cómo puedo cambiar mi contraseña?</Text>
      <Text style={styles.respuesta}>
        Puedes hacerlo desde el menú de tu perfil, en la opción “Seguridad”.
      </Text>

      <Text style={styles.pregunta}>¿Cómo activo las notificaciones?</Text>
      <Text style={styles.respuesta}>
        Dirígete a Configuración → Notificaciones y activa las alertas que desees recibir.
      </Text>

      <Text style={styles.pregunta}>¿Puedo usar la app sin conexión?</Text>
      <Text style={styles.respuesta}>
        Algunas funciones requieren internet, pero otras seguirán disponibles sin conexión.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  pregunta: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  respuesta: { fontSize: 16, color: "#333", marginBottom: 10 },
});