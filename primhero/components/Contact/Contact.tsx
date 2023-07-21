"use client";
import { FormData } from "@component/types/FormData";
import React, { useState, ChangeEvent } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className="p-4 md:w-1/2 md:mx-auto">
      <div className="w-full flex gap-4">
        <div className="relative mb-4">
          <label
            htmlFor="name"
            className={`absolute left-3 top-4 text-xs font-bold text-gray-700 ${
              formData.name ? "opacity-0" : "opacity-100"
            } transition-opacity pointer-events-none`}
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onFocus={() => setFormData((prevData) => ({ ...prevData, name: "" }))}
            onBlur={() => {
              if (!formData.name) {
                setFormData((prevData) => ({ ...prevData, name: "Nombre" }));
              }
            }}
            className="w-full px-3 py-2 pl-3 mt-1 text-sm text-gray-900 placeholder-transparent border rounded-md focus:outline-none focus:ring focus:border-secondary"
            placeholder=""
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="lastName"
            className={`absolute left-3 top-4 text-xs font-bold text-gray-700 ${
              formData.name ? "opacity-0" : "opacity-100"
            } transition-opacity pointer-events-none`}
          >
            apellido
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            onFocus={() => setFormData((prevData) => ({ ...prevData, lastName: "" }))}
            onBlur={() => {
              if (!formData.lastName) {
                setFormData((prevData) => ({ ...prevData, lastName: "Apellido" }));
              }
            }}
            className="w-full px-3 py-2 pl-3 mt-1 text-sm text-gray-900 placeholder-transparent border rounded-md focus:outline-none focus:ring focus:border-secondary"
            placeholder=""
          />
        </div>
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="mail"
          className={`absolute left-3 top-4 text-xs font-bold text-gray-700 ${
            formData.email ? "opacity-0" : "opacity-100"
          } transition-opacity pointer-events-none`}
        >
          E-mail
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onFocus={() => setFormData((prevData) => ({ ...prevData, email: "" }))}
          onBlur={() => {
            if (!formData.email) {
              setFormData((prevData) => ({ ...prevData, email: "Nombre" }));
            }
          }}
          className="w-full px-3 py-2 pl-3 mt-1 text-sm text-gray-900 placeholder-transparent border rounded-md focus:outline-none focus:ring focus:border-secondary"
          placeholder=""
        />
      </div>
      <div className="relative mb-4">
        <label
          htmlFor="name"
          className={`absolute left-3 top-4 text-xs font-bold text-gray-700 ${
            formData.name ? "opacity-0" : "opacity-100"
          } transition-opacity pointer-events-none`}
        >
          Teléfono
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          onFocus={() => setFormData((prevData) => ({ ...prevData, phone: "" }))}
          onBlur={() => {
            if (!formData.phone) {
              setFormData((prevData) => ({ ...prevData, phone: "Teléfono" }));
            }
          }}
          className="w-full px-3 py-2 pl-3 mt-1 text-sm text-gray-900 placeholder-transparent border rounded-md focus:outline-none focus:ring focus:border-secondary"
          placeholder=""
        />
      </div>

      <div className="relative mb-4">
        <label
          htmlFor="message"
          className={`absolute  left-3 top-4 text-sm font-bold text-gray-700 ${
            formData.message ? "opacity-0" : "opacity-100"
          } transition-opacity pointer-events-none`}
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          onFocus={() => setFormData((prevData) => ({ ...prevData, message: "" }))}
          onBlur={() => {
            if (!formData.message) {
              setFormData((prevData) => ({ ...prevData, message: "Escribe tu mensaje aquí" }));
            }
          }}
          className="w-full px-3 py-2 pl-3 mt-1 text-sm text-gray-900 placeholder-transparent border rounded-md resize-none focus:outline-none focus:ring focus:border-secondary"
          placeholder=""
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 text-sm font-bold text-white bg-secondary rounded-md hover:border-2 hover:border-black hover:transition hover:duration-500 focus:outline-none focus:ring focus:border-yellow-600"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
