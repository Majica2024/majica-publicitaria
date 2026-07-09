import { Reveal, TiltCard } from "@/components/fx";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceWhatsappMessage, services } from "@/data/services";
import { bricolage, whatsappLink } from "@/utils";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io";

export const ServicesGrid = () => {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Catálogo de servicios"
          title={
            <>
              Todo lo que tu marca necesita,{" "}
              <span className="text-brand-coral-ink">bajo un mismo taller</span>
            </>
          }
          description="Once líneas de producción con diseño, fabricación e instalación incluidos. Cotiza el servicio exacto que buscas en un mensaje."
        />
      </Reveal>

      <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <li key={service.slug}>
            <Reveal delay={(index % 3) * 90} className="h-full">
              <TiltCard className="group h-full overflow-hidden rounded-2xl border border-brand-line bg-white shadow-[0_10px_30px_-18px_rgba(40,40,61,0.18)] transition-shadow duration-300 hover:shadow-[0_28px_56px_-20px_rgba(40,40,61,0.35)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading={index < 3 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-brand-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <span
                    className={clsx(
                      bricolage.className,
                      "absolute left-4 top-4 rounded-full bg-brand-paper/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-teal-ink",
                    )}
                  >
                    {service.category}
                  </span>
                </div>

                <div className="flex flex-col gap-2 p-6">
                  <h3
                    className={clsx(
                      bricolage.className,
                      "text-xl font-bold tracking-tight text-brand-ink",
                    )}
                  >
                    {service.name}
                  </h3>
                  <p className="min-h-[3.5rem] text-sm leading-relaxed text-brand-ink-soft">
                    {service.description}
                  </p>
                  <Link
                    href={whatsappLink(serviceWhatsappMessage(service.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full border-[1.5px] border-brand-line px-5 py-2 text-sm font-semibold text-brand-ink transition-colors duration-200 hover:border-brand-whatsapp hover:bg-brand-whatsapp hover:text-white"
                  >
                    <IoLogoWhatsapp size={17} aria-hidden="true" />
                    Cotizar este servicio
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
};
