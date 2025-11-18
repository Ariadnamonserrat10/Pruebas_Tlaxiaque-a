

const BASE_URL = "http://localhost/Pruebas/wp-json/noticias";

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);

    if (!response.ok) {
      console.error("Error en la API:", response.status, response.statusText);
      return [];
    }

    const data = await response.json();
    return data || [];

  } catch (error) {
    console.error("Error al conectar con la API:", error);
    return [];
  }
}

// Obtener todas las noticias
export async function getNoticias() {
  return await fetchData("noticias");
}

// Obtener todas las categorías
export async function getCategorias() {
  return await fetchData("categorias");
}

// Obtener una noticia por ID
export async function getNoticiaById(id) {
  return await fetchData(`noticia/${id}`);
}
