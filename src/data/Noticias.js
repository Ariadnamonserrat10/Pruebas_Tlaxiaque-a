// Se exporta un arreglo de categorías llamado categorias
export const categorias = [
  // Cada objeto representa una categoría con:
  // id identificador único
  // name  nombre de la categoría
  // image  URL de la imagen que representa la categoría
  { id: 1, name: 'Locales', image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/1092da62-81e5-4f2a-9fcd-cad2d24ae563.jpg' },
  { id: 2, name: 'Regionales', image: 'https://noticieroselreloj.com/wp-content/uploads/2025/09/images-3.jpeg' },
  { id: 3, name: 'Estatales', image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/Brindara-OSO-un-viaje-musical-entre-clasicos-universales-y-un-estreno-mundial-1.jpeg' },
  { id: 4, name: 'Nacionales', image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-03-at-16.31.07-1024x658.jpeg' },
  { id: 5, name: 'Internacionales', image: 'https://noticieroselreloj.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-22-at-13.23.52.jpeg' },
];

// Se exporta un arreglo de noticias llamado noticias
export const noticias = [
  // Cada objeto representa una noticia con:
  // id identificador único
  // title título de la noticia
  // summary resumen breve de la noticia
  // content contenido completo y detallado de la noticia
  // image URL de la imagen principal
  // date fecha de publicación
  // category categoría a la que pertenece la noticia

  {
    id: 1,
    title: 'Participa CEPCyGR en foro internacional “Tsunamis: del conocimiento a la acción” para fortalecer capacidad de respuesta',
    summary: `Santa María Huatulco, Oax. 5 de noviembre de 2025.- Con el respaldo de laCoordinación Estatal de Protección Civil y Gestión de Riesgos de Oaxaca (CEPCyGR), se realizó este miércoles en Bahías de Huatulco, el foro internacional “Tsunamis: del conocimiento a la acción, experiencias compartidas para la reducción de riesgos”, a fin de fortalecer la preparación y capacidad de respuesta ante fenómenos de origen oceánico.`,
    content: `En el marco del Día Mundial de Concienciación sobre Tsunamis, 5 de noviembre, el encuentro reunió a especialistas y autoridades de México y Japón en un espacio de diálogo e intercambio de conocimientos sobre acciones preventivas, educación y estrategias de preparación; que contribuyan a reducir el riesgo por fenómenos naturales en el Pacífico Mexicano.
    Durante el foro, se abordaron temas relacionados con la evaluación del peligro, la gestión del riesgo, resiliencia comunitaria y comunicación preventiva, en el que se destacó la importancia de consolidar procesos de capacitación y cultura de prevención en zonas costeras.
    Entre las instituciones participantes destacan el Centro Nacional de Prevención de Desastres (Cenapred), el Centro de Alerta de Tsunamis de la Secretaría de Marina, el Centro de Investigación para la Prevención de Desastres de la Universidad de Kioto, Japón, la Universidad Nacional Autónoma de México (UNAM), la Universidad de Hyogo, Japón y el Instituto México de Huatulco.
    La CEPCyGR establece vínculos de cooperación internacional para la reducción del riesgo de desastres e impulsa una cultura de protección civil basada en el conocimiento y la acción.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/11/Participa-CEPCyGR-en-foro-internacional-Tsunamis-del-conocimiento-a-la-accion-para-fortalecer-capacidad-de-respuesta-2-1024x742.jpeg',
    date: 'Noviembre 5, 2025',
    category: 'Locales',
  },
  {
    id: 2,
    title: 'Entre Oaxaca y Puebla la agresión armada contra «Marco Flores y La Banda Jerez»',
    summary: 'Momentos de terror vivieron los integrantes de «Marco Flores y La Banda Jerez», la madrugada de este lunes, cuando el autobús en el que viajaban fue atacado a balazos mientras regresaban de una presentación en Tlaxiaco, Oaxaca, rumbo a Jerez, Zacatecas; específicamente en la colindancia de Oaxaca y Puebla , dijo el artista a medios nacionales',
    content: `A través de sus redes sociales, Marco Flores denunció la inseguridad que se vive en las carreteras del país. Relató que el autobús de la agrupación recibió varios impactos de arma de fuego. Afortunadamente, ninguno de los músicos resultó herido, aunque sí se registraron daños materiales.
    “El autobús recibió varios impactos de bala, pero gracias a Dios todos estamos bien”, señaló el cantante.
Posteriormente, durante una entrevista con medios nacionales, Flores detalló que el ataque ocurrió en una zona alejada de la autopista, entre pueblos y barrancas, donde no hay vigilancia ni tránsito constante. “De repente empezaron a disparar de un costado y todos nos tiramos al suelo. Las balas pasaban de un lado a otro; el camión venía lleno arriba y abajo. Una bala pegó muy cerca del respaldo del chofer, pasó muy cerca de su espalda; afortunadamente lo estamos platicando”.
También mencionó que, tras el incidente, se comunicó con el Presidente para informar lo sucedido: “Le hicimos saber lo que pasó al Presidente y nos dijo que así eran las cosas, que más no se podía hacer. Al escuchar esto, se sintió una gran impotencia, pues es algo que se vive en muchas partes del país.” Lamentó la falta de seguridad en las carreteras y la poca respuesta de las autoridades ante hechos tan graves. “Le hablé a unos amigos del gobierno, pero me dijeron que no tenían acceso a las autoridades competentes. Es triste, porque nosotros podemos hablar en los medios, pero mucha gente no tiene esa oportunidad”, agregó.
El ataque no dejó personas lesionadas, pero sí genera preocupación entre los artistas que constantemente viajan por carretera para cumplir con sus presentaciones. “Ojalá esto sirva para que las autoridades hagan algo, porque no es justo lo que se vive”, finalizó.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/1761168251748.jpg',
    date: 'Octubre 22, 2025',
    category: 'Locales',
  },
  {
    id: 3,
    title: 'Congreso de Oaxaca establece nuevas formas de violencia contra las mujeres en la Ley Estatal de Acceso de las Mujeres a una Vida Libre de Violencia de Género',
    summary: `Este avance representa un acto de justicia y de responsabilidad legislativa.
Al robustecer el marco jurídico en la materia se contribuye a una sociedad más justa, igualitaria y libre de violencia`,
    content: `San Raymundo Jalpan, Oax., a 22 de octubre de 2025. - Con el propósito de fortalecer el marco jurídico para proteger los derechos humanos de las mujeres, el Congreso del Estado aprobó reformar y adicionar diversas disposiciones a la Ley Estatal de Acceso de las Mujeres a una Vida Libre de Violencia de Género, para establecer las violencias: por ataques con ácido, sustancias químicas o corrosivas, la estética, por Inteligencia Artificial(IA), la reproductiva y cualquier otra forma de violencia que lesione o  dañe la dignidad, integridad, patrimonio y libertad de esta población.
    El Proyecto de Decreto fue el resultado de la dictaminación en conjunto de cinco iniciativas por parte de la Comisión Permanente de Mujeres e Igualdad de Género que presentaron las diputadas de Morena Cecilia Olivia Cruz Merlín y Dennis García Gutiérrez, así como del Partido Verde Ecologista de México (PVEM): Melina Hernández Sosa, Eva Diego Cruz y Elvia Gabriela Pérez López.
    El órgano legislativo en cuestión consideró que, con el paso del tiempo, las estructuras sociales, los avances tecnológicos, las nuevas dinámicas de comunicación y los procesos de globalización han propiciado escenarios donde surgen nuevas modalidades de violencia y ante esta realidad el marco jurídico no puede permanecer estático.
    La Iniciativa de Reforma fue aprobada con 37 votos en la Sesión Extraordinaria del pasado 30 de septiembre de 2025, mediante la cual se deroga la fracción XIII y se adicionan las fracciones XIV, XV, XVI, XVII y XVIII al artículo 7, se reforma la denominación del Capítulo Tercero Bis y se adiciona el artículo 17 Quinquies a la Ley Estatal de Acceso de las Mujeres a una vida Libre de Violencia de Género.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/Dip-Cecilia-Olivia-Cruz-Merlin-1024x682.jpeg',
    date: 'Octubre  22, 2025',
    category: 'Locales',
  },
  {
    id: 4,
    title: 'Se realizan recorridos en la zona de conflicto entre San Juan Mixtepec y Santo Domingo Yosoñama: buscan bases para resolver conflicto agrario',
    summary: 'En entrevista para «Noticieros El Reloj», Carlos Pérez Campos Subsecretario de Desarrollo Democrático, anunció el inicio de los recorridos en la zona de conflicto agrario entre San Juan Mixtepec y Santo Domingo Yosoñama, una disputa que ha mantenido divididos a ambos pueblos por más de 70 años.',
    content: `De acuerdo con el subsecretario, este acercamiento representa un hecho histórico, pues después de décadas de enfrentamientos, hoy las comunidades han decidido hermanarse y apostar por el diálogo y la paz.
    El funcionario explicó que este proceso forma parte del Eje de Paz Territorial impulsado por el Gobernador Salomón Jara Cruz, a través de la Secretaría de Gobierno, encabezada por Jesús Romero López, dentro de la Mesa de Inteligencia Agraria, instancia que trabaja diariamente para generar acercamientos entre comunidades con conflictos sociales y agrarios.
    Durante el recorrido participan comisiones de 25 personas por comunidad, además de representantes de la Secretaría de Gobierno, la Junta de Conciliación Agraria y Elementos de la Guardia Nacional, la Secretaría de Marina y la Policía Estatal.
    “El objetivo es ubicar con precisión el polígono en controversia y avanzar hacia una solución pacífica”, declaró.
    Informó que los trabajos iniciados el día de ayer miercoles veintidós de octubre registrando ya un avance del 70%, para delimitar el area en conflicto, por lo que se espera concluir este jueves y presentar los resultados a ambas comunidades en los próximos días.
    Finalmente, reconoció el acompañamiento del Gobierno Federal, que participa en la Mesa de Inteligencia Agraria a través de la Secretaría de Gobernación y otras instituciones, sumando esfuerzos para encontrar soluciones duraderas a los conflictos agrarios en Oaxaca.
    “Lo importante es que los pueblos están demostrando su deseo de vivir en paz y de construir un futuro mejor para sus habitantes”, concluyó.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-23-at-16.05.59-1-1024x576.jpeg',
    date: 'Octubre  23, 2025',
    category: 'Regionales',
  },
  {
    id: 5,
    title: 'Realiza Ceabien ampliación del sistema de agua potable en Santiago Juxtlahuaca',
    summary: 'La obra que se lleva a cabo en la comunidad de Tilapa forma parte de un proyecto estatal de red hidráulica que mejorará la distribución del líquido para beneficio de las familias',
    content: `Santiago Juxtlahuaca, Oax. 10 de octubre de 2025.- El Gobierno de Oaxaca lleva a cabo la ampliación del sistema de agua potable en la comunidad de Tilapa, del municipio de Santiago Juxtlahuaca; para garantizar el acceso digno y constante al vital líquido para las familias.
    Esta obra de infraestructura hidráulica responde a las necesidades del presente y las exigencias del futuro, toda vez que contempla acciones para la mejora en la captación, el transporte, almacenamiento y la distribución del agua; con una visión integral que prioriza la eficiencia, resiliencia y sustentabilidad.
    El director general de la Comisión Estatal del Agua para el Bienestar (Ceabien), Neftalí Amigdael López Hernández informó que durante años esta comunidad mixteca ha enfrentado limitaciones de abastecimiento de este recurso natural; afectando la calidad de vida y el desarrollo social, por lo cual, con este proyecto se busca revertir esas condiciones.
    «No más obras temporales o promesas incumplidas. Hoy actuamos con planes técnico sociales, alineados al bienestar de la población”, dijo.
    La intervención en Tilapa forma parte de un proyecto estatal de red hidráulica, que se desarrolla en colaboración con las autoridades municipales, participación comunitaria y acompañamiento técnico para asegurar su funcionamiento y confianza.
    La ampliación del sistema de agua potable tiene también impacto en la salud pública, ya que reduce riesgos de contaminación, mejora las condiciones domésticas y evita desplazamientos innecesarios de personas que buscaban acceso al vital líquido en condiciones inseguras.
    Además de la mejora directa del servicio, estas obras tienen un fuerte componente de justicia social: responde a una demanda histórica de comunidades que han carecido de recursos en infraestructura básica.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/CEABIEN-3-3.jpeg',
    date: 'Octubre 10, 2025',
    category: 'Regionales',
  },
  {
    id: 6,
    title: 'Anuncia Sectur Oaxaca el Festival del Mole de Caderas 2025 y la Guelaguetza Ñuu Savi',
    summary: `Anuncia #Sectur Oaxaca el #Festival del #MoledeCaderas 2025 y la Guelaguetza Ñuu Savi—
    Estas actividades se realizarán del 10 al 12 de octubre en la capital oaxaqueña y el 11 en la Heroica Ciudad de Huajuapan de León`,
    content: `Oaxaca de Juárez, Oax. 25 de septiembre de 2025.- El Gobierno del Estado a través la Secretaría de Turismo (Sectur) anunció el Festival del Mole de Caderas 2025 y la Guelaguetza Ñuu Savi, que se llevarán a cabo del 10 al 12 de octubre en Oaxaca de Juárez y la Heroica Ciudad de Huajuapan de León.
    El festival iniciará en la capital oaxaqueña del 10 al 12 de octubre, durante estos tres días el público podrá visitar 20 stands gastronómicos y 5 de artesanías, además disfrutará un programa artístico que enaltece las tradiciones de la región. Estas actividades se desarrollarán de 12:00 a 18:00 horas en la Plaza de la Danza.
    El 11 de octubre a partir de las 13:00 horas, el Recinto Ferial de Huajuapan será sede simultánea del festival y de la Guelaguetza Ñuu Savi.
    Al respecto, la titular de la Sectur Oaxaca, Saymi Pineda Velasco destacó que, durante esta temporada, la capital del estado espera una ocupación hotelera del 52.98 por ciento, con la llegada de 12 mil 307 turistas y una derrama económica de poco más de 66 millones de pesos; mientras que, en Huajuapan de León, se estima la llegada de 11 mil 831 visitantes quienes dejarán ingresos aproximados a los 18 millones de pesos.
    Asimismo, informó que este año se suman actividades coordinadas con las secretarías de las Culturas y Artes de Oaxaca (Seculta) y de Desarrollo Económico (Sedeco), así como, con los institutos de Lenguas Originarias de Oaxaca (ILEO) y del Deporte (Indeporte).
    Estas festividades abonan a otras que favorecen la riqueza de la región Mixteca:  el 12 de octubre se efectuará el Festival de la Barbacoa y Cerveza Artesanal en Villa Tejúpam de la Unión; el Concierto de Música Tradicional en la Capilla Abierta de San Pedro y San Pablo Teposculula y el Rodeo de la Mixteca en Huajuapan de León; mientras que el día 18 se efectuará el Festival del Mole Negro en Tlaxiaco.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/09/Anuncia-Sectur-la-llegada-del-Festival-del-Mole-de-Caderas-2025-y-la-Guelaguetza-Nuu-Savi-3.jpeg',
    date: 'Septiembre 25, 2025',
    category: 'Regionales',
  },
  {
    id: 7,
    title: 'Construye Salomón Jara centro de inteligencia para consolidar un Oaxaca seguro',
    summary: `Construye Salomón Jara #centro de #inteligencia para consolidar un #Oaxacaseguro—
El Gobernador del Estado supervisó esta obra pública que tiene un avance del 78.72 %
Visitó zonas donde se edifican: Casa de Transición del DIF, Parque Lineal y modernización de avenida Valerio Trujano y Riveras de Río Atoyac; en Oaxaca de Juárez y Xoxocotlán`,
    content: `Oaxaca de Juárez, Oax. 26 de octubre de 2025.- El Gobernador Salomón Jara Cruz supervisó el avance en la construcción del Centro de Control, Comando, Comunicación, Coordinación e Inteligencia (C5I), obra de infraestructura que colocará a Oaxaca a la vanguardia en las tareas de seguridad pública, con tecnología de primera generación que permitirá reducir los delitos.
    Durante el recorrido por este inmueble, el Mandatario estatal aseveró que para el Gobierno de la Primavera Oaxaqueña, la salvaguarda de las familias es una prioridad, toda vez que no puede haber desarrollo sin paz.
    En este sentido, señaló que este esfuerzo se suma al fortalecimiento de las policías municipales, con: capacitación, certificación y equipamiento; que se han brindado desde el inicio de su administración, y que consolidan a Oaxaca como el quinto estado más seguro del país.
    Con una inversión de 398 millones 412 mil 236 pesos, el C5I se construye sobre una superficie total de 4 mil 11 metros cuadrados, incluirá 110 pantallas en videowall, área de operadores del número de emergencias 9-1-1 y de denuncia anónima 089; urgencias médicas y estación de drones.
    Este complejo ubicado en la esquina de avenida Eduardo Mata con prolongación de Xicoténcatl, registra un avance del 78.72 por ciento en su edificación, incluye las direcciones de Tecnologías, Análisis y Policía Cibernética, entre otros.
    Moderniza Zona Metropolitana de Oaxaca con infraestructura pública
    Además, el Gobernador de Oaxaca recorrió diversas Obras Primavera que se realizan en el municipio de Oaxaca de Juárez, entre las que destaca la Casa de Transición del Sistema DIF Oaxaca, la primera en su tipo en el país, en la cual se atenderá a mujeres adolescentes que se encuentran en acogimiento residencial.
    La construcción, que actualmente está al 89 por ciento; es financiada con recursos por 5.3 millones de pesos. El inmueble con capacidad para albergar a 10 jóvenes, dispondrá de habitaciones, 5 baños, cocina, comedor, lavandería, sala de estar, patio central y corredores; sobre una superficie de 297 metros cuadrados.
    Jara Cruz visitó, también, los trabajos que se realizan para la rehabilitación integral de la calzada Valerio Trujano, la cual presenta un avance del 76 por ciento. En esta obra, en la que se emplean 77 millones 820 mil 320 pesos, se pavimentan con concreto 875.84 metros lineales, en la cual habrá banquetas y señalización preventiva y restrictiva.
    La intervención a esta vialidad incluye renovación de luminarias, de las redes de distribución de agua potable y drenaje; y de los sistemas eléctricos y de telefonía.
    En otro punto, el Gobernante oaxaqueño acudió a la zona donde se instala el Parque Lineal Riveras del Atoyac, sobre una superficie de 35 mil metros cuadrados. Ahí se contempla una trotapista y ciclovía, conexiones peatonales, áreas de recreación, canchas de usos múltiples y gimnasio al aire libre.
    En una primera etapa, este camino será modernizado en una longitud de 3.1 kilómetros de vialidad, en el cual se dispondrá de banquetas, arbolado y ciclovía. Estos trabajos tienen, actualmente, un avance del 43 por ciento.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/Construye-Salomon-Jara-centro-de-inteligencia-para-consolidar-un-Oaxaca-seguro-1-1024x682.jpeg',
    date: 'Octubre 26, 2025',
    category: 'Estatales',
  },

  {
    id: 8,
    title: 'Invita Sectur Oaxaca a eventos de la “Fiesta Más Viva de Todas” en Valles Centrales y Costa',
    summary: 'Oaxaca de Juárez, Oax. 24 de octubre de 2025.- El Gobierno del Estado a través de la Secretaría de Turismo (Sectur Oaxaca) dio a conocer que, para “La Fiesta más Viva de Todas” se realizarán diversas actividades en varios municipios de los Valles Centrales y la Costa.',
    content: `La subsecretaria de Operación Turística, Mariel López Villatoro, en representación de la secretaria de Turismo, Saymi Pineda Velasco destacó que esta es una de las festividades más importantes de la entidad y se celebra con muerteadas, comparsas, muestras gastronómicas y artesanales.
    En Soledad Etla, del 25 de octubre al 8 de noviembre, habrá diversas presentaciones, concursos y talleres; donde también destacan las muerteadas: El Imponente Barrio de Abajo, El Majestuoso Barrio de Arriba y  Los Reyes Matadamas.
    En el barrio de Cinco Señores en Oaxaca de Juárez, el 30 de octubre se celebrará la Comparsa Catrinas 2025 a las 21:00 horas, y el 1 de noviembre, la Tradicional Comparsa Cinco Señores, a partir de las 19:00 horas. 
    En San Agustín Etla, el 1 de noviembre se presentará la banda “La Universal, la de los Carnales” en el Barrio de San José, a partir de las 20:00 horas.
    Asimismo, los días 1 y 2 de noviembre, en Guadalupe Etla tendrá lugar El Padre de las Muerteadas; y en Santiaguito Etla, Los Hijos de la Muerteada, a partir de las 17:00 horas.
    El 2 de noviembre, nuevamente en el Barrio de Cinco Señores se efectuará la Comparsa de Muertos Infantil 2025, saliendo frente al mural en la calle Prolongación de la Noria a las 17:00 horas y el 16 de noviembre, la Octava Comparsa de Muertos Femenil y de Diversidad, desde el mismo punto a las 20:00 horas.
    También habrá actividades en San Jerónimo Yahuiche de Santa María Atzompa, Santiago Suchilquitongo, San Andrés Zautla, San Felipe Tejalápam, San Lorenzo Cacaotepec, Villa de Etla y su comunidad Santo Domingo Barrio Alto, Soledad Etla, Tlacolula de Matamoros y San Antonio Arrazola en Santa Cruz Xoxocotlán.
    Así como en Villa de Zaachila, San Antonino Castillo Velasco, Puerto Escondido en San Pedro Mixtepec, Río Grande en Villa de Tututepec de Melchor Ocampo y Santa María Huatulco.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/Anuncia-Sectur-Oaxaca-eventos-de-la-Fiesta-Mas-Viva-de-Todas-en-Valles-Centrales-y-Costa-1-1024x606.jpeg',
    date: 'Octubre 25, 2025',
    category: 'Estatales',
  },
  {
    id: 9,
    title: 'Promueve Gobierno de Oaxaca inclusión y respeto a derechos de personas de talla baja',
    summary: 'Oaxaca de Juárez, Oax. 25 de octubre de 2025.- En el marco del Día Mundial de las Personas de Talla Baja, que se conmemora cada 25 de octubre, el Gobierno del Estado llevó a cabo diversas actividades para promover los derechos humanos, visibilizar las barreras que enfrenta este sector y fomentar una cultura de respeto y no discriminación.',
    content: `La titular de la Coordinación para la Atención de los Derechos Humanos (CADH), Flor Estela Morales expresó que como parte de la estrategia territorial “Conciencia Itinerante”, se llevó a cabo una jornada informativa para sensibilizar sobre el uso de un lenguaje respetuoso, erradicar prácticas de exclusión y violencia hacia estas personas.
    También se realizó la exposición de carteles “Derechos Humanos de las Personas de Talla Baja en Oaxaca” y una muestra gráfica con datos sobre este sector, que permanecerá abierta al público en el patio central del Ayuntamiento de Oaxaca de Juárez.
    El programa incluyó la presentación del “Escalón de la conciencia”, una instalación simbólica que visibiliza las barreras estructurales presentes en los entornos y objetos cotidianos, que dificultan que las personas de talla baja ejerzan sus derechos o realicen actividades diarias.
    Asimismo, las instalaciones del Palacio de Gobierno, Palacio municipal de Oaxaca de Juárez y de la Corporación Oaxaqueña de Radio y Televisión (Cortv) serán iluminados de color verde este sábado 25 de octubre, como símbolo de esperanza, visibilidad y compromiso con la inclusión.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/Conmemora-Gobierno-de-Oaxaca-el-Dia-Mundial-de-las-Personas-de-Talla-Baja-1.jpeg',
    date: 'Octubre 25,2025',
    category: 'Estatales',
  },
  {
    id: 10,
    title: 'El ministro Irving Espinosa destaca que no pueden imponerse sanciones por delitos no previstos expresamente en la ley',
    summary: 'Tlaxiaco, Oax a 8 de octubre de 2025.- Durante la sesión del Pleno de la Suprema Corte de Justicia de la Nación (#SCJN), el ministro Irving Espinosa Betanzo señaló que las sanciones penales deben imponerse únicamente cuando la ley las establece de manera clara y precisa, especialmente tratándose de personas adolescentes.',
    content: `Al analizar el Amparo Directo en Revisión 457/2025, el ministro expuso que no puede aplicarse una medida de internamiento por analogía o por similitud entre delitos, pues ello contraviene el principio constitucional de legalidad penal.
    Explicó que los delitos de pederastia y violación sexual no son equivalentes, ya que protegen bienes jurídicos diferentes: mientras la violación tutela la libertad sexual de las personas, la pederastia protege el desarrollo sano y psicosexual de niñas, niños y adolescentes.
    Asimismo, enfatizó que el respeto a los principios de legalidad y tipicidad garantiza la certeza jurídica y evita la aplicación arbitraria de sanciones, fortaleciendo un sistema de justicia penal para adolescentes más justo y conforme a la Constitución.
    Con la postura ante el pleno de la SCJN, el ministro Espinosa Betanzo reafirmó su compromiso con la defensa de los derechos de la infancia y adolescencia.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/7a442b14-46b3-4b25-a998-676c2a23735a-1024x682.jpg',
    date: 'Octubre 8,2025',
    author: 'Ramón Ramírez Gutiérrez',
    category: 'Nacionales',
  },
  {
    id: 11,
    title: 'Hugo Aguilar Ortiz Anuncia una Corte Suprema de «Puertas Abiertas»',
    summary: 'Tlaxiaco, Oax., a 3 de octubre de 2025.- En un encuentro cercano con representantes de los medios de comunicación, el ministro presidente de la Suprema Corte de Justicia de la Nación (#SCJN), Hugo Aguilar Ortiz, delineó la filosofía de su administración, basada en la #transparencia, la cercanía con la ciudadanía y una eficiencia renovada, al tiempo que reportó un significativo aumento en la productividad durante sus primeros 30 días al frente del máximo tribunal.',
    content: `Aguilar Ortiz inició su intervención reconociendo el papel fundamental de los medios de comunicación como un puente indispensable entre la Corte y la sociedad. «Si nosotros no transmitimos bien lo que estamos haciendo, aunque lo hagamos con la mejor buena fe, se puede entender mal», afirmó, subrayando la apuesta de la Nueva Suprema Corte por una comunicación clara y constante .
    Como parte de esta nueva estrategia, el ministro presidente anunció la puesta en marcha de un curso de capacitación para periodistas. Este curso, de carácter interactivo, buscará explicar los conceptos jurídicos fundamentales y los mecanismos de funcionamiento del Pleno de la Corte, con el objetivo de que la cobertura informativa sea más precisa y profunda.
    Más allá de los principios, Aguilar Ortiz presentó datos concretos sobre el desempeño de la Corte en su primer mes. Destacó que, funcionando exclusivamente en Pleno, se ha logrado una productividad de 12 casos resueltos por sesión, con un total de 116 casos resueltos entre el 11 de septiembre y el 1 de octubre. Esta cifra, según explicó, es comparable e incluso supera la productividad histórica del Pleno cuando funcionaba junto con las Salas, lo que demuestra una eficiencia operativa sin precedentes recientes .
    En el ámbito de la atención al público, el reporte fue igualmente alentador. La apertura de las antiguas Casas de la Cultura Jurídica, ahora rebautizadas como «Casas de los Saberes Jurídicos», ha resultado en un incremento del 1,300% en la atención ciudadana. «La ciudadanía realmente tiene confianza en la nueva Corte», aseguró Aguilar Ortiz, enfatizando que cualquier persona o grupo será recibido previa cita, sin necesidad de recurrir a manifestaciones para ser escuchado.
    Hugo Aguilar Ortiz concluyó su intervención con un mensaje de unidad y confianza en el futuro de México. «Estamos en el mismo barco que se llama México… creo que estamos en la oportunidad de lograrlo juntos», expresó, reafirmando su instrucción a todas las áreas de la Corte para trabajar de la mano con los medios de comunicación bajo un principio de «puerta abierta, total transparencia y acceso libre a la información».
    Con estas acciones, la Nueva Suprema Corte bajo el liderazgo de Aguilar Ortiz busca no solo ser más eficiente, sino también una institución más humana, accesible y comprensible para todos los mexicanos.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-03-at-16.31.07-1024x658.jpeg',
    date: 'Octubre 3,2025',
    author: 'Ramón Ramírez Gutiérrez',
    category: 'Nacionales',
  },
  {
    id: 12,
    title: 'La Nueva Suprema Corte atrae su primer caso tras audiencia ciudadana con jubilados del IMSS',
    summary: 'Ciudad de México, 2 de octubre de 2025. En una decisión que marca el inicio de su nueva etapa, el Pleno de la Suprema Corte de Justicia de la Nación (#SCJN) atrajo este miércoles su primer caso derivado de una audiencia de atención ciudadana: la demanda de jubilados del IMSS que exigen la devolución de recursos acumulados en sus cuentas de cesantía en edad avanzada y vejez, así como cuotas sociales.',
    content: `La resolución se produce después de que el 22 de septiembre, en el marco de la nueva política de apertura de la Corte, ministras y ministros recibieran en audiencia a representantes del Movimiento Jubilados Pie de Lucha, quienes durante años han reclamado la devolución de los ahorros depositados en sus cuentas individuales como extrabajadores del Instituto Mexicano del Seguro Social.
    Los jubilados del IMSS sostienen que el dinero administrado por las Afores es de su propiedad, tal como establece el artículo 169 de la Ley del Seguro Social, y no del gobierno o las instituciones financieras. Su lucha se dirige contra la jurisprudencia 185/2008 de la extinta Segunda Sala de la Corte, que estableció que los trabajadores jubilados bajo el régimen de jubilaciones y pensiones (RJP) no tienen derecho a la devolución de los recursos acumulados en su cuenta individual de cesantía en edad avanzada y vejez (CAAV), argumentando que esta disposición atenta contra sus derechos humanos.
    El 22 de septiembre, alrededor de 550 integrantes de este movimiento se manifestaron frente a la SCJN, provenientes de 14 estados del país, confiando en que la nueva integración de la Corte, encabezada por el ministro Hugo Aguilar Ortiz, resolvería alrededor de una veintena de expedientes con sus demandas que habían permanecido sin respuesta desde 2019.
    En su sesión ordinaria del 2 de octubre, la Nueva Corte también decidió atraer otros casos que le permitirán examinar temas fundamentales de derechos humanos. En materia de derechos de las personas trans, la SCJN estudiará aspectos relativos al pago de cuotas de recuperación como condicionante para acceder a tratamientos de reasignación de sexo en los servicios de salud en Jalisco. Además, reasumió la competencia para evaluar si en Aguascalientes es válido exigir un juicio para que las personas trans puedan ver reconocida legalmente su identidad de género.
    La nueva integración de la Corte, caracterizada por su paridad de género -cinco ministras y cuatro ministros- y la elección popular de sus miembros, enfrenta el reto de abordar un rezago histórico de casos mientras busca fortalecer la transparencia y generar cercanía con la ciudadanía.
    Los casos resueltos en esta sesión -Solicitudes de Ejercicio de la Facultad de Atracción 467/2025 y 486/2025, y Solicitudes de Reasunción de Competencia 73/2025 y 65/2025- marcan el inicio de una nueva era en la justicia mexicana, donde la Corte se enfrenta al desafío de equilibrar su autonomía judicial con las demandas sociales en un contexto de mayor apertura ciudadana.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/10/IMG-20251002-WA0049-1024x682.jpg',
    date: 'Octubre 2, 2025',
    category: 'Nacionales',
  },
  {
    id: 13,
    title: 'Tragedia Aérea en India – Vuelo AI171 de Air India se Estrella Tras Despegar',
    summary: 'Tlaxiaco, Oax. a 12 de junio de 2025.- Un avión de Air India, el vuelo AI171 con destino a Londres Gatwick, se estrelló minutos después de despegar del Aeropuerto Internacional Sardar Vallabhbhai Patel en Ahmedabad, India. El Boeing 787-8 Dreamliner, que transportaba a 242 personas (230 pasajeros y 12 tripulantes), cayó en el área residencial de Meghani Nagar, provocando un incendio masivo y una gran cantidad de víctimas.',
    content: `Según los reportes, al menos 294 personas fallecieron, incluyendo pasajeros y residentes de la zona impactada. Entre los sobrevivientes confirmados está Vishwashkumar Ramesh, un pasajero británico de 40 años ubicado cerca de una salida de emergencia (asiento 11A), quien relató que el accidente ocurrió «30 segundos después del despegue».
    Más de 50 heridos fueron trasladados a hospitales, mientras equipos de emergencia trabajaban entre los escombros. Investigadores de EE.UU. (NTSB) y Reino Unido (AAIB) se unieron a la investigación.
    El primer ministro indio, Narendra Modi, expresó su «dolor indescriptible», mientras que el presidente estadounidense Donald Trump calificó el suceso como «uno de los peores accidentes en la historia de la aviación».
    Aunque no hay conclusiones oficiales, expertos sugieren que una configuración incorrecta de los flaps (superficies de control) durante el despegue pudo ser un factor clave. Las condiciones climáticas eran estables, descartando influencia meteorológica.
    Air India habilitó líneas de atención para familiares y organizó vuelos de apoyo desde Delhi y Mumbai. Tata Group, propietario de la aerolínea, anunció compensaciones de 1 crore de rupias (≈ £86,000) por cada víctima.
    La tragedia del AI171 conmocionó al mundo, reavivando debates sobre seguridad aérea y protocolos de emergencia. La investigación, aún en curso, busca respuestas para prevenir futuros desastres.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/06/crop-w1438-h1200-ap25163545251931-c1dec9f7-focus-0.59-min0.22-608-342.jpg',
    date: 'Junio 12,2025',
    category: 'Internacionales',
  },
  {
    id: 14,
    title: 'El Gran Apagón Europeo: Millones de Personas Afectadas por un Colapso Eléctrico Sin Precedentes',
    summary: 'Europa enfrentó ayer uno de los mayores apagones eléctricos de su historia moderna, dejando a millones de personas sin suministro de energía durante horas y generando caos en el transporte, los servicios esenciales y las comunicaciones. Las causas del fallo masivo aún se investigan, aunque las primeras hipótesis apuntan a una sobrecarga en el sistema interconectado, agravada por problemas técnicos en varias centrales eléctricas.',
    content: `El apagón comenzó en las primeras horas de la tarde, afectando inicialmente a países como Alemania, Francia, Italia y España, para luego extenderse a otras naciones de la Unión Europea. Las redes eléctricas interconectadas, diseñadas para garantizar estabilidad, habrían colapsado ante un fallo en cascada, según explicaron fuentes del Ente Europeo de Redes de Transporte de Electricidad (ENTSO-E).
    En ciudades como París, Berlín y Madrid, el corte dejó a oscuras barrios enteros, interrumpió el metro y provocó el cierre temporal de aeropuertos. Los hospitales funcionaron con generadores de emergencia, mientras las autoridades instaban a la calma.
    Los gobiernos europeos activaron protocolos de emergencia, y la Comisión Europea anunció una investigación exhaustiva. «Es inaceptable que un fallo técnico paralice media Europa. Exigimos transparencia y soluciones inmediatas», declaró la presidenta de la Comisión, Ursula von der Leyen.
    Mientras, la ciudadanía enfrentó dificultades: supermercados cerraron, los semáforos dejaron de funcionar y muchas personas quedaron atrapadas en ascensores. Las redes sociales se llenaron de testimonios sobre el caos, aunque también de muestras de solidaridad.
    Expertos señalan que la transición energética, con una mayor dependencia de fuentes renovables intermitentes, podría haber influido. Otros apuntan a un ciberataque no descartado, aunque no hay confirmación oficial. Las compañías eléctricas prometieron restablecer el servicio por completo en las próximas horas, pero advirtieron sobre posibles nuevos cortes controlados.
    El apagón reabre el debate sobre la seguridad energética europea en un contexto de crisis geopolítica y altos precios de la electricidad. Mientras, millones esperan que no se repita una noche tan oscura.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2025/04/17458397318016-1024x683.jpg',
    date: 'Abril 29,2025',
    category: 'Internacionales',
  },
  {
    id: 15,
    title: 'Destaca Oaxaca en las nominaciones de los Food and Travel Reader Awards 2024',
    summary: `Destaca Oaxaca en las nominaciones de los #Food and #Travel #Reader #Awards 2024
•     Puerto Escondido está nominado como Mejor Destino de México y Oaxaca como Mejor Destino Gastronómico de México`,
    content: `Oaxaca de Juárez, Oax. 26 de noviembre de 2024.- La Secretaría de Turismo del Estado (Sectur Oaxaca) dio a conocer que, la entidad destaca en las #nominaciones de los premios Food and Travel Reader Awards 2024, por lo que desde esta fecha y hasta el 13 de enero de 2025, se puede votar en la página https://foodandtravel.mx/food-and-travel-reader-awards/votaciones/
    Asimismo, Puerto Escondido está nominado como Mejor destino de México y Oaxaca como Mejor Destino Gastronómico de México, además de restaurantes, hoteles y experiencias turísticas.
    Algunos negocios como Crudo, restaurante incluido en la Guía Michelin 2024, fue nominado como Mejor Restaurante del Interior de la República, mientras que Casa Oaxaca El Restaurante, también en la Guía Michelin 2024, recibió la nominación como Mejor Restaurante Consolidado de México.
    Como Mejor Restaurante Sustentable de México están nominados: Alfonsina -un restaurante con el Bib Gourmand de Michelin, que es un reconocimiento de la guía Michelin-  y Levadura de Olla -con Una Estrella Michelin-
    En la categoría Mejor Hotel Urbano en México se ubica Otro Oaxaca; en la de Mejor Hotel Boutique de Playa está nominado Ennea, de Puerto Escondido y en la Mejor Propuesta Turística Socialmente Responsable aparece nominado Camino Copalita.
    Los premios contemplan 31 categorías: 13 de gastronomía y 18 de turismo y los candidatos fueron elegidos por un panel de 63 expertos en la industria de la hospitalidad, junto con el consejo editorial de Food and Travel México.`,
    image: 'https://noticieroselreloj.com/wp-content/uploads/2024/11/Destaca-Oaxaca-en-las-nominaciones-de-los-Food-and-Travel-Reader-Awards-2024-5-1024x1280.jpg',
    date: 'Noviembre 26,2024',
    author: 'Noemi Garcia Reyes',
    category: 'Internacionales',
  },
];
