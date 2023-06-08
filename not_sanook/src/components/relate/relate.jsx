"use client";
import Image from "next/image";
import styles from "./relate.module.css";
import RightArrow from "../../../public/right_arrow_icon.png";

import { useEffect, useState } from "react";

const relateNews = ({ channel, category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3003/contents/?channel=${channel}&category=${category}&_limit=3`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div className={styles.relate}>
        <div className={styles.relateTopic}>
          <h2>ข่าวที่เกี่ยวข้อง</h2>
          <Image className={styles.customIcon} src={RightArrow} />
        </div>
        <div className={styles.divider} />
        <div className={styles.grid}>
          {data.map((item) => (
            <div className={styles.relateCard}>
              <Image
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                alt="Related News image"
              />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default relateNews;
