import Image from "next/image";
import React from "react";
import logo from "../../assets/logo/Logo.svg";
import { ModalProps } from "@component/types/ModalProps";

function Login({ onClose }: ModalProps) {
  return (
    <section className="bg-primary  dark:bg-gray-900 rounded-xl md:h-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full ">
        <a
          href="https://localhost:3000"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image className="mr-2 h-auto" src={logo} alt="logo" width={100} height={100} />
        </a>
        <div className="w-full bg-primary rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Ingresa con tu cuenta
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="nombre@compania.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="flex flex-col w-48">
                    <div className="text-sm ml-2">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                        Recuerdame
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-center font-medium text-secondary hover:underline dark:text-primary-500 pt-4 mx-auto "
                    >
                      Olvide mi contraseña
                    </a>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-secondary  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer "
              >
                Ingresa
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Aún no tienes una cuenta?{" "}
                <a
                  href="#"
                  className="font-medium text-secondary hover:underline dark:text-primary-500 "
                >
                  Registro
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div
        className="fixed -z-10 h-screen w-screen bg-black/20 top-0 left-0"
        onClick={onClose}
      ></div>
    </section>
  );
}

export default Login;
