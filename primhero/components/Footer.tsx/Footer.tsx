import Image from "next/image";
import React from "react";
import logo from "../../assets/logo/Logo.svg";
import exit from "../../assets/exit/BotonExit.svg";
import iso from "../../assets/iso/isowhite.svg";

function Footer() {
  return (
    <footer className="bg-primary grid grid-cols-2 grid-rows-3 w-full h-full font-sans">
      <div className="te flex flex-col justify-center items-center align-middle">
        {" "}
        <ul className="w-full p-5 ">
          <h5 className="text-secondary py-2">Direcciones</h5>
          <li className=" text-xs pb-2 ">
            Almafuerte 429, entre Montes de Oca y Lavalle, Avellaneda, Provincia de Bs As.
          </li>
          <li className=" text-xs">
            Ruta 11 N° 1175, esquina La Paz, Puerto General San Martin, Santa Fe.
          </li>
        </ul>
      </div>
      <div className=" flex flex-col justify-center items-center align-middle">
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
      <div className=" border-r-2 border-whi col-span-1 flex flex-col justify-center items-center align-middle">
        <Image src={iso} alt="logo" width={100} height={100} className="fill-white color-white" />
      </div>
      <div className=" flex justify-center items-center align-middle">
        <ul className="text-secondary w-1/2 h-1/2 flex flex-col  justify-start items-start ">
          <li>INICIO</li>
          <li>TRACKING</li>
          <li>SERVICIOS</li>
          <li>NOSOTROS</li>
          <li>TUTORIALES</li>
          <li>CONTACTO</li>
        </ul>{" "}
      </div>

      <div className=" border-white w-full h-full flex justify-center items-center ">
        <div className="w-full p-5">
          <h5 className="text-secondary">Contacto</h5>
          <span>+123 456 789 primhero@mail.com</span>
          <ul className="flex">
            <li>svg ig</li>
            <li>svg fb</li>
          </ul>
        </div>
      </div>
      <div className=" w-full h-full flex justify-center items-center ">
        <Image src={exit} alt="logo" width={100} height={100} />
      </div>
    </footer>
  );
}

export default Footer;
