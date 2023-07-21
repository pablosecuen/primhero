import Image from "next/image";
import React from "react";
import star from "../../assets/star/star.svg";
import truck from "../../assets/trucks/trucks.svg";
import Testimonials from "@component/components/TestimonialsCards/TestimonialsCards";

function Testimonial() {
  return (
    <>
      {" "}
      <Image
        src={truck}
        alt="trucks"
        height={150}
        width={150}
        className="m-auto w-full h-full p-10 border"
      />
      <div className="p-4 flex flex-col gap-4">
        <h3 className="text-black font-extrabold">
          ES IMPORTANTE PARA VOS, <br />
          PARA <span className="text-secondary">NOSOTROS TAMBIÉN</span>
        </h3>
        <div className="flex flex-start gap-1">
          <Image src={star} alt="star" width={25} height={25} />
          <Image src={star} alt="star" width={25} height={25} />
          <Image src={star} alt="star" width={25} height={25} />
          <Image src={star} alt="star" width={25} height={25} />
          <Image src={star} alt="star" width={25} height={25} />
        </div>
        <div>
          <span className="text-black tracking-tighter">
            La calidad de nuestros servicios es auditada periódicamente.
 
          </span>

          <span className="text-black tracking-tighter">
            Nuestro negocio es que su carga llegue a tiempo.
          </span>
        </div>
      </div>
      <Testimonials />
    </>
  );
}

export default Testimonial;
