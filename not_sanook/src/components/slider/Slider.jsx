"use client";
import styles from "./slider.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect,useState } from "react";

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
     setCurrentSlide( (prevSlide) =>
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
        <Image src="/nl.png" width={55} height={55} alt="Arrow left icon" />
      </button>
      <Link
        key={data[currentSlide].id}
        href={{
          pathname: `/blog/[id]`,
        }}
        as={`/blog/${data[currentSlide].id}`}
        className={styles.slideLink}
      >
        <div className={styles.slide}>
          <Image
            src={data[currentSlide].image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            alt="image"
          />
          <p className={styles.slideText}>{data[currentSlide].title}</p>
        </div>
      </Link>
      <button className={styles.nextButton} onClick={handleNextSlide}>
        <Image src="/nr.png" width={55} height={55} alt="Arrow right icon" />
      </button>
    </div>
  );
};

export default Slider;
