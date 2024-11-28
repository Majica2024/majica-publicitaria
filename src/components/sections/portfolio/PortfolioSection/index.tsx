import { Button } from "@/components/ui/Button";
import { Paragraph } from "@/components/ui/Paragraph";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import Image from "next/image";

interface PortfolioSectionProps {
  key: number;
  title: string;
  spanTitle?: string;
  spanColor?: string;
  image: string | undefined;
  paragraph: string;
  button: {
    span: string;
    href: string;
  };
  background: string;
}

export const PortfolioSection = ({
  title,
  paragraph,
  button,
  spanTitle,
  image,
  background,
}: PortfolioSectionProps) => {
  return (
    <section 
      className="py-20"
      style={{ background }}
    >
      <div className="container mx-auto flex flex-col gap-12 px-4 md:flex-row md:items-center md:gap-16 md:px-32">
        {/* Imagen */}
        {image && (
          <div className="w-full md:w-1/2">
            <Image
              src={image}
              alt={`${title} ${spanTitle}`}
              width={600}
              height={800}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mx-auto w-[70%] object-cover md:w-full"
              priority
            />
          </div>
        )}

        {/* Contenido */}
        <div className={clsx(
          redHatDisplay.className,
          "flex flex-1 items-center justify-center"
        )}>
          <div className="flex w-full max-w-xl flex-col gap-12">
            <h2 className="border-b border-gray-200 pb-4 text-4xl font-bold md:text-5xl">
              <span className="block">{title}</span>
              {spanTitle && (
                <span className="mt-2 block text-majica-secondary">
                  {spanTitle}
                </span>
              )}
            </h2>
            
            <Paragraph className="text-lg text-majica-text-light">
              {paragraph}
            </Paragraph>

            <Button span={button.span} href={button.href} />
          </div>
        </div>
      </div>
    </section>
  );
};
