import React from "react";
import Link from "next/link";
import { handleSmoothScroll } from "@component/utils/handleSmoothScroll";

function NavnarMenuDesktop() {
  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (window.location.pathname === "/tracking") {
      // Redireccionar a la página de inicio
      window.location.href = "/";

      // Esperar un breve tiempo (por ejemplo, 500 ms) antes de realizar el desplazamiento suave
      setTimeout(() => {
        // Obtener la posición de la sección en la página de inicio
        const targetSection = document.getElementById(sectionId);
        const targetPosition = targetSection?.getBoundingClientRect().top ?? 0;

        // Realizar el desplazamiento suave a la posición de la sección en la página de inicio
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }, 1000);
    } else {
      // Si no estamos en la página de tracking, simplemente realizar el desplazamiento suave
      // utilizando la función handleSmoothScroll() que tenías implementada previamente
      handleSmoothScroll(e, sectionId);
    }
  };

  return (
    <div>
      {" "}
      <ul className="flex gap-10  transition duration-500 ">
        <li className="my-2 hover:text-secondary transition duration-700">
          <Link href="http://localhost:3000/">Inicio</Link>
        </li>
        <li className="my-2 hover:text-secondary">
          <Link href="http://localhost:3000/tracking">Tracking</Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700">
          <Link href="#servicios" onClick={(e) => handleNavItemClick(e, "servicios")}>
            Servicios
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700 ">
          <Link href="#nosotros" onClick={(e) => handleNavItemClick(e, "nosotros")}>
            Nosotros
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700">
          <Link href="#tutoriales" onClick={(e) => handleNavItemClick(e, "tutoriales")}>
            Tutoriales
          </Link>
        </li>
        <li className="my-2 hover:text-secondary transition duration-700">
          <Link href="#contacto" onClick={(e) => handleNavItemClick(e, "contacto")}>
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavnarMenuDesktop;
