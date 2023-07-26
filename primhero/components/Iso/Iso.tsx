import Image from "next/image";
import React from "react";
import iso from "../../assets/iso/iso.svg";

function Iso() {
  return (
    <>
      {" "}
      <span className="w-1/2 md:w-1/3 md:text-lg">
        Desde 2021 Primhero es una empresa con certificación ISO 9001.
      </span>
      <Image src={iso} alt="us" width={80} height={80} className="md:w-1/12 " />
      <span className="w-1/2  md:w-1/3 md:text-lg">
        La calidad de nuestros servicios es auditada periódicamente. Nuestro negocio es que su carga
        llegue a tiempo.
      </span>
    </>
  );
}

export default Iso;
