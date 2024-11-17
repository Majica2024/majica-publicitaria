"use client";

import { Button } from "@/components/ui/Button";
import { HighlightSection } from "@/components/ui/HighlightSection";
import { Paragraph } from "@/components/ui/Paragraph";
import { NEXT_PUBLIC_WHATSAPP_NUMBER } from "@/environment";
import { useContactForm } from "@/hooks/useContactForm";
import { useEmailSubmission } from "@/hooks/useEmailSubmission";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import type { FormEvent } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  const { formData, handleChange, resetForm } = useContactForm();
  const { isSubmitting, submitStatus, submitEmail } = useEmailSubmission();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const success = await submitEmail(formData);
    if (success) {
      resetForm();
    }
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
          <Button
            href={`https://wa.me/${NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            span='Escribir al Wsp'
          />
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
