"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./relate.module.css";
import RightArrow from "../../../public/right_arrow_icon.png";
import Link from "next/link";

export default function Relate({ channel, category, id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (category || channel || id) {
      fetchData();
    }
  }, [category, channel, id]);

  const fetchData = async () => {
    let url = "http://localhost:3003/contents/?_limit=3&";
    if (category) url += `category=${category}&`;
    if (channel) url += `channel=${channel}&`;
    if (id) url += `id_ne=${id}`;

    const response = await fetch(url);
    const data = await response.json();

    setData(data);
  };

  return (
    <div>
      <div className={styles.relate}>
        <div className={styles.relateTopic}>
          <h2>ข่าวที่เกี่ยวข้อง</h2>
          <Image
            className={styles.customIcon}
            src={RightArrow}
            alt="Arrow right icon"
          />
        </div>
        <div className={styles.divider} />
        <div className={styles.grid}>
          {data.map((item) => (
            <Link
              className={styles.relateCard}
              key={item.id}
              href={{
                pathname: `/blog/[id]`,
              }}
              as={`/blog/${item.id}`}
            >
              <Image
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                alt="Related News image"
              />
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
