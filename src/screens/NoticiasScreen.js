javascript
import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { obtenerNoticias } from "../services/noticiasService";

export default function NoticiasScreen() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    obtenerNoticias().then(setNoticias);
  }, []);

  return (
    <ScrollView>
      {noticias.map((item) => (
        <View key={item.id} style={{ margin: 10 }}>
          <Text>{item.name}</Text>
          <Image
            source={{ uri: item.image }}
            style={{ width: "100%", height: 200 }}
          />
          <Text>{item.descripcion}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
