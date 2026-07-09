import { NEXT_PUBLIC_WHATSAPP_NUMBER } from "@/environment";

/**
 * Construye un enlace wa.me con mensaje prellenado. El texto por servicio
 * llega al asesor antes de la primera respuesta, así sabe qué cotizar.
 */
export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola Majica 👋 Quiero cotizar un proyecto de publicidad.";
