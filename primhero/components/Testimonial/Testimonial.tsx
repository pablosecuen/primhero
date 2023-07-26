import Image from "next/image";
import React from "react";
import star from "../../assets/star/star.svg";
import truck from "../../assets/trucks/trucks.svg";
import Testimonials from "@component/components/TestimonialsCards/TestimonialsCards";

function Testimonial() {
  return (
    <div className="sm:flex py-10">
      {" "}
      <Image
        src={truck}
        alt="trucks"
        height={150}
        width={150}
        className="m-auto w-full h-full p-10  sm:w-1/2 lg:pr-48"
      />
      <div>
        <div className="p-4 flex flex-col   lg:h-full gap-4 pt-8">
          <h3 className="text-black font-extrabold lg:pt-10 md:pl-10 lg:text-2xl">
            ES IMPORTANTE PARA VOS, <br />
            PARA <span className="text-secondary ">NOSOTROS TAMBIÉN</span>
          </h3>
          <div className="flex flex-start gap-1  md:pl-10">
            <Image src={star} alt="star" width={25} height={25} />
            <Image src={star} alt="star" width={25} height={25} />
            <Image src={star} alt="star" width={25} height={25} />
            <Image src={star} alt="star" width={25} height={25} />
            <Image src={star} alt="star" width={25} height={25} />
          </div>
          <span className=" md:pl-10 text-black tracking-tighter p-2">
            La calidad de nuestros servicios es auditada periódicamente. Nuestro negocio es que su
            carga llegue a tiempo.
          </span>

          <Testimonials />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
