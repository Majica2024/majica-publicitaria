import { Paragraph } from "@/components/ui/Paragraph";
import type { TestimonialCardProps } from "@/types/ui";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import Image from "next/image";

export const Card = ({ testimonial }: TestimonialCardProps) => {
  const { title, client, image, description } = testimonial;
  return (
    <article className='bg-background rounded-lg p-6 shadow-md text-center transform transition-transform duration-300 hover:-translate-y-1'>
      <div className='aspect-square rounded-lg overflow-hidden p-4'>
        <Image
          src={image}
          alt={`Testimonio de ${title} - ${client}`}
          className='w-full h-full object-contain'
          width={100}
          height={100}
          loading='lazy'
        />
      </div>
      <h4
        className={clsx(
          "text-primary text-base font-medium text-majica-primary",
          redHatDisplay.className,
        )}
      >
        {title}
      </h4>
      <h5 className='text-text-title text-base font-medium mb-2'>
        Cliente: {client}
      </h5>
      <Paragraph size='0.875rem' className={redHatDisplay.className}>
        {description}
      </Paragraph>
    </article>
  );
};
