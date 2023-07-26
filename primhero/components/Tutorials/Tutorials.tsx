import React from "react";

function Tutorials() {
  return (
    <>
      {" "}
      <h3 className="bg-black p-8 text-2xl lg:text-4xl font-bold self-center">TUTORIALES</h3>
      <span className="p-8 text-md text-center">
        ¿Necesitas ayuda? Acá puede estar la solución{" "}
      </span>
      <div className="flex-col md:flex-row flex md:justify-evenly md:w-full  ">
        <div className="flex flex-col justify-center items-center  gap-1 ">
          {" "}
          <article className="w-48 h-48 rounded-xl bg-white text-black text-center  ">
            {" "}
            video
          </article>
          <span>¿Dónde está mi envío?</span> <span className="text-secondary  pb-8">Vídeo</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 ">
          {" "}
          <article className="w-48 h-48 rounded-xl bg-white text-black text-center  ">
            {" "}
            video
          </article>
          <span>¿Dónde está mi envío?</span> <span className="text-secondary pb-8">Vídeo</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 ">
          {" "}
          <article className="w-48 h-48 rounded-xl bg-white text-black text-center  ">
            {" "}
            video
          </article>
          <span>¿Dónde está mi envío?</span> <span className="text-secondary  pb-8">Vídeo</span>
        </div>
      </div>
      <button className="border-2 hover:ring-2 ring-secondary duration-500 transition text-secondary py-1 px-10 border-secondary rounded-md bg-black place-self-center item">
        Ver más tutoriales
      </button>
    </>
  );
}

export default Tutorials;
