import Image from "next/image";

interface LogoProps {
  white: boolean;
}

const Logo: React.FC<LogoProps> = ({ white }) => {
  return (
    // <img src="../assets/images/logo.svg" alt="logo" />
    <div className="cursor-pointer app-logo text-sm sm:text-sm md:text-base lg:text-2xl">
      PLANT ❤ SHOP
    </div>
  );
};

export default Logo;
