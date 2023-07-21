import React from "react";

function Landing() {
  return (
    <>
      {" "}
      <h2 className="text-lg font-extrabold pt-4 drop-shadow-md font-condensed">
        <p>
          LLEGAMOS LEJOS, PORQUE <br />
          ENTENDEMOS EL VALOR DE <br />
          ESTAR CERCA
        </p>
        <p className="text-secondary text-xs  font-medium pt-8 font-sans">
          Sea una encomienda o un conteneder, movelo <br /> desde la palma de tu mano
        </p>
      </h2>
      <div className="w-3/4 sm:w-80 pt-8">
        <label htmlFor="seguimiento " className="text-black font-sans">
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
    </>
  );
}

export default Landing;
