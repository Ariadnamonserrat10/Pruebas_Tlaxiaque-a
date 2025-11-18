import React from "react";
import { ScrollView, Text, StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

export default function PoliticaPrivacidadScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}> 
        <Text style={styles.titulo}>Política de Privacidad</Text>
        
        <Text style={styles.sectionTitle}>1. Identidad y responsabilidad</Text>
        <Text style={styles.text}>
          Esta aplicación (en adelante “la App”) es operada por [Nombre de la organización o persona responsable], con domicilio en [Dirección completa], y correo electrónico de contacto: [tu-email@ejemplo.com].  
          Al usar la App, aceptas esta política en su totalidad.
        </Text>

        <Text style={styles.sectionTitle}>2. Datos que recopilamos</Text>
        <Text style={styles.text}>
          Podemos recopilar los siguientes tipos de datos personales:
        </Text>
        <Text style={styles.textSmall}>
          • Nombre, correo electrónico, número de teléfono (cuando el usuario lo proporciona).{'\n'}
          • Identificadores de dispositivo (UUID, IDFA/Advertising ID, versión de sistema, modelo de dispositivo).{'\n'}
          • Datos de uso: pantalla visitada, tiempo de uso, errores/caídas, logs de actividad.{'\n'}
          • Opcionalmente, ubicación aproximada (si el usuario lo permite) para ciertas funcionalidades.
        </Text>

        <Text style={styles.sectionTitle}>3. Finalidades del tratamiento</Text>
        <Text style={styles.textSmall}>
          • Brindar los servicios y funciones de la app.{'\n'}
          • Mejorar la experiencia del usuario (analíticas, estadísticas sobre uso).{'\n'}
          • Enviar notificaciones, alertas o comunicaciones pertinentes.{'\n'}
          • Atender solicitudes, soporte, resolver fallos y mantener la app actualizada.
        </Text>

        <Text style={styles.sectionTitle}>4. Compartir datos con terceros</Text>
        <Text style={styles.text}>
          No compartimos tus datos con terceros para fines comerciales sin tu consentimiento explícito.  
          Podemos compartir ciertos datos con servicios auxiliares (por ejemplo: servicios de análisis, servicios de notificaciones push, plataformas de hosting), bajo acuerdos que garanticen la confidencialidad y seguridad de la información.
        </Text>

        <Text style={styles.sectionTitle}>5. Seguridad de los datos</Text>
        <Text style={styles.text}>
          Adoptamos medidas técnicas y organizativas para proteger tus datos contra pérdida, acceso no autorizado, alteración o destrucción.  
          Aunque hacemos esfuerzos razonables, no podemos garantizar una seguridad absoluta.
        </Text>

        <Text style={styles.sectionTitle}>6. Retención de datos</Text>
        <Text style={styles.text}>
          Conservamos tus datos durante el tiempo necesario para cumplir con los fines para los cuales fueron recabados, o hasta que nos solicites su eliminación.  
          En el caso de datos recogidos para análisis, podemos conservar información agregada anonimizada por tiempo indeterminado.
        </Text>

        <Text style={styles.sectionTitle}>7. Derechos del usuario</Text>
        <Text style={styles.textSmall}>
          • Derecho de acceso: conocer qué datos tuyos tenemos.{'\n'}
          • Derecho de rectificación: corregir datos inexactos.{'\n'}
          • Derecho de supresión: pedir que eliminemos tus datos.{'\n'}
          • Derecho de oposición o limitación al tratamiento.{'\n'}
          • Derecho a la portabilidad de tus datos, si aplica.{'\n'}
          • Derecho a revocar el consentimiento cuando lo hayas dado.
        </Text>

        <Text style={styles.sectionTitle}>8. Cambios a esta política</Text>
        <Text style={styles.text}>
          Nos reservamos el derecho de modificar esta política cuando sea necesario (por ejemplo, cambios en la legislación, en nuestra app o en servicios).  
          Publicaremos la nueva versión con la fecha de actualización y si los cambios son sustanciales, notificaremos a los usuarios activos.
        </Text>

        <Text style={styles.sectionTitle}>9. Contacto</Text>
        <Text style={styles.text}>
          Si tienes dudas, solicitudes o quieres ejercer tus derechos, escríbenos a: [tu-email@ejemplo.com].  
          Fecha de última actualización: [DD/MM/AAAA].
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 7, 
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#333",
    marginBottom: 12,
    lineHeight: 22,
  },
  textSmall: {
    fontSize: 15,
    color: "#555",
    marginBottom: 8,
    lineHeight: 20,
  },
});
