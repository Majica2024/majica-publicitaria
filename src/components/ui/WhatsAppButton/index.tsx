import { NEXT_PUBLIC_WHATSAPP_NUMBER } from "@/environment";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export const WhatsAppButton = () => {
  return (
    <Link
      href={`https://wa.me/${NEXT_PUBLIC_WHATSAPP_NUMBER}`}
      target='_blank'
      className='fixed bottom-12 md:bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl'
      aria-label='Contactar por WhatsApp'
    >
      <IoLogoWhatsapp size={32} className='text-white' />
    </Link>
  );
};
