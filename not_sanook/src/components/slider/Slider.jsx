"use client";
import React from 'react';
import styles from './slider.module.css';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from 'react';


const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('http://localhost:3003/contents/?category=review&_limit=3'); // replace with your API endpoint
        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error('Error fetching slider data:', error);
      }
    }

    getData();
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  if (slides.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.slider}>
      <button className={styles.prevButton} onClick={handlePrevSlide}>
        <Image src="/nl.png" width={55} height={55} alt="left"/>
      </button>
        <Link href={slides[currentSlide].id} className={styles.slideLink}>
            <div className={styles.slide}>
                <img src={slides[currentSlide].image} alt={slides[currentSlide].title} />
                <p className={styles.slideText}>{slides[currentSlide].title}</p>
            
            </div>
        </Link>
      <button className={styles.nextButton} onClick={handleNextSlide}>
        <Image src="/nr.png" width={55} height={55} alt="right"/>
      </button>
      
    </div>
  );
};

export default Slider;