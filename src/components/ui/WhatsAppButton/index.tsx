import { WHATSAPP_DEFAULT_MESSAGE, whatsappLink } from "@/utils";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export const WhatsAppButton = () => {
  return (
    <Link
      href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-whatsapp shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl md:right-8"
      aria-label="Cotizar por WhatsApp"
    >
      <IoLogoWhatsapp size={30} className="text-white" aria-hidden="true" />
    </Link>
  );
};
