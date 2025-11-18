// hooks/useNoticias.js
import { useState, useEffect } from "react";
import { fetchNoticias } from "../services/api";

export default function useNoticias() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await fetchNoticias();
      setNoticias(data);
      setLoading(false);
    }
    loadData();
  }, []);

  return { noticias, loading };
}
