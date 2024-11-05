import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/assets/images/logo.png";

export const LogoComponent = () => {
  return (
    <picture>
      <Link href='/'>
        <Image
          src={Logo}
          alt='Logo'
          priority
          style={{
            width: "auto",
            height: "auto",
          }}
        />
      </Link>
    </picture>
  );
};
