export type ServiceCategory =
  | "Avisos"
  | "Impresión"
  | "Exhibición"
  | "Estructuras";

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  category: ServiceCategory;
  description: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: "avisos-acrilicos",
    name: "Avisos Acrílicos",
    shortName: "Avisos acrílicos",
    category: "Avisos",
    description:
      "Piezas en acrílico premium para negocios, oficinas y eventos: mate, brillo, transparente o con iluminación.",
    image: "/assets/images/acrilicos.webp",
  },
  {
    slug: "impresion-gran-formato",
    name: "Impresión Gran Formato",
    shortName: "Gran formato",
    category: "Impresión",
    description:
      "Vinilos, lonas, canvas y vallas con alta resolución y protección UV, desde displays hasta gigantografías.",
    image: "/assets/images/big-format.webp",
  },
  {
    slug: "senalizacion",
    name: "Señalización",
    shortName: "Señalización",
    category: "Avisos",
    description:
      "Señalética informativa, direccional, de seguridad y corporativa que cumple normativa vigente.",
    image: "/assets/images/signaling.webp",
  },
  {
    slug: "plotter-de-corte",
    name: "Plotter de Corte",
    shortName: "Plotter de corte",
    category: "Impresión",
    description:
      "Corte de vinilo de precisión para vitrinas, vehículos, decoración y rotulación de espacios.",
    image: "/assets/images/plotter.webp",
  },
  {
    slug: "porta-pendones",
    name: "Porta Pendones",
    shortName: "Porta pendones",
    category: "Exhibición",
    description:
      "Estructuras livianas y portátiles para activaciones, ferias y puntos de venta.",
    image: "/assets/images/banner-holder.webp",
  },
  {
    slug: "inflables-dummies",
    name: "Inflables y Dummies",
    shortName: "Inflables · dummies",
    category: "Exhibición",
    description:
      "Figuras de gran escala que hacen imposible no ver tu marca en eventos y exteriores.",
    image: "/assets/images/inflatable.webp",
  },
  {
    slug: "material-pop",
    name: "Material P.O.P",
    shortName: "Material P.O.P",
    category: "Exhibición",
    description:
      "Manillas, botones, llaveros y merchandising que convierten clientes en embajadores.",
    image: "/assets/images/pop.webp",
  },
  {
    slug: "corte-grabado-laser",
    name: "Corte y Grabado Láser",
    shortName: "Grabado láser",
    category: "Estructuras",
    description:
      "Detalle fino sobre acrílico, madera y metal para piezas corporativas y reconocimientos.",
    image: "/assets/images/grabado-laser.webp",
  },
  {
    slug: "tropezones-exhibidores",
    name: "Tropezones y Exhibidores",
    shortName: "Exhibidores",
    category: "Exhibición",
    description:
      "Exhibición de producto en punto de venta: visible, resistente y lista para rotar inventario.",
    image: "/assets/images/exhibitors.webp",
  },
  {
    slug: "estructuras-metalicas",
    name: "Estructuras Metálicas",
    shortName: "Estructuras metálicas",
    category: "Estructuras",
    description:
      "Soportes y estructuras a medida para avisos, vallas y montajes de gran formato.",
    image: "/assets/images/estructuras-metalicas.webp",
  },
  {
    slug: "bastidores",
    name: "Bastidores",
    shortName: "Bastidores",
    category: "Estructuras",
    description:
      "Marcos tensados para lonas y textiles con acabado limpio, listos para instalar.",
    image: "/assets/images/bastidores.webp",
  },
];

export const serviceWhatsappMessage = (serviceName: string) =>
  `Hola Majica 👋 Quiero cotizar: ${serviceName}.`;
