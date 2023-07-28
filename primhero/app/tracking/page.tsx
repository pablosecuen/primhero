"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import box from "../../assets/box/box.svg";
import Image from "next/image";
import { SearchResult } from "@component/types/SearchResult";
import { Package } from "@component/types/Package";

const examplePackage: Package = {
  id: 1,
  trackingNumber: "ABC123456789",
  sender: "John Doe",
  recipient: "Jane Smith",
  status: "In Transit",
  deliveryDate: "2023-07-28",
  weight: 1.5,
  dimensions: {
    length: 10,
    width: 5,
    height: 8,
  },
  origin: "New York, USA",
  destination: "Los Angeles, USA",
  estimatedDelivery: "2023-08-05",
  notes: "Fragile, Handle with care",
};

function Tracking() {
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (showSearchResults) {
      // Hacer la llamada a la API para obtener los resultados de búsqueda
      axios
        .get<SearchResult[]>("TU_ENDPOINT_DE_BUSQUEDA")
        .then((response) => {
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error("Error al obtener los resultados de búsqueda:", error);
        });
    }
  }, [showSearchResults]);

  const handleSearch = () => {
    // Al hacer clic en el botón "Buscar", mostrar los resultados de búsqueda
    setShowSearchResults(true);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="bg-image2 h-screen w-full bg-cover bg-center text-center flex flex-col justify-center align-middle items-center gap-8">
        <h3 className="text-white text-center text-3xl  tracking-tight font-extrabold">TRACKING</h3>
        <h4 className="text-secondary font-bold">Realiza un seguimiento de tu envío</h4>
        <article className="w-11/12 sm:w-1/3 md:w-1/2 lg:w-1/4    bg-white drop-shadow-3xl rounded-xl py-8 px-4 shadow-2xl flex justify-around items-center">
          <Image src={box} alt="box" width={50} height={50} className="" />
          <div className="flex border border-black/30 rounded-xl overflow-hidden h-12 w-full justify-between">
            <label htmlFor="tracking" className="ml-2" hidden>
              Buscar nro. de seguimiento
            </label>
            <input
              className="pl-2 focus:outline-none w-full text-black"
              type="text"
              id="tracking"
              placeholder="Buscar nro. de seguimiento"
            />
            <button
              className=" px-8 cursor-pointer font-sans bg-secondary h-full "
              onClick={handleSearch} // Manejador del evento para hacer la búsqueda
            >
              Buscar
            </button>
          </div>
        </article>
      </div>
      <div className="flex flex-col sm:flex-row  w-screen h-full">
        <div className="sm:w-1/2 w-full">
          {" "}
          <section className="w-full h-full bg-white flex p-20">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-secondary">
                  <svg
                    className="w-2.5 h-2.5 text-secondary dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-black">
                  Titulo{" "}
                  <span className="bg-blue-100 text-secondary text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-secondary dark:text-black ml-3">
                    Último
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  date January 13th, 2022
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Aquí va el detalle o la descripcion de las demoras aproximadas
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    className="w-3.5 h-3.5 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="yellow"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                  </svg>
                  Descargar comprobante
                </a>
              </li>
              <li className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-secondary">
                  <svg
                    className="w-2.5 h-2.5 text-secondary dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-900">
                  Título
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  fecha on December 7th, 2021
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Aquí va el detalle o la descripcion de las demoras aproximadas
                </p>
              </li>
              <li className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-secondary">
                  <svg
                    className="w-2.5 h-2.5 text-secondary dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-900">
                  Titulo
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  fecha on December 2nd, 2021
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Aquí va el detalle o la descripcion de las demoras aproximadas
                </p>
              </li>
            </ol>
          </section>
        </div>
        <div className="sm:w-1/2 w-full h-96 flex justify-center items-center">
          aca va la informacion de los remitentes y los destinatarios
        </div>
      </div>
    </div>
  );
}

export default Tracking;
