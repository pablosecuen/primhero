"use client";
import Image from "next/image";
import { NavbarMenuProps } from "../../types/NavbarMenuProps";
import exit from "../../assets/exit/BotonExit.svg";
import Link from "next/link";
import handleNavItemClick from "@component/utils/handleNavItemClick";
import { useEffect } from "react";

const NavbarMenu: React.FC<NavbarMenuProps> = ({ isOpen, toggleMenu }) => {
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

  return (
    <>
      <div
        className={`transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } fixed h-screen mt-16 w-screen top-0 left-0 bg-black/20`}
        onClick={toggleMenu}
      ></div>

      <div
        className={`transition-all duration-1000 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-12 right-0 w-[50%] h-screen bg-primary shadow-2xl p-4 mt-4`}
      >
        <ul className="flex flex-col">
          <li className="my-2 hover:text-secondary transition duration-500">
            <a href="/">Inicio</a>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500">
            <a href="/tracking">Tracking</a>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500">
            <a href="#servicios" onClick={(e) => handleNavItemClick(e, "servicios")}>
              Servicios
            </a>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500">
            <a href="#nosotros" onClick={(e) => handleNavItemClick(e, "nosotros")}>
              Nosotros
            </a>
          </li>
          <li className="my-2 hover:text-secondary transition duration-500">
            <a href="#tutoriales" onClick={(e) => handleNavItemClick(e, "tutoriales")}>
              Tutoriales
            </a>
          </li>
          <a href="#contacto" onClick={(e) => handleNavItemClick(e, "contacto")}>
            Contacto
          </a>
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
