import Image from "next/image";
import { NavbarMenuProps } from "../../types/NavbarMenuProps";
import exit from "../../assets/exit/BotonExit.svg";

const NavbarMenu: React.FC<NavbarMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen && (
        <>
          <div
            className="hover:text-secondary  transition duration-1000 h-screen w-screen fixed top-0 left-0 bg-black opacity-20"
            onClick={toggleMenu}
          ></div>

          <div
            className={`fixed top-12 right-0 w-[50%] h-screen bg-primary shadow-2xl  p-4 transition-transform duration-1000 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="w-full  border flex flex-col justify-around items-center align-middle">
              <Image src="" alt="foto" className="rounded-full border" width={50} height={50} />
              <p className="hover:text-secondary transition duration-500">usuario</p>
              <Image src={exit} alt="exit" className="" />
            </div>
            <ul className="flex flex-col">
              <li className="my-2 hover:text-secondary transition duration-500">
                <a href="#inicio">Inicio</a>
              </li>
              <li className="my-2 hover:text-secondary transition duration-500">
                <a href="#servicios">Tracking</a>
              </li>
              <li className="my-2 hover:text-secondary transition duration-500">
                <a href="#servicios">Servicios</a>
              </li>
              <li className="my-2 hover:text-secondary transition duration-500">
                <a href="#servicios">Nosotros</a>
              </li>
              <li className="my-2 hover:text-secondary transition duration-500">
                <a href="#servicios">Tutoriales</a>
              </li>
              <li className="my-2 hover:text-secondary transition duration-500">
                <a href="#servicios">Contactos</a>
              </li>
              {/* Add more anchors here */}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarMenu;
