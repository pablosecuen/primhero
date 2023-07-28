import React from "react";

function Landing() {
  return (
    <div className="w-screen h-screen text-xl -mb-28 sm:-mb-28 lg:-mb-28 md:-mb-28 xl:-mb-4 flex flex-col  justify-center items-start pl-12 md:pl-48 bg-image1 bg-cover bg-clip-border bg-no-repeat bg-center">
      {" "}
      <h2 className="text-xl font-extrabold pt-4 drop-shadow-md font-condensed lg:text-4xl lg:w-[700px]">
        <p>
          LLEGAMOS LEJOS, PORQUE <br />
          ENTENDEMOS EL VALOR DE <br />
          ESTAR CERCA
        </p>
        <p className="text-secondary text-md  font-medium md:pt-8 pt-4 font-sans  lg:text-xl lg:w-auto">
          Sea una encomienda o un conteneder, movelo <br /> desde la palma de tu mano
        </p>
      </h2>
      <div className="w-3/4 sm:w-80 md:pt-8 pt-4">
        <label htmlFor="seguimiento " className="text-white font-sans">
          ¿Realizaste un envío?
        </label>
        <div className="rounded-md bg-secondary w-auto  flex h-10 mt-1">
          <input
            id="seguimiento"
            placeholder=" Buscar nro. de seguimiento"
            className="text-black text-xs w-3/4 pl-4 placeholder:text-black"
          ></input>
          <button className="w-auto  m-auto cursor-pointer font-sans">Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
