import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3003/contents/");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async ({}) => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <Link
            key={item.id}
            href={{
              pathname: `blog/[id]`,
            }}
            as={`blog/${item.id}`}
            className={styles.container}
          >
            <div className={styles.imageContainer}>
              <Image
                src={item.image}
                alt=""
                width={555}
                height={333}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
