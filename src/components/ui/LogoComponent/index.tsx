import Image from "next/image";
import Logo from "../../../../public/assets/images/logo.svg";

export const LogoComponent = ({ size = "6rem" }) => {
  return (
    <picture
      className='object-contain block items-center justify-center'
      style={{ height: size }}
    >
      <Image
        src={Logo}
        alt='Logo'
        priority
        style={{ height: size }}
        className='w-52 md:w-auto'
      />
    </picture>
  );
};
