'use client'
import React, { useState, useEffect } from 'react'
import styles from './slider.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Slider() {
  const [data, setData] = useState([])
  const [num, setNum] = useState(0)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3003/contents/?category=review&_limit=3`,
      )
      const json = await response.json()
      setData(json)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const handlePrevSlide = () => {
    setNum((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1))
  }

  const handleNextSlide = () => {
    setNum((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1))
  }

  return (
    <div className={styles.slider}>
      <button className={styles.prevButton} onClick={handlePrevSlide}>
        <Image src="/nl.png" width={55} height={55} alt="Arrow left icon" />
      </button>
      <Link
        key={data[num]?.id}
        href={{
          pathname: `/blog/[id]`,
        }}
        as={`/blog/${data[num]?.id}`}
        className={styles.slideLink}
      >
        <div className={styles.slide}>
          <Image
            src={data[num]?.image}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            alt="image"
          />
          <p className={styles.slideText}>{data[num]?.title}</p>
        </div>
      </Link>
      <button className={styles.nextButton} onClick={handleNextSlide}>
        <Image src="/nr.png" width={55} height={55} alt="Arrow right icon" />
      </button>
    </div>
  )
}
