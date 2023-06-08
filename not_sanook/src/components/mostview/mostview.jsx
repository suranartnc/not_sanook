// import { Box, div, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./mostview.module.css";
import mvImage1 from "../../../public/mv_image_1.png";
import mvImage2 from "../../../public/mv_image_2.png";
import mvImage3 from "../../../public/mv_image_3.png";

import { useEffect, useState } from "react";

const MostViews = ({ category, id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3003/contents/?category=${category}&_limit=3&_order=desc&id_ne=${id}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={styles.mostview}>
      <h3>Most viewed</h3>
      {data.map((item) => (
        <div className={styles.mvCard}>
          <div className={styles.stack}>
            <Image
              src={item.image}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
              alt="Most Viewed News image"
            />
            <div className={styles.view}>
              <p>{item.views} views</p>
            </div>
          </div>
          <h5 className={styles.mvTitle}>{item.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default MostViews;
