import { Reveal } from "@/components/fx";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bricolage } from "@/utils";
import clsx from "clsx";
import { MessagesSquare, PenTool, Printer, Wrench } from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    title: "Cuéntanos tu idea",
    description:
      "Nos escribes por WhatsApp o el formulario. Entendemos tu marca, el espacio y el presupuesto.",
  },
  {
    icon: PenTool,
    title: "Diseñamos la pieza",
    description:
      "Te proponemos diseño y materiales con renders o pruebas de color antes de producir.",
  },
  {
    icon: Printer,
    title: "Producimos en taller",
    description:
      "Impresión, corte y acabados con control de calidad en cada paso del pliego.",
  },
  {
    icon: Wrench,
    title: "Instalamos y entregamos",
    description:
      "Nuestro equipo instala en tu punto y deja todo funcionando, en Bogotá y toda Colombia.",
  },
];

export const Process = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Cómo trabajamos"
            title={
              <>
                De la idea a la instalación,{" "}
                <span className="text-brand-teal-ink">sin fricciones</span>
              </>
            }
          />
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li key={title}>
              <Reveal
                delay={index * 110}
                className="relative flex h-full flex-col gap-4"
              >
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-coral-soft text-brand-coral-ink">
                  <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span
                  className={clsx(
                    bricolage.className,
                    "text-sm font-bold text-brand-line",
                  )}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className={clsx(
                  bricolage.className,
                  "text-lg font-bold tracking-tight text-brand-ink",
                )}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-ink-soft">
                {description}
              </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
