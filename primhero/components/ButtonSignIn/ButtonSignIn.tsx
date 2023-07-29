"use client";
import React, { useState } from "react";
import button from "../../assets/exit/BotonExit.svg";
import Image from "next/image";
import Modal from "../ModalLogin/ModalLogin";

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
    <div className="w-24">
      {/* <Image src={button} alt="boton" width={100} height={100} onClick={handleButtonClick} />
      {isModalOpen && <Modal onClose={handleCloseModal} />} */}
    </div>
  );
}

export default ButtonSignIn;
