import type { NavItemProps } from "@/types";
import Link from "next/link";

export const NavItem = ({ name, url, onClick }: NavItemProps) => {
  return (
    <Link 
      href={url} 
      onClick={onClick} 
      className="text-majica-text-primary hover:text-majica-primary transition-colors duration-200"
    >
      {name}
    </Link>
  );
};
