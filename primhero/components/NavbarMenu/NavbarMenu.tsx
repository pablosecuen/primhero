"use client";
import { NavbarMenuProps } from "../../types/NavbarMenuProps";
import Link from "next/link";
import handleNavItemClick from "@component/utils/handleNavItemClick";
import { useEffect, useState } from "react";
import ButtonSignIn from "../ButtonSignIn/ButtonSignIn";
import Modal from "../ModalLogin/ModalLogin";
import Image from "next/image";
import button from "../../assets/exit/BotonExit.svg";

const NavbarMenu: React.FC<NavbarMenuProps> = ({ isOpen, toggleMenu }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleEscapeKey = (event: any) => {
      if (event.key === "Escape") {
        toggleMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, toggleMenu]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className={`transition-all duration-500 sm:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed h-screen sm:mt-16 mt-14 w-screen top-0 left-0 bg-black/20`}
        onClick={toggleMenu}
      ></div>
      {isModalOpen && <Modal onClose={handleCloseModal} />}
      <div
        className={`transition-all duration-1000 sm:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-14 sm:top-16 right-0 w-[50%] h-screen bg-primary shadow-2xl p-4 `}
      >
        <div className="w-24 mx-auto py-8">
          <div className="w-24">
            <Image src={button} alt="boton" width={150} height={150} onClick={handleButtonClick} />
          </div>
        </div>
        <ul className="flex flex-col">
          <li className="my-2 hover:text-secondary transition duration-500">
            <Link href="/">Inicio</Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500">
            <Link href="/tracking">Tracking</Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500">
            <Link href="#servicios" onClick={(e) => handleNavItemClick(e, "servicios")}>
              Servicios
            </Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500">
            <Link href="#nosotros" onClick={(e) => handleNavItemClick(e, "nosotros")}>
              Nosotros
            </Link>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500">
            <Link href="#tutoriales" onClick={(e) => handleNavItemClick(e, "tutoriales")}>
              Tutoriales
            </Link>
          </li>
          <Link href="#contacto" onClick={(e) => handleNavItemClick(e, "contacto")}>
            Contacto
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
