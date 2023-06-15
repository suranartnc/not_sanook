"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./scoop.module.css";
import Image from "next/image";

export default function Scoop() {
  const [category, setCategory] = useState([]);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3003/contents/?category=scoop&_limit=5`
      );
      const json = await response.json();

      const firstCategory = json[0].category;
      const firstColumn = json.slice(0, 1);
      const secondColumn = json.slice(1, 5);

      setCategory(firstCategory);
      setFirst(firstColumn);
      setSecond(secondColumn);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Link
        key={category}
        href={{
          pathname: `/[category]`,
        }}
        as={`/${category}`}
        className={styles.title}
      >
        <div className={styles.category}>{category}</div>
        <Image
          src="/right.png"
          width={25}
          height={25}
          alt="Arrow right image"
        />
      </Link>
      <div className={styles.separator} />
      <div className={styles.categoryBox}>
        <div className={styles.topNews}>
          {first.map((item) => (
            <Link
              key={item.id}
              href={{
                pathname: `/blog/[id]`,
              }}
              as={`/blog/${item.id}`}
            >
              <Image
                src={item.image}
                className={styles.topImage}
                alt="News image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
              <h3 className={styles.topText}>{item.title}</h3>
            </Link>
          ))}
        </div>

        <div className={styles.moreNews}>
          {second.map((item) => (
            <Link
              key={item.id}
              className={styles.moreBox}
              href={{
                pathname: `/blog/[id]`,
              }}
              as={`/blog/${item.id}`}
            >
              <Image
                src={item.image}
                alt="News image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
              <h3 className={styles.moreText}>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
