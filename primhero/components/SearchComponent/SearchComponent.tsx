"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import box from "../../assets/box/box.svg";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import ResultsComponent from "./ResultsComponent";
import { SearchResult } from "@component/types/SearchResult";
import { useRouter, useSearchParams } from "next/navigation";
function SearchComponent() {
  const router = useRouter();
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
  const [trackingNumber, setTrackingNumber] = useState<number | null>(null);
  const [searchParams] = useSearchParams();

  const fetchSearchResults = (numeroSeguimiento: number) => {
    const endpoint = `https://primhero.com.ar/api/tracking?nro_seguimiento=${numeroSeguimiento}`;
    axios
      .get(endpoint)
      .then((response: any) => {
        setSearchResults(response.data);
        toast.success("Resultados de búsqueda obtenidos correctamente");
      })
      .catch((error: Error) => {
        toast.error("Error al obtener los resultados de búsqueda: " + error.message);
      });
  };

  useEffect(() => {
    if (showSearchResults && trackingNumber !== null) {
      fetchSearchResults(trackingNumber);
    }
  }, [showSearchResults, trackingNumber]);

  useEffect(() => {
    if (searchParams) {
      const params = Object.fromEntries(searchParams.entries()) as Record<string, string>;
      const numeroSeguimiento = searchParams?.[1];

      if (numeroSeguimiento !== undefined && numeroSeguimiento !== null) {
        const parsedNumeroSeguimiento = parseInt(numeroSeguimiento, 10);

        if (!isNaN(parsedNumeroSeguimiento)) {
          setShowSearchResults(true);
          setTrackingNumber(parsedNumeroSeguimiento);
          fetchSearchResults(parsedNumeroSeguimiento);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = () => {
    const trackingInput = document.getElementById("tracking") as HTMLInputElement;
    const numeroSeguimiento = parseInt(trackingInput.value);

    if (!isNaN(numeroSeguimiento)) {
      setShowSearchResults(true);
      setTrackingNumber(numeroSeguimiento);
      fetchSearchResults(numeroSeguimiento);
    } else {
      toast.error("Por favor ingresa un número de seguimiento válido");
    }
  };

  return (
    <div className="overflow-x-hidden font-sans">
      <Toaster position="top-center" richColors />
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
              className=" px-8 cursor-pointer font-sans bg-secondary h-full hover:bg-yellow-500 transition duration-300 hover:brightness-110"
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
        </article>
      </div>
      <div
        className={`opacity-0 transition duration-500 ease-in-out overflow-hidden ${
          searchResults ? "opacity-100 h-full" : " h-0"
        }`}
      >
        {searchResults && <ResultsComponent searchResults={searchResults} />}
      </div>
    </div>
  );
}

export default SearchComponent;
