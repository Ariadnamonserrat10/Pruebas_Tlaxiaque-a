import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  PanResponder,
  Linking,
  Text,
} from "react-native";
import BottomNav from "../Components/BottomNav";
import { FontAwesome } from "@expo/vector-icons";

export default function NotificacionesScreen() {
  const slideAnim = useRef(new Animated.Value(-500)).current;

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 7,
      tension: 60,
      useNativeDriver: true,
    }).start();
  }, []);

  const icons = [
    {
      name: "facebook",
      color: "#1877F2",
      label: "Facebook",
      number: "@periodicelreloj",
      url: "https://www.facebook.com/periodicelreloj?locale=es_LA",
    },
    {
      name: "whatsapp",
      color: "#25D366",
      label: "WhatsApp",
      number: "+52 953-100-0190",
      url: "https://wa.me/529531000190",
    },
    {
      name: "youtube-play",
      color: "#FF0000",
      label: "YouTube",
      number: "@NoticieroselRelojDeTlaxiaco",
      url: "https://www.youtube.com/@NoticieroselRelojDeTlaxiaco",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        {icons.map((icon, index) => (
          <DraggableIcon key={index} icon={icon} />
        ))}
      </Animated.View>

      {/* Barra inferior */}
      <BottomNav activeTab="social" />
    </View>
  );
}

function DraggableIcon({ icon }) {
  const position = useRef(new Animated.ValueXY()).current;


  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      // Solo activa arrastre si el dedo se mueve más de 5 px
      return Math.abs(gestureState.dx) > 5 || Math.abs(gestureState.dy) > 5;
    },
    onPanResponderMove: Animated.event(
      [null, { dx: position.x, dy: position.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  const handlePress = () => {
    Linking.openURL(icon.url).catch((err) =>
      console.error("Error al abrir el enlace:", err)
    );
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.card, position.getLayout()]}
    >
      <TouchableOpacity onPress={handlePress} style={styles.iconWrapper}>
        <FontAwesome name={icon.name} size={50} color={icon.color} />
        <View style={styles.textContainer}>
          <Text style={styles.label}>{icon.label}</Text>
          <Text style={styles.number}>{icon.number}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 6,
    width: 300,
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  number: {
    fontSize: 14,
    color: "#666",
  },
}); //redes sociales