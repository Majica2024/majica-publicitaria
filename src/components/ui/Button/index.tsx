import Link from "next/link";

interface ButtonProps {
  span?: string;
  href?: string;
}

export const Button = ({ span, href }: ButtonProps) => {
  const buttonContent = (
    <span className="relative">
      {span}
      <span className="absolute -right-2 -top-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-majica-coral opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-majica-coral"></span>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link 
        href={href}
        className="inline-flex items-center justify-center rounded-full bg-majica-primary px-6 py-3 font-medium text-white transition-all hover:bg-majica-coral active:scale-95"
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button 
      className="inline-flex items-center justify-center rounded-full bg-majica-primary px-6 py-3 font-medium text-white transition-all hover:bg-majica-coral active:scale-95"
    >
      {buttonContent}
    </button>
  );
};
