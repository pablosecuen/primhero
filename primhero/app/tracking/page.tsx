import Footer from "@component/components/Footer.tsx/Footer";
import Navbar from "@component/components/Nabvar/Navbar";
import React from "react";
import box from "../../assets/box/box.svg";
import Image from "next/image";

function Tracking() {
  return (
    <div>
      <Navbar />
      <div className="bg-image2 h-screen w-full bg-cover bg-center text-center flex flex-col justify-center align-middle items-center gap-8">
        <h3 className="text-white text-center text-3xl  tracking-tight font-extrabold">TRACKING</h3>
        <h4 className="text-secondary font-bold">Realiza un seguimiento de tu envío</h4>
        <article className="w-11/12 sm:w-1/3 md:1/2 h-36  bg-white drop-shadow-3xl rounded-xl py-8 px-2 shadow-2xl flex justify-center items-center">
          <Image src={box} alt="box" width={50} height={50} />
          <div className="flex border border-black/30 rounded-xl overflow-hidden h-12">
            <label htmlFor="tracking" className="ml-2" hidden>
              Buscar nro. de seguimiento
            </label>
            <input
              className="ml-2 "
              type="text"
              id="tracking"
              placeholder="Buscar nro. de seguimiento"
            />
            <button className="w-auto  m-auto cursor-pointer font-sans bg-secondary h-full pr-2 pl-2 -ml-4 ">
              Buscar
            </button>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}

export default Tracking;
