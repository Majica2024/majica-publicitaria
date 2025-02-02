import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='bg-[#F79089] text-white p-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-8  md:gap-4  text-center'>
          <div className='flex flex-col items-center gap-8 text-center md:flex-row md:justify-around w-full'>
            <div className='flex flex-col items-center gap-2 md:items-start'>
              <div className='flex items-center gap-2'>
                <span>Sígue a Majica en</span>
                <Link
                  href='https://www.instagram.com/majicapublicitaria'
                  target='_blank'
                  className='hover:opacity-80 transition-opacity'
                >
                  <FaInstagram size={24} />
                </Link>
              </div>
              <a 
                href='mailto:ventas@majicapubicitaria.com'
                className='hover:underline text-sm md:text-base'
              >
                ventas@majicapubicitaria.com
              </a>
            </div>
            <div className='flex flex-col gap-4 md:flex-row'>
              <Link href='/' className='hover:underline'>
                Políticas de privacidad
              </Link>
              <Link href='/' className='hover:underline'>
                Términos y condiciones
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='lg:hidden'>© 2024. Derechos reservados</p>
            <div className='flex flex-col gap-4 md:text-sm lg:text-base sm:flex-row sm:justify-around w-dvw'>
              <div className='items-center justify-center gap-2 flex flex-col md:flex-row'>
                <FaLinkedin size={20} />
                <span>Diseñado por</span>
                <Link
                  className='underline'
                  href='https://www.linkedin.com/in/auracristina0693/'
                  target='_blank'
                >
                  Aura Cristina Salazar Quintero
                </Link>
              </div>
              <p className='hidden lg:block'>© 2024. Derechos reservados</p>
              <div className='items-center justify-center gap-2 flex flex-col md:flex-row'>
                <FaLinkedin size={20} />
                <span>Desarrollado por</span>
                <Link
                  className='underline'
                  href='https://www.linkedin.com/in/soysergiogonza/'
                  target='_blank'
                >
                  Sergio González Sánchez
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
