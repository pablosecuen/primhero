import React from "react";
import us from "../../assets/us/IMG_1700.svg";
import Image from "next/image";

function Us() {
  return (
    <>
      <article className="flex flex-col md:flex-row p-4 xl:px-48">
        <div className="sm:flex sm:flex-col md:w-1/2 md:justify-evenly  align-middle md:h-[500px] md:text-xl ">
          <h3 className="font-extrabold text-3xl tracking-tighter pb-8 md:pb-4 text-black ">
            NOSOTROS
          </h3>
          <span className=" text-black tracking-tighter leading-5 sm:leading-7 ">
            Somos una empresa familiar liderada y fundada por Hernan y Romina, precursores del
            nombre “HERO”. Una empresa que desde hace 8 años ha crecido de forma sostenida. Honrar
            cada día el trabajo y la posibilidad que nos brindan nuestros clientes, es una
            oportunidad de crecimiento para nuestros colaboradores. Que, de sangre o no, son familia
            y eso nos llena de orgullo. Más de 8 años de trabajo ininterrumpido nos permitió crecer
            en volumenes de clientes, operaciones y sucursales. Día a día las 24hs estamos en
            movimiento. Decididos a ser una oferta sólida.
          </span>
          <h4 className="font-bold text-2xl py-8  md:pt-4 tracking-tighter pb-4 text-secondary">
            Decididos a llegar Primhero
          </h4>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:items-center md:align-middle">
          <Image
            src={us}
            alt="us"
            width={300}
            height={500}
            className="self-center py-4 lg:w-[400px]"
          />
        </div>
      </article>
    </>
  );
}

export default Us;
