import { Button } from "@/components/ui/Button";
import { NavItem } from "@/components/ui/NavItem";
import { pages } from "@/data/navigation";

interface NavigationProps {
  onLinkClick?: () => void;
}

export const Navigation = ({ onLinkClick }: NavigationProps) => {
  return (
    <nav className='fixed inset-0 top-20 bg-white md:relative md:top-0 md:bg-transparent'>
      <ul className='flex flex-col items-center gap-8 p-8 md:flex-row md:p-0'>
        {pages.map(({ name, url }) => (
          <li 
            key={name} 
            className="relative font-medium"
          >
            <NavItem name={name} url={url} onClick={onLinkClick} />
          </li>
        ))}
        <Button href='/#contacto' span='Contáctanos' />
      </ul>
    </nav>
  );
};
