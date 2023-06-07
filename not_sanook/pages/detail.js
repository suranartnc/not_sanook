import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";
import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Image from "next/image";
import LinkIcon from "@mui/icons-material/Link";
import LineIcon from "../assets/images/line_icon.png";
import FBIcon from "../assets/images/fb_icon.png";
import TWIcon from "../assets/images/tw_icon.png";
import News1 from "../assets/images/detail_image_1.png";
import News2 from "../assets/images/detail_image_2.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import relateImage1 from "../assets/images/Related_image_1.png";
import relateImage2 from "../assets/images/Related_image_2.png";
import relateImage3 from "../assets/images/Related_image_3.png";
import MostViews from "../components/mostView";

export default function Detail() {
  return (
    <Box className={styles.container}>
      <Box className={styles.boxLeft}>
        <Typography className={styles.textDetailTopic}>
          ทางด่วนฟรี! ผ่านฉลุย 3 สายทาง รวม 60 ด่าน รับวันหยุดราชการ 3 มิ.ย. 66
          นี้
        </Typography>
        <Stack className={styles.moreOption} direction="row">
          <AccessTimeIcon sx={{ padding: "0 0.3rem" }} />
          <Typography className={styles.textMoreOption}>
            01 มิ.ย. 66 (16:36 น.)
          </Typography>
          <Divider
            sx={{
              bgcolor: "#9E9E9E",
              borderRightWidth: "2px",
              margin: "0 0.5rem",
            }}
            orientation="vertical"
            flexItem
          />
          <Typography className={styles.textMoreOption}>
            ความคิดเห็น 1
          </Typography>
          <Divider
            sx={{
              bgcolor: "#9E9E9E",
              borderRightWidth: "2px",
              margin: "0 0.5rem",
            }}
            orientation="vertical"
            flexItem
          />
          <Typography className={styles.textMoreOption}>แชร์</Typography>
          <Image className={styles.customIcon} src={LineIcon} alt="Line icon" />
          <Image
            className={styles.customIcon}
            src={FBIcon}
            alt="Facebook icon"
          />
          <Image
            className={styles.customIcon}
            src={TWIcon}
            alt="Twitter icon"
          />
          <Box>
            <Stack className={styles.copyLink} direction={"row"}>
              <LinkIcon sx={{ fontSize: 14, marginRight: "0.3rem" }} />
              <Typography sx={{ fontSize: "0.8rem", fontWeight: "200" }}>
                คัดลอกลิงก์
              </Typography>
            </Stack>
          </Box>
        </Stack>
        <Image className={styles.detailImage} src={News1} alt="News image" />
        <Typography className={styles.textD1}>
          การทางพิเศษแห่งประเทศไทยประกาศยกเว้นเก็บค่าผ่านทาง 3 สายทาง
          รวมทั้งสิ้น 60 ด่าน ในวันหยุดราชการวันที่ 3 มิถุนายน 2566 นี้
        </Typography>
        <Typography className={styles.textD2}>
          การทางพิเศษแห่งประเทศไทย (กทพ.) ยกเว้นค่าผ่านทางของการทางพิเศษ 3
          สายทาง จำนวน 60 ด่าน ในวันเสาร์ที่ 3 มิถุนายน 2566 ตั้งแต่เวลา 00.01
          น. ถึง 24.00 น. จำนวน 1 วัน เนื่องในวันเฉลิมพระชนมพรรษาสมเด็จพระราชินี
          และวันวิสาขบูชา ประกอบด้วย
        </Typography>

        <List
          sx={{
            listStyleType: "disc",
            listStylePosition: "inside",
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            ทางพิเศษเฉลิมมหานคร จำนวน 19 ด่าน
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            ทางพิเศษศรีรัช จำนวน 31 ด่าน
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            ทางพิเศษอุดรรัถยา จำนวน 10 ด่าน
          </ListItem>
        </List>
        <Image className={styles.detailImage} src={News2} alt="News image" />
        <Typography  component="span" className={styles.textD2}>
        การยกเว้นค่าผ่านทางในวันหยุดราชการประจำปีตามประกาศสำนักนายกรัฐมนตรี
          เป็นไปตามที่ กทพ. บริษัท ทางด่วนและรถไฟฟ้ากรุงเทพ จำกัด (มหาชน) (BEM)
          และบริษัททางด่วน กรุงเทพเหนือจำกัด (NECL)
          ร่วมปฏิบัติตามเงื่อนไขสัญญาสัมปทานโครงการ ระบบทางด่วนขั้นที่ 2
          (ทางพิเศษศรีรัชรวมถึงส่วน D)
          และสัญญาโครงการทางด่วนสายบางปะอิน-ปากเกร็ด (ทางพิเศษ อุดรรัถยา)
          ฉบับแก้ไขใหม่
          เพื่อเป็นการอำนวยความสะดวกในการเดินทางของประชาชนในวันหยุด
        </Typography>
        <Typography className={styles.textD1}>
          ประชาชนผู้ใช้ทางสามารถสอบถามรายละเอียดได้ที่ EXAT Call Center โทร 1543
        </Typography>
        <Box>
          <Stack className={styles.subTopic} direction="row">
            <Typography>ข่าวที่เกี่ยวข้อง</Typography>
            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
          </Stack>
          <Divider />
          <Stack className={styles.grid} direction="row">
            <Box className={styles.relateCard}>
              <Image
                className={styles.relateImage}
                src={relateImage1}
                alt="Related News image"
              />
              <Typography>
                กทพ. ยกเว้นค่าทางด่วน 3 เส้นทางรับวันหยุด 3 มิถุนายน 64 นี้
              </Typography>
            </Box>
            <Box className={styles.relateCard}>
              <Image
                className={styles.relateImage}
                src={relateImage2}
                alt="Related News image"
              />
              <Typography>
                ข่าวดี! ทางด่วนฟรี 3 วัน รับวันหยุดราชการเดือน พฤษภาคม 65 นี้
              </Typography>
            </Box>
            <Box className={styles.relateCard}>
              <Image
                className={styles.relateImage}
                src={relateImage3}
                alt="Related News image"
              />
              <Typography>
                ทางด่วนฟรี! กทพ. เว้นค่าผ่านทาง 3 เส้นทางรับ วันมาฆบูชา 6
                มีนาคมนี้
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box className={styles.boxRight}>
        <MostViews />
      </Box>
    </Box>
  );
}
