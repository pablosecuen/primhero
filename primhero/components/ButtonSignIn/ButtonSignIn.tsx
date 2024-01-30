"use client";
import React, { useState } from "react";
import button from "../../assets/exit/BotonExit.svg";
import Image from "next/image";
import Modal from "../ModalLogin/ModalLogin";
import Link from "next/link";

function ButtonSignIn() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log();

  return (
    <Link href="https://www.primhero.com.ar/admin/login">
      <div className="w-24 sm:block pr-2 md:pr-0">
        <Image
          src={button}
          alt="boton"
          width={150}
          height={150}
          /*  onClick={handleButtonClick} */
        />
        {/*  {isModalOpen && <Modal onClose={handleCloseModal} />} */}
      </div>
    </Link>
  );
}

export default ButtonSignIn;
