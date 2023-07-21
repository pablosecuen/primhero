import React from "react";

function NavnarMenuDesktop() {
  return (
    <div>
      {" "}
      <ul className="flex gap-10 hover:text-secondary transition duration-500">
        <li className="my-2 ">
          <a href="#inicio">Inicio</a>
        </li>
        <li className="my-2">
          <a href="#servicios">Tracking</a>
        </li>
        <li className="my-2">
          <a href="#servicios">Servicios</a>
        </li>
        <li className="my-2">
          <a href="#servicios">Nosotros</a>
        </li>
        <li className="my-2">
          <a href="#servicios">Tutoriales</a>
        </li>
        <li className="my-2">
          <a href="#servicios">Contactos</a>
        </li>
      </ul>
    </div>
  );
}

export default NavnarMenuDesktop;
