"use client";
import { useEffect, useState } from "react";
import logo from "../../assets/logo/Logo.svg";
import hamburger from "../../assets/hamburguerLogosvg/menu.svg";
import Image from "next/image";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import NavnarMenuDesktop from "../NavbarMenu/NavnarMenuDesktop";
import ButtonSignIn from "../ButtonSignIn/ButtonSignIn";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // breakpoint para el menu mobile
    };

    // Verificamos el ancho de la ventana en el montaje inicial y cada vez que se redimensione
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpiamos el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="sm:h-full h-14 w-full flex items-center justify-between align-middle lg:pr-8 bg-metal2 bg-center bg-contain backdrop-blur-3xl">
        <Image src={logo} alt="logo" className="sm:h-16 h-12 sm:w-20 w-16 ml-4 sm:ml-10" />
        {isMobile ? ( // Renderizar NavbarMenu solo en móvil
          <button onClick={toggleMenu} className=" animation-container">
            <UseAnimations animation={menu2} size={50} fillColor="#f9b400" strokeColor="#f9b400" />
          </button>
        ) : (
          // Renderizar lista de elementos <a> fuera de móvil
          <>
            <NavnarMenuDesktop />
            <ButtonSignIn />
          </>
        )}
      </div>
      {isMobile && <NavbarMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />}
    </>
  );
};

export default Navbar;
