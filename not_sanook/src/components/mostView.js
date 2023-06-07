// import { Box, div, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import mvImage1 from "../../public/mv_image_1.png";
import mvImage2 from "../../public/mv_image_2.png";
import mvImage3 from "../../public/mv_image_3.png";

export default function MostViews() {
  return (
    <div>
      <h>Most viewed</h>
      <div className={styles.mvCard}>
        <div>
          <Image
            className={styles.mvImage}
            src={mvImage1}
            alt="Most Viewed News image"
          />
          <h>121,186 Views</h>
        </div>
        <h>
          เครดิตบูโร ไม่ใช่แบล็กลิสต์ ความเข้าใจผิดของคนอยากมีรถ
        </h>
      </div>
      <div className={styles.mvCard}>
        <div>
          <Image
            className={styles.mvImage}
            src={mvImage2}
            alt="Most Viewed News image"
          />
          <h>39,234 Views</h>
        </div>
        <h>
          แนะนำ 6 รถไฮบริดมือสองค่าตัวถูกกว่าอีโคคาร์ที่หาได้ในปี 2566 นี้
        </h>
      </div>
      <div className={styles.mvCard}>
        <div>
          <Image
            className={styles.mvImage}
            src={mvImage3}
            alt="Most Viewed News image"
          />
          <h>31,780 Views</h>
        </div>
        <h>
          Baojun YEP EV มาพร้อม "ตู้เย็น" เอาใจสายแคมปิ้ง ราคาเริ่มไม่ถึง 4
          แสนบาท
        </h>
      </div>
    </div>
  );
};
