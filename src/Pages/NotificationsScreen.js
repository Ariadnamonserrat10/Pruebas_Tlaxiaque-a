import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Vibration, Animated, TouchableOpacity } from 'react-native';
import AppBar from '../Components/AppBar';
import BottomNav from '../Components/BottomNav';

const initialNotifications = [
  {
    id: 1,
    title: 'Noticias destacadas',
    description: 'Mantente informado con las últimas actualizaciones y eventos importantes.',
    time: 'Ahora',
    icon: 'https://cdn-icons-png.flaticon.com/512/1827/1827279.png',
    unread: true,
  },
];

const sampleNotifications = [
  { title: 'Actualización del sistema', description: 'Nueva versión disponible con mejoras de rendimiento y correcciones de seguridad.', icon: 'https://cdn-icons-png.flaticon.com/512/992/992703.png' },
  { title: 'Recordatorio diario', description: 'No olvides revisar las noticias más relevantes de hoy y mantenerte actualizado.', icon: 'https://cdn-icons-png.flaticon.com/512/561/561127.png' },
  { title: 'Nueva noticia', description: 'Se ha añadido una nueva noticia en la sección de Locales', icon: 'https://cdn-icons-png.flaticon.com/512/847/847969.png' },
];

function NotificationCard({ item }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(translateY, { toValue: 0, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Animated.View style={[
        styles.card, 
        item.unread && styles.cardUnread,
        { opacity: fadeAnim, transform: [{ translateY }] }
      ]}>
        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Image source={{ uri: item.icon }} style={styles.icon} />
          </View>
          {item.unread && <View style={styles.unreadDot} />}
        </View>
        
        <View style={styles.textContainer}>
          <View style={styles.titleRow}>
            <Text style={[styles.title, item.unread && styles.titleUnread]} numberOfLines={1}>
              {item.title}
            </Text>
            {item.unread && <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>NUEVO</Text>
            </View>}
          </View>
          <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}

export default function NotificationsScreen({ navigation, route }) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const nextId = useRef(2);

  const markRead = route?.params?.markRead || false;

  // Marcar todas como leídas al entrar
  useEffect(() => {
    if (markRead) {
      setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
    }
  }, [markRead]);

  // Agregar nuevas notificaciones cada 20 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * sampleNotifications.length);
      const newNotification = {
        id: nextId.current,
        title: sampleNotifications[random].title,
        description: sampleNotifications[random].description,
        icon: sampleNotifications[random].icon,
        time: 'Ahora',
        unread: true,
      };
      nextId.current += 1;

      Vibration.vibrate(300);

      setNotifications(prev => [newNotification, ...prev]);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <View style={styles.container}>
      <AppBar
        onSearchPress={() => {}}
        onNotificationsPress={() => {}}
        hasUnread={notifications.some(n => n.unread)}
      />

      {unreadCount > 0 && (
        <View style={styles.header}>
          <Text style={styles.headerText}>
            {unreadCount} notificación{unreadCount !== 1 ? 'es' : ''} sin leer
          </Text>
          <TouchableOpacity 
            onPress={() => setNotifications(prev => prev.map(n => ({ ...n, unread: false })))}
            style={styles.markAllButton}
          >
            <Text style={styles.markAllText}>Marcar todas como leídas</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={notifications}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <NotificationCard item={item} />}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        showsVerticalScrollIndicator={false}
      />

      <BottomNav activeTab="notifications" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F0F4FF' 
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#DBEAFE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E3A8A',
    letterSpacing: 0.3,
  },
  markAllButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#EFF6FF',
    borderRadius: 8,
  },
  markAllText: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '700',
  },
  listContent: { 
    padding: 16, 
    paddingBottom: 100 
  },
  card: { 
    flexDirection: 'row', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 16, 
    padding: 18,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1.5,
    borderColor: '#E0E7FF',
  },
  cardUnread: {
    backgroundColor: '#EFF6FF',
    borderWidth: 2,
    borderColor: '#3B82F6',
    shadowColor: '#3B82F6',
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 6,
  },
  separator: {
    height: 12,
  },
  iconContainer: { 
    marginRight: 14, 
    position: 'relative',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#93C5FD',
  },
  icon: { 
    width: 30, 
    height: 30,
  },
  unreadDot: { 
    position: 'absolute', 
    top: -2, 
    right: -2, 
    width: 14, 
    height: 14, 
    borderRadius: 7, 
    backgroundColor: '#2563EB', 
    borderWidth: 3, 
    borderColor: '#FFFFFF',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  textContainer: { 
    flex: 1,
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  title: { 
    fontWeight: '600', 
    fontSize: 16, 
    color: '#2C3E50',
    letterSpacing: 0.1,
    flex: 1,
  },
  titleUnread: {
    fontWeight: '700',
    color: '#1A252F',
  },
  description: { 
    fontSize: 14, 
    color: '#5A6C7D',
    lineHeight: 20,
    marginBottom: 6,
  },
  timeText: { 
    fontSize: 12, 
    color: '#95A5A6',
    fontWeight: '500',
    marginTop: 2,
  },
  newBadge: {
    backgroundColor: '#3498DB',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    marginLeft: 8,
  },
  newBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});