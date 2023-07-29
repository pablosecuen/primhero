import Image from "next/image";
import React from "react";
import logo from "../../assets/logo/Logo.svg";
import instagram from "../../assets/socialmedia/instagram.svg";
import facebook from "../../assets/socialmedia/facebook.svg";
import iso from "../../assets/iso/isowhite.svg";
import ButtonSignIn from "../ButtonSignIn/ButtonSignIn";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-metal2 bg-contain py-8 grid grid-cols-2 grid-rows-3 w-full h-full  font-sans lg:flex lg:justify-evenly lg:items-center lg:align-middle">
      <div className="lg:w-full  flex flex-col justify-center items-center align-middle ">
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
      <div className="lg:w-full flex flex-col justify-center items-center align-middle ">
        {" "}
        <ul className="w-full p-5 px-10 md:px-0">
          <h5 className="text-secondary py-2">Direcciones</h5>
          <li className=" text-xs pb-2  text-white">
            Almafuerte 429, entre Montes de Oca y Lavalle, Avellaneda, Provincia de Bs As.
          </li>
          <li className=" text-xs text-white">
            Ruta 11 N° 1175, esquina La Paz, Puerto General San Martin, Santa Fe.
          </li>
        </ul>
      </div>
      <div className="lg:w-full  border-white w-full h-full flex justify-center items-center  ">
        <div className="w-full p-5 flex flex-col justify-center items-center lg:items-start">
          <h5 className="text-secondary">Contacto</h5>
          <span className="text-white pt-2">
            +123 456 789
            <br />
            primhero@gmail.com
          </span>
          <ul className="flex text-white gap-4 pt-2">
            <li>
              <Link href={"https://www.instagram.com/transporteprimhero/"}>
                <Image src={instagram} alt="logo" width={20} height={20} />
              </Link>
            </li>
            <li>
              <Link href={"https://m.facebook.com/people/Transporte-Primhero/100084061013848/"}>
                <Image src={facebook} alt="logo" width={20} height={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:w-full  flex justify-center items-center align-middle  w-full h-full sm:pl-10 md:pl-24 lg:pl-0  xl:pl-0 border-l-2 ">
        <ul className="text-secondary w-1/2 h-1/2 flex flex-col  justify-center items-start lg:text-sm ">
          <li>
            <a href="/">INICIO</a>
          </li>
          <li>
            <a href="/tracking">TRACKING</a>
          </li>
          <li>SERVICIOS</li>
          <li>NOSOTROS</li>
          <li>TUTORIALES</li>
          <li>CONTACTO</li>
        </ul>
      </div>

      <div className="lg:w-full  w-full h-full flex justify-center items-center  ">
        <ButtonSignIn />
      </div>
      <div className="lg:w-full  border-r-2 lg:border-r-0 col-span-1 flex flex-col justify-center items-center align-middle ">
        <Image src={iso} alt="logo" width={100} height={100} className="fill-white color-white" />
      </div>
    </footer>
  );
}

export default Footer;
