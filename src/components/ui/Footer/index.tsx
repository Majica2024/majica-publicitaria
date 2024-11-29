import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className='bg-[#F79089] text-white p-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
          <div className='mb-4 md:mb-0'>
            <p className='mb-2'>© 2024. Derechos reservados</p>
            <div className='space-y-2'>
              <div className='flex items-center gap-2'>
                <FaLinkedin size={20} />
                <span>Diseño por</span>
                <Link
                  className='hover:underline'
                  href='https://www.linkedin.com/in/auracristina0693/'
                  target='_blank'
                >
                  Aura Cristina Salazar Quintero
                </Link>
              </div>
              <div className='flex items-center gap-2'>
                <FaLinkedin size={20} />
                <span>Desarrollo por</span>
                <Link
                  className='hover:underline'
                  href='https://www.linkedin.com/in/soysergiogonza/'
                  target='_blank'
                >
                  Sergio González Sánchez
                </Link>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex flex-col md:flex-row gap-4'>
              <Link href='/' className='hover:underline'>
                Políticas de privacidad
              </Link>
              <Link href='/' className='hover:underline'>
                Términos y condiciones
              </Link>
            </div>
            <div className='flex items-center gap-2'>
              <span>Sígue a Majica en</span>
              <Link href='/'>
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
