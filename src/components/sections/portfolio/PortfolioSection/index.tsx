import { Button } from "@/components/ui/Button";
import { Paragraph } from "@/components/ui/Paragraph";
import { redHatDisplay } from "@/utils";
import { clsx } from "clsx";
import Image from "next/image";
import "./PortfolioSection.css";
import "../../../../app/globals.css";

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
  spanColor,
  image,
  background,
}: PortfolioSectionProps) => {
  return (
    <section
      className={"section"}
      style={{
        background: background,
      }}
    >
      <div className={"sectionContainer"}>
        {image && (
          <picture className={"servicesImage"}>
            <Image
              src={image}
              alt={`${title} ${spanTitle}`}
              width={100}
              height={800}
              sizes='(width > 768px) 100vw, 50vw'
              className={"mainImage"}
            />
          </picture>
        )}

        <div className={clsx(redHatDisplay.className, "servicesText")}>
          <div className={"sectionTextContainer"}>
            <h2 className={"sectionTitle"}>
              <span className={"titleFirst"}>{title}</span>
              <span className={"titleHighlight"}>{spanTitle}</span>
            </h2>
            <Paragraph width='100%'>{paragraph}</Paragraph>
            <Button span={button.span} href={button.href} />
          </div>
        </div>
      </div>
    </section>
  );
};
