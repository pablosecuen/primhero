import Link from "next/link";
import React from "react";
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

function ResultsComponent() {
  return (
    <div className="flex flex-col sm:flex-row   w-screen h-full">
      <div className=" w-full">
        {" "}
        <section className="w-full h-full bg-white flex p-20 md:pl-40">
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
              <Link
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
              </Link>
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
      <div className="p-10 md:pr-40 text-black w-full flex flex-col sm:flex-row justify-center bg-white items-center gap-2">
        <div className=" flex flex-col  text-gray-500 italic  justify-center items-start p-20  bg-white  h-96 sm:w-full sm:h-1/2 border-black/40 border border-dashed">
          <h5>
            Remitente: <strong>{examplePackage.sender}</strong>
          </h5>
          <span>
            Sucursal de despacho: <strong>{examplePackage.origin}</strong>
          </span>
          <span>
            Fecha de despacho: <strong>{examplePackage.deliveryDate}</strong>
          </span>
          <span>
            Peso: <strong>{examplePackage.weight}</strong>
          </span>
          <span>
            Dimensiones: alto:{" "}
            <strong>
              {examplePackage.dimensions.height} x ancho:
              {examplePackage.dimensions.width} x largo:{examplePackage.dimensions.length}
            </strong>
          </span>
        </div>
        <div className="flex flex-col text-gray-500 italic  justify-center items-start p-20  bg-white  h-full sm:w-full sm:h-1/2   border-black/40 border border-dashed">
          <h5>
            Destinatario: <strong>{examplePackage.recipient}</strong>
          </h5>
          <span>
            Sucursal de retiro: <strong>{examplePackage.destination}</strong>
          </span>
          <span>
            Fecha de retiro: <strong>{examplePackage.estimatedDelivery}</strong>
          </span>
          <span>
            status: <strong>{examplePackage.status}</strong>
          </span>
          <span>
            Notas: <strong>{examplePackage?.notes || "no hay notas"}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResultsComponent;
