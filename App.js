import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NetInfo from '@react-native-community/netinfo'; //  IMPORTANTE

// Pantallas principales
import SplishScreen from './src/Pages/SplishScreen';
import HomeScreen from './src/Pages/HomeScreen';
import NewsDetailScreen from './src/Pages/NewsDetailsScreen';
import RadioScreen from './src/Pages/RadioScreen';
import NotificationsScreen from './src/Pages/NotificationsScreen';

// Pantallas de configuración
import ConfiguracionScreen from './src/Pages/configuracionScreen';
import NotificacionesScreen from './src/Pages/NotificacionesScreen';
import IdiomaScreen from './src/Pages/IdiomaScreen';
import PoliticaPrivacidadScreen from './src/Pages/PoliticaPrivacidadScreen';
import TerminosScreen from './src/Pages/TerminosScreen';
import SoporteScreen from './src/Pages/SoporteScreen';
import PreguntasScreen from './src/Pages/PreguntasScreen';
import SocialScreen from './src/Pages/SocialScreen';

const Stack = createNativeStackNavigator();
  const [isConnected, setIsConnected] = useState(true); // ESTADO DE INTERNET


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ 
          headerShown: false,
          animation: 'none', // Desactiva animaciones globalmente
        }}
        initialRouteName="Splash"
      >
        {/* Pantallas principales */}
        <Stack.Screen name="Splash" component={SplishScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen 
          name="NewsDetail" 
          component={NewsDetailScreen} 
          options={{ 
            animation: 'none', // Sin animación al entrar y salir
          }}
        />
        <Stack.Screen name="Radio" component={RadioScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        {/* Pantallas de configuración */}
        <Stack.Screen name="Configuración" component={ConfiguracionScreen} />
        <Stack.Screen name="Notificaciones" component={NotificacionesScreen} />
        <Stack.Screen name="Idioma" component={IdiomaScreen} />
        <Stack.Screen name="Política de Privacidad" component={PoliticaPrivacidadScreen} />
        <Stack.Screen name="Términos y Condiciones" component={TerminosScreen} />
        <Stack.Screen name="Contactar Soporte" component={SoporteScreen} />
        <Stack.Screen name="Preguntas Frecuentes" component={PreguntasScreen} />
        <Stack.Screen name="Social" component={SocialScreen} />
            {/* MENSAJE SI NO HAY INTERNET */}
              {!isConnected && (
                <View style={styles.noInternetBanner}>
                  <Text style={styles.noInternetText}>No tienes conexión a Internet</Text>
                </View>
              )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles =  StyleSheet.create({
   noInternetBanner: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    backgroundColor: "#0c0c0cff",
    alignItems: "center",
    zIndex: 999,
  },
  noInternetText: {
    color: "#fff",
    fontWeight: "bold",
  },
})