"use client";

import { Card } from "@/components/ui/Card";
import { HighlightSection } from "@/components/ui/HighlightSection";
import { Paragraph } from "@/components/ui/Paragraph";
import { testimonials } from "@/data";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";

export const Testimonials = () => {
  return (
    <section className="flex flex-col items-center gap-12 px-4 py-16 text-center" id="casos-de-exito">
      <article className="mx-auto w-full max-w-[90%] text-center md:max-w-[500px]">
        <HighlightSection span="Testimonios" />
        <h2 className="mb-4 text-2xl font-bold text-majica-text-primary md:text-4xl">
          Historias de{" "}
          <span className="text-majica-secondary">éxito</span>{" "}
          profesional
        </h2>
        <h3 className="mb-4 text-xl font-semibold text-majica-secondary md:text-2xl">
          ¡Historias de éxito que marcan la diferencia!
        </h3>
        <Paragraph>
          Explora cómo hemos ayudado a nuestros clientes a destacar con
          soluciones de impresión personalizadas y de alto impacto.
        </Paragraph>
      </article>

      <div className="grid w-full max-w-7xl gap-8 px-4 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4"
      >
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      <h3 className={clsx(
        redHatDisplay.className,
        "text-2xl text-majica-text-primary md:text-3xl"
      )}>
        ¡En Majica queremos evolucionar contigo!
      </h3>
    </section>
  );
};
