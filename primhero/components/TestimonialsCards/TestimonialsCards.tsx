import React from "react";

import testimonialImage from "../../assets/testimonialImage/testimonialImage.svg";
import Image from "next/image";
function Testimonials() {
  return (
    <article className=" flex flex-col m-auto  py-10  mb-8 sm:py-0  ">
      <div className="w-11/12 shadow-xl border border-black/10 mx-auto rounded-lg flex tracking-tighter p-8  gap-4 sm:h-48 ">
        <Image
          src={testimonialImage}
          alt="fotouser"
          width={100}
          height={100}
          className="m-auto drop-shadow-2xl lg:w-40"
        />
        <div className="flex flex-col lg:justify-evenly  text-black tracking-tighter">
          <span className="font-bold text-secondary">Marcelo Torres</span>
          <span className="text-sm">
            La calidad de nuestros servicios es auditada periódicamente. Nuestro negocio es que su
            carga llegue a tiempo
          </span>
        </div>
      </div>
    </article>
  );
}

export default Testimonials;
