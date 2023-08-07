"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import NavbarMenu from "../NavbarMenu/NavbarMenu";
import NavnarMenuDesktop from "../NavbarMenu/NavnarMenuDesktop";
import ButtonSignIn from "../ButtonSignIn/ButtonSignIn";
import UseAnimations from "react-useanimations";
import menu2 from "react-useanimations/lib/menu2";
import logo from "../../assets/logo/Logo.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="sm:h-full h-14 w-full flex items-center justify-between align-middle lg:pr-8 bg-metal2 bg-center bg-contain backdrop-blur-3xl">
        <Image src={logo} alt="logo" className="sm:h-16 h-12 sm:w-20 w-16 ml-4 sm:ml-10" />
        <button onClick={toggleMenu} className=" animation-container sm:hidden">
          <UseAnimations animation={menu2} size={50} fillColor="#f9b400" strokeColor="#f9b400" />
        </button>
        <NavnarMenuDesktop />
        <ButtonSignIn />
      </div>
      <NavbarMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Navbar;
