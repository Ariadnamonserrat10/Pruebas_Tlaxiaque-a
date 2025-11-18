import React, { useState, useEffect, useMemo } from 'react';
import { View, StyleSheet, Animated, Dimensions, Image, Easing, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import animConfig from '../Animation/splash-complete.json';

const { width, height } = Dimensions.get('window');

const createAnimatedValues = () => ({
  logoY: new Animated.Value(height / 2 + animConfig.logo.initialY),
  logoOpacity: new Animated.Value(0),
  logoScale: new Animated.Value(animConfig.logo.initialScale),
  progressRotation: new Animated.Value(0),
  progressOpacity: new Animated.Value(0),
  elementsOpacity: new Animated.Value(1),
  sceneScale: new Animated.Value(1),
  sceneRotate: new Animated.Value(0),
});

const createParticleArrays = () => {
  const createParticles = (count) =>
    Array.from({ length: count }, () => ({
      x: new Animated.Value(0),
      y: new Animated.Value(0),
      opacity: new Animated.Value(0),
      scale: new Animated.Value(0.5),
    }));
  return {
    orbit: createParticles(animConfig.orbitParticles.count),
    mini: createParticles(animConfig.miniParticles.count),
    explosion: createParticles(animConfig.explosionParticles.count),
  };
};

export default function SplashScreen() {
  const navigation = useNavigation();
  const [showTransition, setShowTransition] = useState(false);
  const [hideElements, setHideElements] = useState(false);
  const [logoFixed, setLogoFixed] = useState(false);

  const anims = useMemo(() => createAnimatedValues(), []);
  const particles = useMemo(() => createParticleArrays(), []);

  // Cuando el logo queda fijo, se iniciarán las animaciones de progreso/órbita
  // y después de un pequeño retraso se lanzará la transición hacia la siguiente pantalla.

  //Animación de entrada del logo
  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.sequence([
        Animated.timing(anims.logoOpacity, {
          toValue: 1,
          duration: animConfig.logo.opacityDuration,
          useNativeDriver: true,
        }),
        Animated.timing(anims.logoY, {
          toValue: 0,
          duration: animConfig.logo.moveDuration,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(anims.logoScale, {
            toValue: animConfig.logo.bounceScale,
            duration: animConfig.logo.bounceDuration,
            easing: Easing.out(Easing.elastic(1.3)),
            useNativeDriver: true,
          }),
          Animated.timing(anims.logoScale, {
            toValue: animConfig.logo.finalScale,
            duration: animConfig.logo.bounceDuration,
            easing: Easing.out(Easing.elastic(1.1)),
            useNativeDriver: true,
          }),
        ]),
      ]).start(() => {
        setLogoFixed(true);
        Animated.timing(anims.progressOpacity, {
          toValue: 1,
          duration: animConfig.progress.opacityDuration,
          useNativeDriver: true,
        }).start(() => {
          startProgressRotation();
          startMiniParticlesPulse();
          // Iniciar la transición automáticamente después de un corto delay.
          // Si animConfig.autoTransitionDelay está presente en la configuración
          // se usará; de lo contrario usamos 1000ms por defecto.
          const delay = animConfig.autoTransitionDelay || 1000;
          setTimeout(() => startTransitionAnimation(), delay);
        });
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const startProgressRotation = () => {
    Animated.loop(
      Animated.timing(anims.progressRotation, {
        toValue: 360,
        duration: animConfig.progress.rotationDuration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const startMiniParticlesPulse = () => {
    particles.mini.forEach((particle, index) => {
      const angle = (index / particles.mini.length) * Math.PI * 2;
      const radius = animConfig.miniParticles.radius;
      const xPos = Math.cos(angle) * radius;
      const yPos = Math.sin(angle) * radius;

      particle.x.setValue(xPos);
      particle.y.setValue(yPos);

      Animated.loop(
        Animated.sequence([
          Animated.timing(particle.opacity, {
            toValue: 1,
            duration: animConfig.miniParticles.pulseDuration,
            useNativeDriver: false,
          }),
          Animated.timing(particle.scale, {
            toValue: 1.2,
            duration: animConfig.miniParticles.pulseDuration,
            useNativeDriver: false,
          }),
          Animated.parallel([
            Animated.timing(particle.opacity, {
              toValue: 0,
              duration: animConfig.miniParticles.pulseDuration,
              useNativeDriver: false,
            }),
            Animated.timing(particle.scale, {
              toValue: 0.5,
              duration: animConfig.miniParticles.pulseDuration,
              useNativeDriver: false,
            }),
          ]),
        ]),
        { delay: index * animConfig.miniParticles.delay }
      ).start();
    });
  };

  const startTransitionAnimation = () => {
    particles.explosion.forEach((particle, index) => {
      const angle = (index / particles.explosion.length) * Math.PI * 2;
      const distance =
        Math.random() *
        (animConfig.explosionParticles.distanceRange[1] -
          animConfig.explosionParticles.distanceRange[0]) +
        animConfig.explosionParticles.distanceRange[0];

      Animated.parallel([
        Animated.timing(particle.x, {
          toValue: Math.cos(angle) * distance,
          duration: animConfig.explosionParticles.duration,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
        Animated.timing(particle.y, {
          toValue: Math.sin(angle) * distance,
          duration: animConfig.explosionParticles.duration,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: false,
        }),
        Animated.sequence([
          Animated.timing(particle.opacity, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(particle.opacity, {
            toValue: 0,
            duration: 750,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(particle.scale, {
          toValue: 0.1,
          duration: animConfig.explosionParticles.duration,
          useNativeDriver: false,
        }),
      ]).start();
    });

    Animated.parallel([
      Animated.timing(anims.sceneScale, {
        toValue: animConfig.scene.scale,
        duration: animConfig.scene.rotateDuration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(anims.sceneRotate, {
        toValue: 360,
        duration: animConfig.scene.rotateDuration,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(anims.elementsOpacity, {
        toValue: 0,
        duration: animConfig.scene.fadeDuration,
        easing: Easing.in(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start(() => {
      setHideElements(true);
      navigation.replace('Home');
    });

    setShowTransition(true);
  };

  if (hideElements) return <HomeScreen />;

  return (
    <View style={styles.container}>
      <View style={styles.gradientBg} />

      <Animated.View
        style={[
          styles.mainContainer,
          {
            opacity: anims.elementsOpacity,
            transform: [
              { scale: anims.sceneScale },
              {
                rotate: anims.sceneRotate.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      >
        {/* Logo */}
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: anims.logoOpacity,
              transform: [
                { scale: anims.logoScale },
                { translateY: anims.logoY },
              ],
            },
          ]}
        >
          <Image
            source={require('../img/nt-el-reloj-circular.gif')}
            style={styles.logo} />
        </Animated.View>

        {/* Mini partículas */}
        {logoFixed &&
          particles.mini.map((particle, index) => {
            const colorIndex = index % 2;
            const particleColor = colorIndex === 0 ? '#FFFFFF' : '#0052cc';
            return (
              <Animated.View
                key={`mini-${index}`}
                style={[
                  styles.miniParticle,
                  {
                    opacity: particle.opacity,
                    backgroundColor: particleColor,
                    transform: [
                      { translateX: particle.x },
                      { translateY: particle.y },
                      { scale: particle.scale },
                    ],
                  },
                ]}
              />
            );
          })}

        {/* Orbitas */}
        {logoFixed &&
          particles.orbit.map((particle, index) => {
            const angle = (index / particles.orbit.length) * Math.PI * 2;
            const radius = animConfig.orbitParticles.radius;
            const xPos = Math.cos(angle) * radius;
            const yPos = Math.sin(angle) * radius;

            return (
              <Animated.View
                key={`orbit-${index}`}
                style={[
                  styles.orbitParticle,
                  {
                    opacity: anims.progressOpacity,
                    backgroundColor: '#FFFFFF',
                    transform: [
                      {
                        rotate: anims.progressRotation.interpolate({
                          inputRange: [0, 360],
                          outputRange: ['0deg', '360deg'],
                        }),
                      },
                      { translateX: xPos },
                      { translateY: yPos },
                    ],
                  },
                ]}
              />
            );
          })}

        {/* Anillo */}
        {logoFixed && (
          <Animated.View
            style={[styles.orbitRing, { opacity: anims.progressOpacity }]}
          />
        )}

        {/* Explosión */}
        {showTransition &&
          particles.explosion.map((particle, index) => (
            <Animated.View
              key={`explosion-${index}`}
              style={[
                styles.particle,
                {
                  opacity: particle.opacity,
                  backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
                  transform: [
                    { translateX: particle.x },
                    { translateY: particle.y },
                    { scale: particle.scale },
                  ],
                },
              ]}
            />
          ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  gradientBg:
  {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#0a1e47'
  },
  mainContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  logoContainer:
  {
    zIndex: 3,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:
  {
    width: 160,
    height: 160,
    borderRadius: 80
  },
  orbitRing:
  {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    position: 'absolute',
    zIndex: 1
  },
  orbitParticle:
  {
    width: 12,
    height: 12,
    borderRadius: 6,
    position: 'absolute',
    shadowColor: '#FFFFFF',
    shadowOffset:
    {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 10,
    zIndex: 2
  },
  miniParticle:
  {
    width: 5,
    height: 5, borderRadius: 2.5,
    position: 'absolute',
    shadowOffset:
    {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 6,
    zIndex: 2
  },
  particle:
  {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    zIndex: 4
  },
  percentContainer:
  {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
    zIndex: 5
  },
  percentText:
  {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  loadingText:
  {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 8,
    fontWeight: '500'
  },
});
