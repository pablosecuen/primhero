import React from "react";

function Tutorials() {
  return (
    <>
      {" "}
      <h3 className="bg-black p-8 text-2xl self-center">TUTORIALES</h3>
      <span className="p-8 text-md text-center">
        ¿Necesitas ayuda? Acá puede estar la solución{" "}
      </span>
      <div>
        <div className="flex flex-col justify-center items-center gap-1">
          {" "}
          <article className="w-48 h-48 rounded-xl bg-white text-black text-center  ">
            {" "}
            video
          </article>
          <span>¿Dónde está mi envío?</span> <span className="text-secondary  pb-8">Vídeo</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          {" "}
          <article className="w-48 h-48 rounded-xl bg-white text-black text-center  ">
            {" "}
            video
          </article>
          <span>¿Dónde está mi envío?</span> <span className="text-secondary pb-8">Vídeo</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
          {" "}
          <article className="w-48 h-48 rounded-xl bg-white text-black text-center  ">
            {" "}
            video
          </article>
          <span>¿Dónde está mi envío?</span> <span className="text-secondary  pb-8">Vídeo</span>
        </div>
        <div className="w-full flex justify-center items-center align-middle">
          <button className="border-2 text-secondary py-1 px-10 border-secondary rounded-md bg-black place-self-center item">
            Ver más tutoriales
          </button>
        </div>
      </div>
    </>
  );
}

export default Tutorials;
