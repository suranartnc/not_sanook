import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import mvImage1 from "../assets/images/mv_image_1.png";
import mvImage2 from "../assets/images/mv_image_2.png";
import mvImage3 from "../assets/images/mv_image_3.png";

export default function MostViews() {
  return (
    <div>
      <Typography>Most viewed</Typography>
      <Box className={styles.mvCard}>
        <Stack>
          <Image
            className={styles.mvImage}
            src={mvImage1}
            alt="Most Viewed News image"
          />
          <Typography>121,186 Views</Typography>
        </Stack>
        <Typography>
          เครดิตบูโร ไม่ใช่แบล็กลิสต์ ความเข้าใจผิดของคนอยากมีรถ
        </Typography>
      </Box>
      <Box className={styles.mvCard}>
        <Stack>
          <Image
            className={styles.mvImage}
            src={mvImage2}
            alt="Most Viewed News image"
          />
          <Typography>39,234 Views</Typography>
        </Stack>
        <Typography>
          แนะนำ 6 รถไฮบริดมือสองค่าตัวถูกกว่าอีโคคาร์ที่หาได้ในปี 2566 นี้
        </Typography>
      </Box>
      <Box className={styles.mvCard}>
        <Stack>
          <Image
            className={styles.mvImage}
            src={mvImage3}
            alt="Most Viewed News image"
          />
          <Typography>31,780 Views</Typography>
        </Stack>
        <Typography>
          Baojun YEP EV มาพร้อม "ตู้เย็น" เอาใจสายแคมปิ้ง ราคาเริ่มไม่ถึง 4
          แสนบาท
        </Typography>
      </Box>
    </div>
  );
};
