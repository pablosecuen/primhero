"use client";
import { useEffect, useState } from "react";
import logo from "../../assets/logo/Logo.svg";
import hamburger from "../../assets/hamburguerLogosvg/hamburger-svgrepo-com.svg";
import Image from "next/image";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import NavnarMenuDesktop from "../NavbarMenu/NavnarMenuDesktop";
import exit from "../../assets/exit/BotonExit.svg";

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
    <nav className=" sticky top-0 w-screen bg-primary h-16 font-sans ">
      <div className="h-full w-full flex items-center justify-between align-middle">
        <Image src={logo} alt="logo" className="h-14 w-14 ml-4 sm:ml-10" />
        {isMobile ? ( // Renderizar NavbarMenu solo en móvil
          <button onClick={toggleMenu}>
            <Image src={hamburger} alt="hamburger" className="h-12 w-12 mr-4 " />
          </button>
        ) : (
          // Renderizar lista de elementos <a> fuera de móvil
          <>
            <NavnarMenuDesktop />
            <Image src={exit} alt="exit" className="sm:mr-10" />
          </>
        )}
      </div>
      {isMobile && <NavbarMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />}
    </nav>
  );
};

export default Navbar;
