"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { slider } from "@component/utils/data";
import styles from "./client.module.css";
import Link from "next/link";

const Clients = () => {
  const [currentLogo, setCurrentLogo] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  const animateSlider = () => {
    setCurrentLogo((prevLogo) => (prevLogo + 1) % clonedSlider.length);

    if (currentLogo === clonedSlider.length - 1) {
      sliderRef.current?.addEventListener("transitionend", handleTransitionEnd);
    } else {
      animationRef.current = requestAnimationFrame(animateSlider);
    }
  };

  const handleTransitionEnd = () => {
    sliderRef.current?.removeEventListener("transitionend", handleTransitionEnd);
    setCurrentLogo(0);
    animationRef.current = requestAnimationFrame(animateSlider);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animateSlider);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const sliderContainer = sliderRef.current;
    if (sliderContainer) {
      sliderContainer.style.transform = `translate3d(-${currentLogo * 25}%, 0, 0)`;
    }
  }, [currentLogo]);

  const clonedSlider = [...slider, ...slider, ...slider, ...slider, ...slider]; // Clone and concatenate the slider array

  return (
    <article className="relative flex flex-col md:flex-row justify-center items-center sm:h-64 md:h-64 w-full overflow-hidden py-6 ">
      <div ref={sliderRef} className={`${styles.sliderContainer} absolute flex`}>
        {clonedSlider.map((s, index) => (
          <div
            key={index}
            className="w-full gap-10 mx-20 flex  justify-center items-center align-middle"
          >
            <div className="w-80 h-48  flex gap-10  justify-center items-center align-middle">
              <Link href={s?.url} className=" flex justify-center">
                <Image
                  src={s.icon}
                  alt={s.tittle}
                  title={s.tittle}
                  className="md:w-48 sm:w-32 hover:cursor-pointer"
                  // md:pt-10 sm:pb-12 md:pb-0
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default Clients;
