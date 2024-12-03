import { NEXT_PUBLIC_WHATSAPP_NUMBER } from "@/environment";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

export const WhatsAppButton = () => {
  return (
    <Link
      href={`https://wa.me/${NEXT_PUBLIC_WHATSAPP_NUMBER}`}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      <IoLogoWhatsapp size={32} className="text-white" />
    </Link>
  );
}; 