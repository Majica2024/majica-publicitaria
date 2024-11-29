import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className='bg-[#F18777] py-8 px-4  text-white flex flex-col gap-10'>
      <div className={styles.container}>
        <nav className={styles.links}>
          <Link href='/'>Términos y condiciones</Link>
          <Link href='/'>Políticas de privacidad</Link>
        </nav>
        <div className={styles.copyright}>2024. Derechos reservados</div>
        <div className={styles.social}>
          <p className={styles.socialText}>Síguenos en</p>
          <div className={styles.socialIcons}>
            <Link
              href='https://instagram.com'
              target='_blank'
              aria-label='Síguenos en Instagram'
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href='https://facebook.com'
              target='_blank'
              aria-label='Síguenos en Facebook'
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              href='https://youtube.com'
              target='_blank'
              aria-label='Síguenos en YouTube'
            >
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>
      </div>
      <article className='flex flex-col gap-2 items-center md:flex-row md:justify-around md:px-8 py-4 text-base text-white'>
        <p>
          Diseño por{" "}
          <Link
            href='https://www.linkedin.com/in/auracristina0693/'
            className='text-majica-text-primary hover:underline font-bold'
          >
            Aura Cristina Salazar Quintero
          </Link>
        </p>
        <p>
          Desarrollo por{" "}
          <Link
            href='https://www.linkedin.com/in/soysergiogonza/'
            className='text-majica-text-primary hover:underline font-bold'
          >
            Sergio González Sánchez
          </Link>
        </p>
      </article>
    </footer>
  );
};
