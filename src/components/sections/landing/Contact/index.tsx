"use client";

import { HighlightSection } from "@/components/ui/HighlightSection";
import { Paragraph } from "@/components/ui/Paragraph";
import { NEXT_PUBLIC_WHATSAPP_NUMBER } from "@/environment";
import { useContactForm } from "@/hooks/useContactForm";
import { useEmailSubmission } from "@/hooks/useEmailSubmission";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import Link from "next/link";
import type { FormEvent } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { ColombiaIcon } from "../../../../../public/assets/icons/ColombiaIcon";

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
    <section
      className='py-24
       flex flex-col gap-24  px-4 border-t'
      id='contacto'
    >
      <article className='text-center'>
        <HighlightSection span='Contáctanos' />
        <h2 className='mb-8 text-5xl font-bold text-majica-text-primary text-center'>
          <span>¡Hablemos de tu </span>
          <span className='text-majica-secondary'>próximo proyecto!</span>
        </h2>
      </article>
      <article className="flex flex-col md:items-center justify-center gap-8 bg-[url('/assets/images/lines.svg')] bg-no-repeat md:flex-row md:justify-around md:px-32">
        <div className='flex flex-col gap-4 w-auto md:w-[500px]'>
          <h3 className={clsx(redHatDisplay.className, "space-y-1")}>
            <span className='text-2xl'>¿Tienes una</span>
            <span className='block text-5xl text-majica-text-primary font-bold'>
              Idea
            </span>
            <span className='block text-5xl text-majica-secondary font-bold'>
              en mente?
            </span>
          </h3>
          <Paragraph>
            Escríbenos y conversemos cómo podemos ayudarte a hacerla realidad.
          </Paragraph>
        </div>

        <article className='flex flex-col gap-12 w-auto md:w-[500px]'>
          <Paragraph className='w-full'>
            ¿Listo para darle vida a tus ideas? Completa el formulario y nuestro
            equipo te contactará para comenzar a crear algo extraordinario
            juntos.*
          </Paragraph>
          <div className='bg-white p-8 rounded-2xl shadow-lg'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='name'
                  className='text-majica-text-light text-sm'
                >
                  Nombre y apellido
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full p-3 border border-black/10 rounded-lg text-base'
                  placeholder='Nombre y Apellido'
                  required
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='email'
                  className='text-majica-text-light text-sm'
                >
                  Correo electrónico
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full p-3 border border-black/10 rounded-lg text-base'
                  placeholder='E-mail'
                  required
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='phone'
                  className='text-majica-text-light text-sm'
                >
                  Celular
                </label>
                <div className='flex items-center gap-2 border border-black/10 rounded-lg p-3'>
                  <span className='text-majica-text-light whitespace-nowrap border-r-4 px-2 border-gray-200'>
                    <span className='flex items-center gap-1'>
                      <ColombiaIcon />
                      <span> +57</span>
                    </span>
                  </span>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='flex-1 border-none p-0 text-base focus:outline-none'
                    placeholder='xxx xxxxxxx'
                    required
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label
                  htmlFor='message'
                  className='text-majica-text-light text-sm'
                >
                  Mensaje
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  // @ts-ignore
                  onChange={handleChange}
                  rows={4}
                  className='w-full p-3 border border-black/10 rounded-lg text-base resize-none'
                  placeholder='Escribe tu mensaje aquí...'
                  required
                />
              </div>
              {submitStatus.message && (
                <div
                  className={clsx(
                    "p-3 rounded-lg",
                    submitStatus.isError
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700",
                  )}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type='submit'
                disabled={isSubmitting}
                className={clsx(
                  "mx-auto w-fit px-3 py-3 rounded-lg text-white font-semibold text-base transition-colors font-redhat",
                  "bg-majica-primary hover:bg-majica-primary/80",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                )}
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
