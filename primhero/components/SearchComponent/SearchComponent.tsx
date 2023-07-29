"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import box from "../../assets/box/box.svg";
import Image from "next/image";
import { SearchResult } from "@component/types/SearchResult";
import ResultsComponent from "./ResultsComponent";

function SearchComponent() {
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const fetchSearchResults = () => {
    axios
      .get<SearchResult[]>("TU_ENDPOINT_DE_BUSQUEDA")
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los resultados de búsqueda:", error);
      });
  };

  useEffect(() => {
    // If showSearchResults is true, fetch the search results
    if (showSearchResults) {
      fetchSearchResults();
    }
  }, [showSearchResults]);

  const handleSearch = () => {
    // When the "Buscar" button is clicked, show the search results
    setShowSearchResults(true);
  };

  return (
    <div className="overflow-x-hidden font-sans">
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
      <ResultsComponent />
    </div>
  );
}

export default SearchComponent;
