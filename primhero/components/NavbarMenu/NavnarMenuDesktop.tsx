import React from "react";
import Link from "next/link";
import handleNavItemClick from "@component/utils/handleNavItemClick";

function NavnarMenuDesktop() {
  return (
    <div>
      {" "}
      <ul className="flex gap-10  transition duration-500 ">
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black">
          <Link href="http://localhost:3000/">Inicio</Link>
        </li>
        <li className="my-2 hover:text-secondary">
          <Link href="http://localhost:3000/tracking">Tracking</Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black">
          <Link href="#servicios" onClick={(e) => handleNavItemClick(e, "servicios")}>
            Servicios
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black">
          <Link href="#nosotros" onClick={(e) => handleNavItemClick(e, "nosotros")}>
            Nosotros
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black">
          <Link href="#tutoriales" onClick={(e) => handleNavItemClick(e, "tutoriales")}>
            Tutoriales
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 drop-shadow-xl shadow-black">
          <Link href="#contacto" onClick={(e) => handleNavItemClick(e, "contacto")}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavnarMenuDesktop;
