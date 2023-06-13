"use client";
import styles from "./slider.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

async function getData() {
  const response = await fetch(
    "http://localhost:3003/contents/?category=review&_limit=3"
  ); // replace with your API endpoint
  const data = await response.json();
  return data;
}

const Slider = async () => {
  const [currentSlide, setCurrentSlide] = useState(0);
 const data = await getData();

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.length - 1 ? 0 : prevSlide + 1
    );
  };


  return (
    <div className={styles.slider}>
      <button className={styles.prevButton} onClick={handlePrevSlide}>
        <Image src="/nl.png" width={55} height={55} alt="left" />
      </button>
      <Link href={data[currentSlide].id} className={styles.slideLink}>
        <div className={styles.slide}>
          <img
            src={data[currentSlide].image}
            alt={data[currentSlide].title}
          />
          <p className={styles.slideText}>{data[currentSlide].title}</p>
        </div>
      </Link>
      <button className={styles.nextButton} onClick={handleNextSlide}>
        <Image src="/nr.png" width={55} height={55} alt="right" />
      </button>
    </div>
  );
};

export default Slider;
