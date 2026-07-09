"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { useContactForm } from "@/hooks/useContactForm";
import { useEmailSubmission } from "@/hooks/useEmailSubmission";
import { WHATSAPP_DEFAULT_MESSAGE, bricolage, whatsappLink } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import type { FormEvent } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const inputStyles =
  "w-full rounded-xl border border-brand-line bg-brand-paper/60 p-3.5 text-base text-brand-ink placeholder:text-brand-ink-soft/60 transition-colors focus:border-brand-teal focus:outline-none";

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
    <section id="contacto" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div className="flex flex-col gap-8 md:sticky md:top-28">
          <SectionHeading
            align="left"
            eyebrow="Contáctanos"
            title={
              <>
                ¿Tienes una idea?{" "}
                <span className="text-brand-coral-ink">Hagámosla imprimible</span>
              </>
            }
            description="Completa el formulario y nuestro equipo te contacta el mismo día hábil con una propuesta."
          />

          <div className="flex flex-col gap-3 rounded-2xl bg-brand-teal-soft p-6">
            <p className={clsx(bricolage.className, "font-bold text-brand-ink")}>
              ¿Tienes prisa?
            </p>
            <p className="text-sm leading-relaxed text-brand-ink-soft">
              Escríbenos directo a WhatsApp y cotiza en minutos con un asesor
              del taller.
            </p>
            <Link
              href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                bricolage.className,
                "mt-1 inline-flex min-h-[48px] w-fit items-center gap-2 rounded-full bg-brand-whatsapp px-6 py-3 font-semibold text-white transition-all duration-200 hover:brightness-95",
              )}
            >
              <IoLogoWhatsapp size={20} aria-hidden="true" />
              Cotizar por WhatsApp
            </Link>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border border-brand-line bg-white p-7 shadow-[0_24px_60px_-32px_rgba(40,40,61,0.25)] md:p-9"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-brand-ink">
              Nombre y apellido
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              className={inputStyles}
              placeholder="¿Cómo te llamas?"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-brand-ink">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className={inputStyles}
              placeholder="tucorreo@empresa.com"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-brand-ink">
              Celular
            </label>
            <div className="flex items-center overflow-hidden rounded-xl border border-brand-line bg-brand-paper/60 transition-colors focus-within:border-brand-teal">
              <span className="border-r border-brand-line px-4 py-3.5 text-sm font-medium text-brand-ink-soft">
                +57
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel-national"
                inputMode="tel"
                className="w-full bg-transparent p-3.5 text-base text-brand-ink placeholder:text-brand-ink-soft/60 focus:outline-none"
                placeholder="300 123 4567"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-brand-ink">
              Cuéntanos qué necesitas
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={clsx(inputStyles, "resize-none")}
              placeholder="Ej: necesito un aviso acrílico iluminado para mi local…"
              required
            />
          </div>

          <div aria-live="polite">
            {submitStatus.message && (
              <p
                className={clsx(
                  "rounded-xl p-3.5 text-sm font-medium",
                  submitStatus.isError
                    ? "bg-red-50 text-red-700"
                    : "bg-brand-teal-soft text-brand-teal-ink",
                )}
              >
                {submitStatus.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={clsx(
              bricolage.className,
              "min-h-[52px] w-full rounded-full bg-brand-coral px-8 py-3.5 text-base font-semibold text-white transition-all duration-200",
              "hover:bg-brand-coral-ink active:scale-[0.99]",
              "disabled:cursor-not-allowed disabled:opacity-50",
            )}
          >
            {isSubmitting ? "Enviando…" : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
};
