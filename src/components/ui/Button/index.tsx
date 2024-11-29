import { redHatDisplay } from "@/utils";
import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
  span?: string;
  href?: string;
}

export const Button = ({ span, href = "/" }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        "rounded-lg bg-majica-primary py-3 px-6 text-white hover:bg-majica-primary-dark text-base",
        redHatDisplay.className,
      )}
      style={{
        fontWeight: 600,
        width: "fit-content",
      }}
    >
      {span}
    </Link>
  );
};
