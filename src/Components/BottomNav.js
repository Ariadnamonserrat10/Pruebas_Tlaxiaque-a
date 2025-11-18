import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function BottomNav({ activeTab = 'home' }) {
  const navigation = useNavigation();
  
  // Posición de la burbuja
  const bubblePosition = useRef(new Animated.Value(getBubblePosition(activeTab))).current;
  
  // Escala y posición Y de la burbuja
  const bubbleScale = useRef(new Animated.Value(1)).current;
  const bubbleTranslateY = useRef(new Animated.Value(0)).current;

  // Calcula la posición de la burbuja según el tab activo
  function getBubblePosition(tab) {
    const positions = {
      'home': 0,
      'radio': 1,
      'social': 2,
      'settings': 3,
    };
    return positions[tab] || 0;
  }

  useEffect(() => {
    const targetPosition = getBubblePosition(activeTab);
    
    // Animación de la burbuja moviéndose con efecto bounce más fluido
    Animated.parallel([
      // Movimiento horizontal más suave y lento
      Animated.spring(bubblePosition, {
        toValue: targetPosition,
        friction: 8,
        tension: 50,
        useNativeDriver: true,
      }),
      // Efecto bounce más suave en la escala
      Animated.sequence([
        Animated.timing(bubbleScale, {
          toValue: 0.85,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.spring(bubbleScale, {
          toValue: 1.08,
          friction: 6,
          tension: 50,
          useNativeDriver: true,
        }),
        Animated.spring(bubbleScale, {
          toValue: 1.0,
          friction: 7,
          tension: 50,
          useNativeDriver: true,
        }),
      ]),
      // Movimiento Y más suave (sobresale hacia arriba)
      Animated.sequence([
        Animated.timing(bubbleTranslateY, {
          toValue: -6,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.spring(bubbleTranslateY, {
          toValue: 0,
          friction: 7,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [activeTab]);

  const handlePress = (tabName, route) => {
    if (tabName === 'home') {
      navigation.reset({
        index: 0,
        routes: [{ name: route }],
      });
    } else {
      navigation.navigate(route);
    }
  };

  // Calcula el translateX de la burbuja con mejor precisión
  const containerWidth = width - 40; // padding horizontal
  const itemWidth = containerWidth / 4;
  const bubbleTranslateX = bubblePosition.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [
      itemWidth * 0.5 - 27.5,
      itemWidth * 1.5 - 27.5,
      itemWidth * 2.5 - 27.5,
      itemWidth * 3.5 - 27.5,
    ],
  });

  const renderNavItem = (tabName, icon, label, route) => {
    const isActive = activeTab === tabName;
    
    return (
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress(tabName, route)}
        activeOpacity={0.7}
      >
        <View style={styles.iconContainer}>
          <Ionicons
            name={icon}
            size={26}
            color={isActive ? '#FFFFFF' : '#0047AB'}
          />
          <Text style={[
            styles.labelText,
            isActive && styles.activeLabelText
          ]}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Burbuja animada */}
      <Animated.View
        style={[
          styles.bubble,
          {
            transform: [
              { translateX: bubbleTranslateX },
              { translateY: bubbleTranslateY },
              { scale: bubbleScale },
            ],
          },
        ]}
      />

      {/* Iconos */}
      {renderNavItem('home', 'home', 'Inicio', 'Home')}
      {renderNavItem('radio', 'radio', 'Radio', 'Radio')}
      {renderNavItem('social', 'people', 'Social', 'Social')}
      {renderNavItem('settings', 'settings-sharp', 'Ajustes', 'Configuración')}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    position: 'relative',
  },
  bubble: {
    position: 'absolute',
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: '#0047AB',
    elevation: 8,
    shadowColor: '#0047AB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    left: 20,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    flex: 1,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: 55,
  },
  labelText: {
    fontSize: 9,
    fontWeight: '600',
    marginTop: 2,
    color: '#0047AB',
  },
  activeLabelText: {
    color: '#FFFFFF',
  },
});