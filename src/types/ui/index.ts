import type { ReactNode } from "react";

export interface ParagraphProps {
  children: ReactNode;
  size?: string;
  width?: string;
  className?: string;
}

export interface TestimonialCardProps {
  testimonial: {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    description: string;
  };
}
