import Image from "next/image";
import React from "react";
import { clientsLogos } from "@component/utils/data";

function Clients() {
  return (
    <>
      {" "}
      {clientsLogos.map((client, index) => (
        <Image
          key={index}
          src={client}
          alt={`clientLogo-${index}`}
          width={150}
          height={150}
          className="self-center py-10"
        />
      ))}
    </>
  );
}

export default Clients;
