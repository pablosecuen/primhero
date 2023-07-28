import Image from "next/image";
import { NavbarMenuProps } from "../../types/NavbarMenuProps";
import exit from "../../assets/exit/BotonExit.svg";
import Link from "next/link";
import handleNavItemClick from "@component/utils/handleNavItemClick";

const NavbarMenu: React.FC<NavbarMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen && (
        <>
          <div
            className="hover:text-secondary  transition duration-1000 h-screen w-screen fixed top-0 left-0 bg-black/20"
            onClick={toggleMenu}
          ></div>

          <div
            className={`fixed top-12 right-0 w-[50%] h-screen bg-primary shadow-2xl  p-4 transition-transform duration-1000 mt-4 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* <div className="w-full border flex flex-col justify-around items-center align-middle">
              <Image
                src={exit}
                alt="foto"
                className="rounded-full border"
                width={50}
                height={50}
                layout="fixed" 
              />
              <p className="hover:text-secondary transition duration-500">usuario</p>
              <Image
                src={exit}
                alt="exit"
                className=""
                width={100}
                height={100}
                layout="fixed" 
              />
            </div> */}

            <ul className="flex flex-col">
              <li className="my-2 hover:text-secondary transition duration-700">
                <Link href="http://localhost:3000/">Inicio</Link>
              </li>
              <li className="my-2 hover:text-secondary transition duration-700">
                <Link href="http://localhost:3000/tracking">Tracking</Link>
              </li>
              <li className="my-2 hover:text-secondary transition duration-700">
                <Link href="#servicios" onClick={(e) => handleNavItemClick(e, "servicios")}>
                  Servicios
                </Link>
              </li>
              <li className="my-2 hover:text-secondary transition duration-700">
                <Link href="#nosotros" onClick={(e) => handleNavItemClick(e, "nosotros")}>
                  Nosotros
                </Link>
              </li>
              <li className="my-2 hover:text-secondary transition duration-700">
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
      )}
    </>
  );
};

export default NavbarMenu;
