import { Locale } from "@/types/site";
import { InterestingPlace, PlacesCopyByLocale, PlacesVariant } from "@/types/places";

export const placesVariants: PlacesVariant[] = [
  "postcards",
  "neighborhoods",
  "spotlight",
  "passport",
  "route",
  "carousel",
];

export const buenosAiresPlaces: InterestingPlace[] = [
  {
    slug: "ateneo-grand-splendid",
    title: "Ateneo Grand Splendid",
    description:
      "Una antigua sala de teatro convertida en una de las librerias mas emblematicas de Sudamerica, con palcos, ornamentacion original y escenario hoy transformado en cafeteria.",
    image: "/interesting-places/ateneo_grand_splendid_1500x610.jpg",
    mapUrl: "https://maps.google.com/?q=El+Ateneo+Grand+Splendid+Buenos+Aires",
    neighborhood: "Recoleta",
    category: "cultura",
  },
  {
    slug: "teatro-colon",
    title: "Teatro Colon",
    description:
      "Un icono de la cultura portena y una de las grandes salas de opera del mundo. Fue inaugurado en 1908 y destaca por su arquitectura y su acustica excepcional.",
    image: "/interesting-places/teatro_colon_fachada_noche_gente_1500x610_0.webp",
    mapUrl: "https://maps.google.com/?q=Teatro+Colon+Buenos+Aires",
    neighborhood: "San Nicolas",
    category: "cultura",
  },
  {
    slug: "cementerio-de-recoleta",
    title: "Cementerio de Recoleta",
    description:
      "Mucho mas que un cementerio: un museo al aire libre con calles de mausoleos y esculturas de gran valor artistico, donde descansan figuras clave de la historia argentina.",
    image: "/interesting-places/cementerio-recoleta-fachada-1500x610-nn_0.jpg",
    mapUrl: "https://maps.google.com/?q=Cementerio+de+Recoleta+Buenos+Aires",
    neighborhood: "Recoleta",
    category: "historia",
  },
  {
    slug: "puente-de-la-mujer",
    title: "Puente de la Mujer",
    description:
      "Icono arquitectonico de Puerto Madero y hito de ingenieria urbana: un puente peatonal de giro con uno de los mecanismos mas grandes del mundo.",
    image: "/interesting-places/Puente_de_la_mujer.jpg",
    mapUrl: "https://maps.google.com/?q=Puente+de+la+Mujer+Buenos+Aires",
    neighborhood: "Puerto Madero",
    category: "arquitectura",
  },
  {
    slug: "obelisco",
    title: "Obelisco",
    description:
      "La postal mas reconocible de Buenos Aires, en el cruce de 9 de Julio y Corrientes. Desde aqui comienza uno de los paseos urbanos mas caracteristicos de la ciudad.",
    image: "/interesting-places/Obelisco.jpg",
    mapUrl: "https://maps.google.com/?q=Obelisco+Buenos+Aires",
    neighborhood: "Microcentro",
    category: "arquitectura",
  },
  {
    slug: "casa-rosada",
    title: "Casa Rosada",
    description:
      "Palacio frente a Plaza de Mayo que funciona como sede del Gobierno Nacional, en un entorno atravesado por episodios centrales de la historia argentina.",
    image: "/interesting-places/Casa_Rosada.jpg",
    mapUrl: "https://maps.google.com/?q=Casa+Rosada+Buenos+Aires",
    neighborhood: "Monserrat",
    category: "historia",
  },
  {
    slug: "cabildo",
    title: "Cabildo",
    description:
      "Edificio historico frente a Plaza de Mayo con origen colonial, vinculado a la administracion del Virreinato y a acontecimientos clave de la Revolucion de Mayo.",
    image: "/interesting-places/Cabildo.jpg",
    mapUrl: "https://maps.google.com/?q=Cabildo+de+Buenos+Aires",
    neighborhood: "Monserrat",
    category: "historia",
  },
  {
    slug: "catedral-metropolitana",
    title: "Catedral Metropolitana",
    description:
      "Principal templo catolico de Buenos Aires, con relevancia religiosa, arquitectonica e historica, incluyendo el Mausoleo del General Jose de San Martin.",
    image: "/interesting-places/Catedral.jpg",
    mapUrl: "https://maps.google.com/?q=Catedral+Metropolitana+de+Buenos+Aires",
    neighborhood: "Monserrat",
    category: "historia",
  },
  {
    slug: "reserva-ecologica-costanera-sur",
    title: "Reserva Ecologica Costanera Sur",
    description:
      "El mayor espacio verde de la ciudad, con 350 hectareas de naturaleza, lagunas, bosques y fauna diversa. Ideal para bici, caminatas y aire libre.",
    image: "/interesting-places/Reserva.png",
    mapUrl: "https://maps.google.com/?q=Reserva+Ecologica+Costanera+Sur+Buenos+Aires",
    neighborhood: "Puerto Madero",
    category: "naturaleza",
  },
  {
    slug: "rosedal-de-palermo",
    title: "Rosedal de Palermo",
    description:
      "Jardin tradicional dentro del Parque Tres de Febrero, ideal para caminar, pasear en bote, tomar fotos y disfrutar de miles de rosales.",
    image: "/interesting-places/rosedal-de-palermo.jpg",
    mapUrl: "https://maps.google.com/?q=Rosedal+de+Palermo+Buenos+Aires",
    neighborhood: "Palermo",
    category: "naturaleza",
  },
  {
    slug: "jardin-japones",
    title: "Jardin Japones",
    description:
      "El jardin de estilo japones mas grande fuera de Japon: un refugio tranquilo en Palermo con puentes, lagos y vegetacion cuidadosamente diseniada.",
    image: "/interesting-places/jardin-japones.jpg",
    mapUrl: "https://maps.google.com/?q=Jardin+Japones+Buenos+Aires",
    neighborhood: "Palermo",
    category: "naturaleza",
  },
  {
    slug: "planetario-galileo-galilei",
    title: "Planetario Galileo Galilei",
    description:
      "Principal centro de divulgacion astronomica de la ciudad, con cupula inmersiva y proyecciones que recrean miles de estrellas, planetas y satelites.",
    image: "/interesting-places/Planetario.png",
    mapUrl: "https://maps.google.com/?q=Planetario+Galileo+Galilei+Buenos+Aires",
    neighborhood: "Palermo",
    category: "ciencia",
  },
  {
    slug: "floralis-generica",
    title: "Floralis Generica",
    description:
      "Escultura metalica monumental con forma de flor frente a la Facultad de Derecho, con petalos mecanicos pensados para acompanar el ciclo del dia.",
    image: "/interesting-places/floralis_generica.jpg",
    mapUrl: "https://maps.google.com/?q=Floralis+Generica+Buenos+Aires",
    neighborhood: "Recoleta",
    category: "arte",
  },
  {
    slug: "caminito-la-boca",
    title: "Caminito - La Boca",
    description:
      "La calle museo mas famosa de La Boca: conventillos de chapa coloridos, arte a cielo abierto, tango en la calle y puestos que expresan el espiritu porteno.",
    image: "/interesting-places/Caminito.jpg",
    mapUrl: "https://maps.google.com/?q=Caminito+La+Boca+Buenos+Aires",
    neighborhood: "La Boca",
    category: "arte",
  },
  {
    slug: "barrio-chino-belgrano",
    title: "Barrio Chino - Belgrano",
    description:
      "Una zona de identidad oriental en Belgrano, formada por oleadas migratorias asiaticas desde los anos 80, con restaurantes, comercios y templos budistas.",
    image: "/interesting-places/Barrio_Chino.png",
    mapUrl: "https://maps.google.com/?q=Barrio+Chino+Belgrano+Buenos+Aires",
    neighborhood: "Belgrano",
    category: "gastronomia",
  },
    {
    slug: "palacio-aguas",
    title: "Palacio de Aguas Corrientes",
    description:
      "Es uno de los edificios de identidad más definida que posee Buenos Aires, pero pocos conocen su finalidad principal: fue el primer gran tanque distribuidor de agua de la Ciudad.",
    image: "/interesting-places/Palacio_Aguas.jpg",
    mapUrl: "https://maps.google.com/?q=Palacio+Aguas+Corrientes+Buenos+Aires",
    neighborhood: "Balvanera",
    category: "arquitectura",
  },
];

export const placesCopy: PlacesCopyByLocale = {
  es: {
    title: "Lugares para visitar en Buenos Aires",
    subtitle: "15 propuestas para disfrutar la ciudad durante Mensa Glam.",
    mapsLabel: "Ver en Maps",
    backLabel: "Volver al evento",
    variantsLabel: "Versiones de diseno",
    categoryAll: "Todos",
    featuredLabel: "Lugar destacado",
    neighborhoodsLabel: "Barrios",
    variantNames: {
      postcards: "Postales",
      neighborhoods: "Por barrios",
      spotlight: "Spotlight",
      passport: "Pasaporte",
      route: "Ruta narrativa",
      carousel: "Carrusel + detalle",
    },
  },
  pt: {
    title: "Lugares para visitar em Buenos Aires",
    subtitle: "15 sugestoes para curtir a cidade durante o Mensa Glam.",
    mapsLabel: "Ver no Maps",
    backLabel: "Voltar ao evento",
    variantsLabel: "Versoes de design",
    categoryAll: "Todos",
    featuredLabel: "Lugar em destaque",
    neighborhoodsLabel: "Bairros",
    variantNames: {
      postcards: "Postais",
      neighborhoods: "Por bairros",
      spotlight: "Spotlight",
      passport: "Passaporte",
      route: "Rota narrativa",
      carousel: "Carrossel + detalhe",
    },
  },
  en: {
    title: "Places to visit in Buenos Aires",
    subtitle: "15 ideas to enjoy the city during Mensa Glam.",
    mapsLabel: "Open in Maps",
    backLabel: "Back to event",
    variantsLabel: "Design versions",
    categoryAll: "All",
    featuredLabel: "Featured place",
    neighborhoodsLabel: "Neighborhoods",
    variantNames: {
      postcards: "Postcards",
      neighborhoods: "By neighborhood",
      spotlight: "Spotlight",
      passport: "Passport",
      route: "Story route",
      carousel: "Carousel + detail",
    },
  },
};

export function getPlacesCopy(locale: Locale) {
  return placesCopy[locale];
}
