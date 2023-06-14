import React from "react";
import Link from "next/link";
import styles from "./mostbar.module.css";
import Image from "next/image";

async function getData() {
  const response = await fetch(
    `http://localhost:3003/contents/?_sort=views&_order=desc&_limit=5`
  ); // replace with your API endpoint
  const data = await response.json();
  return data;
}

export default async function Mostbar() {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.most}>Most viewed</h1>
      <div className={styles.box}>
        <div className={styles.rowItem}>
          {data.map((item, index) => (
            <Link
              key={item.id}
              href={{
                pathname: `/blog/[id]`,
              }}
              as={`/blog/${item.id}`}
              className={styles.columnItem}
            >
              <h3 className={styles.number}>{index + 1}</h3>
              <div className={styles.cardItem}>
                <Image
                  src={item.image}
                  alt="image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                  className={styles.image}
                />
                <p className={styles.text}>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
