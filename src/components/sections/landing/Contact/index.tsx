"use client";

import { HighlightSection } from "@/components/ui/HighlightSection";
import {
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  NEXT_PUBLIC_TO_EMAIL,
} from "@/environment";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  useEffect(() => {
    // Inicializa emailjs con tu clave pública
    if (NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    socialNetwork: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    message: "",
    isError: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: "", isError: false });

    // Verifica que todas las variables de entorno estén disponibles
    if (!NEXT_PUBLIC_EMAILJS_SERVICE_ID || !NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
      setSubmitStatus({
        message:
          "Error de configuración del servicio. Por favor, contacta al administrador.",
        isError: true,
      });
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      to_email: NEXT_PUBLIC_TO_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      social_network: formData.socialNetwork,
      message: `Nuevo contacto de ${formData.name}:
        \nTeléfono: ${formData.phone}
        \nRed Social: ${formData.socialNetwork}`,
    };

    try {
      await emailjs.send(
        NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      setSubmitStatus({
        message: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
        isError: false,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        socialNetwork: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        message:
          "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.",
        isError: true,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section className={styles.contact}>
      <HighlightSection span='Contáctanos' />
      <h2 className={styles.title}>
        ¡Hablemos de tu{" "}
        <span className={styles.highlight}>próximo proyecto!</span>
      </h2>

      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h3 className={styles.subtitle}>
            ¿Tienes una <br />
            <span className={styles.idea}>Idea</span>
            <span className={styles.highlight}> en mente?</span>
          </h3>

          <p className={styles.description}>
            Escríbenos al WhatsApp y conversemos cómo podemos ayudarte a hacerla
            realidad.
          </p>

          <a
            href='https://wa.me/573008341223'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.whatsappButton}
          >
            Escribir al Wsp
          </a>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.formWrapper}>
            <p className={styles.formDescription}>
              ¿Listo para darle vida a tus ideas? Completa el formulario y
              nuestro equipo te contactará para comenzar a crear algo
              extraordinario juntos.*
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor='name'>Nombre y apellido</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='John Ramirez'
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='email'>Correo electrónico</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='johnramirez32@gmail.com'
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='phone'>Celular</label>
                <div className={styles.phoneInput}>
                  <span className={styles.countryCode}>🇨 +57</span>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder='312 8923465'
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor='socialNetwork'>Red social favorita</label>
                <select
                  id='socialNetwork'
                  name='socialNetwork'
                  value={formData.socialNetwork}
                  onChange={handleChange}
                  required
                >
                  <option value=''>Seleccione</option>
                  <option value='instagram'>Instagram</option>
                  <option value='facebook'>Facebook</option>
                  <option value='twitter'>Twitter</option>
                  <option value='linkedin'>LinkedIn</option>
                </select>
              </div>

              {submitStatus.message && (
                <div
                  className={`${styles.statusMessage} ${
                    submitStatus.isError ? styles.error : styles.success
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type='submit'
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
