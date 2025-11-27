export const obtenerNoticias = async () => {
  try {
    const respuesta = await fetch(
      "http://localhost/webcurso/wp-json/noticias/v1/noticias"
    );
    return await respuesta.json();
  } catch (error) {
    console.log("Error al obtener noticias:", error);
    return [];
  }
};
