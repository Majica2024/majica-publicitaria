import { Button } from "@/components/ui/Button";
import { Paragraph } from "@/components/ui/Paragraph";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import Image from "next/image";

interface TextProps {
  paragraph: string;
  points: {
    id: number;
    text: string;
  }[];
}

export interface PortfolioSectionProps {
  index: number;
  key: number;
  title: string;
  spanTitle?: string;
  spanTitleColor?: string;
  image: string | undefined;
  text: {
    paragraph: string;
    points?: {
      id: number;
      text: string;
    }[];
  };
  button: {
    span: string;
    href: string;
  };
  background: string;
  imageBorder: boolean;
}

export const PortfolioSection = ({
  index,
  title,
  text,
  button,
  spanTitle,
  spanTitleColor,
  image,
  background,
}: PortfolioSectionProps) => {
  return (
    <section className='py-20' style={{ background }}>
      <div className='container mx-auto flex flex-col gap-12 px-4 md:flex-row md:items-center md:gap-16 md:px-32'>
        {image && (
          <div
            className={`w-full md:w-1/2 ${index % 2 === 1 ? "md:order-2" : ""}`}
          >
            <Image
              src={image}
              alt={`${title} ${spanTitle}`}
              width={600}
              height={800}
              sizes='(max-width: 768px) 100vw, 50vw'
              className='mx-auto w-[70%] object-cover md:w-full'
              priority
            />
          </div>
        )}
        <div
          className={clsx(
            redHatDisplay.className,
            "flex flex-1 items-center justify-center",
          )}
        >
          <div className='flex w-full max-w-xl flex-col gap-12'>
            <h2 className='border-b border-gray-200 pb-4 text-4xl font-bold md:text-5xl'>
              <span className='block'>{title}</span>
              {spanTitle && (
                <span
                  className='mt-2 block'
                  style={{
                    color: spanTitleColor,
                  }}
                >
                  {spanTitle}
                </span>
              )}
            </h2>

            <Paragraph className='text-lg text-majica-text-light'>
              {text.paragraph}
            </Paragraph>

            <ul className='flex flex-col gap-4'>
              {text.points?.map((point) => (
                <li key={point.id} className='flex items-start gap-2'>
                  <span className='mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-majica-dark' />
                  <span className='text-majica-text-light'>{point.text}</span>
                </li>
              ))}
            </ul>

            <Button span={button.span} href={button.href} />
          </div>
        </div>
      </div>
    </section>
  );
};
