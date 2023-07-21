import React from "react";

import testimonialImage from "../../assets/testimonialImage/testimonialImage.svg";
import Image from "next/image";
function Testimonials() {
  return (
    <article className=" flex flex-col m-auto  py-10 pb-20 ">
      <div className="w-11/12 shadow-xl border border-black/10 mx-auto rounded-lg flex tracking-tighter p-8 gap-4">
        <Image src={testimonialImage} alt="star" width={100} height={100} className="m-auto" />
        <div className="flex flex-col  text-black tracking-tighter">
          <span className="font-bold text-secondary">Marcelo Torres</span>
          <span className="text-sm">
            La calidad de nuestros servicios es
            <br /> auditada periódicamente. Nuestro negocio
            <br /> es que su carga llegue a tiempo
          </span>
        </div>
      </div>
    </article>
  );
}

export default Testimonials;
