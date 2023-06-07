import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch('http://localhost:3003/contents/2e57f096-2a7c-44ae-b01c-84c612af1fae');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
 

const Blog = async ({ params }) => {
  const data = await getData(params);
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
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