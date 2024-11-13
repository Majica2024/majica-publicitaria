"use client";

import { Button } from "@/components/ui/Button";
import { HighlightSection } from "@/components/ui/HighlightSection";
import { Paragraph } from "@/components/ui/Paragraph";
import {
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  NEXT_PUBLIC_TO_EMAIL,
} from "@/environment";
import type { FormData, SubmitStatus } from "@/types/sections";
import { redHatDisplay } from "@/utils";
import emailjs from "@emailjs/browser";
import { clsx } from "clsx";
import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  useEffect(() => {
    if (NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    socialNetwork: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    message: "",
    isError: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: "", isError: false });

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
      <article className={styles.contactHead}>
        <HighlightSection span='Contáctanos' />
        <h2 className={styles.title}>
          <span>¡Hablemos de tu </span>
          <span className={styles.highlight}>próximo proyecto!</span>
        </h2>
      </article>
      <article className={styles.contactBody}>
        <div className={styles.contactText}>
          <h3 className={clsx(styles.subtitle, redHatDisplay.className)}>
            <span>¿Tienes una</span>
            <span className={styles.idea}>Idea</span>
            <span className={styles.highlight}>en mente?</span>
          </h3>
          <Paragraph width='450px'>
            Escríbenos al WhatsApp y conversemos cómo podemos ayudarte a hacerla
            realidad.
          </Paragraph>
          <Button href='https://wa.me/573008341223' span='Escribir al Wsp' />
        </div>
        <article className={styles.contactForm}>
          <Paragraph width='450px'>
            ¿Listo para darle vida a tus ideas? Completa el formulario y nuestro
            equipo te contactará para comenzar a crear algo extraordinario
            juntos.*
          </Paragraph>
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor='name'>Nombre y apellido</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
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
                  className={styles.input}
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
                    className={styles.input}
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
                  className={styles.select}
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
        </article>
      </article>
    </section>
  );
};
