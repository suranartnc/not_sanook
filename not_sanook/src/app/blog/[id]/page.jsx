import Link from "next/link";
import React from "react";
import Image from "next/image";
import LineIcon from "./../.././../../public/line_icon.png";
import FBIcon from "./../.././../../public/fb_icon.png";
import TWIcon from "./../.././../../public/tw_icon.png";
import News1 from "./../.././../../public/detail_image_1.png";
import News2 from "./../.././../../public/detail_image_2.png";
import relateImage1 from "./../.././../../public/Related_image_1.png";
import relateImage2 from "./../.././../../public/Related_image_2.png";
import relateImage3 from "./../.././../../public/Related_image_3.png";
import MostViews from "../../../components/mostView";
import styles from "../../../../styles/Home.module.css";

export default function Detail() {
  return (
    <div className={styles.container}>
      <div className={styles.boxLeft}>
        <h className={styles.textDetailTopic}>
          ทางด่วนฟรี! ผ่านฉลุย 3 สายทาง รวม 60 ด่าน รับวันหยุดราชการ 3 มิ.ย. 66
          นี้
        </h>
        <div className={styles.moreOption}>
          {/* <AccessTimeIcon sx={{ padding: "0 0.3rem" }} /> */}
          <h className={styles.textMoreOption}>01 มิ.ย. 66 (16:36 น.)</h>
          <div className={styles.divider} />
          <h className={styles.textMoreOption}>ความคิดเห็น 1</h>
          <div className={styles.divider} />
          <h className={styles.textMoreOption}>แชร์</h>
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
          <div>
            <div className={styles.copyLink} direction={"row"}>
              {/* <LinkIcon sx={{ fontSize: 14, marginRight: "0.3rem" }} /> */}
              <h sx={{ fontSize: "0.8rem", fontWeight: "200" }}>คัดลอกลิงก์</h>
            </div>
          </div>
        </div>
        <Image className={styles.detailImage} src={News1} alt="News image" />
        <h className={styles.textD1}>
          การทางพิเศษแห่งประเทศไทยประกาศยกเว้นเก็บค่าผ่านทาง 3 สายทาง
          รวมทั้งสิ้น 60 ด่าน ในวันหยุดราชการวันที่ 3 มิถุนายน 2566 นี้
        </h>
        <h className={styles.textD2}>
          การทางพิเศษแห่งประเทศไทย (กทพ.) ยกเว้นค่าผ่านทางของการทางพิเศษ 3
          สายทาง จำนวน 60 ด่าน ในวันเสาร์ที่ 3 มิถุนายน 2566 ตั้งแต่เวลา 00.01
          น. ถึง 24.00 น. จำนวน 1 วัน เนื่องในวันเฉลิมพระชนมพรรษาสมเด็จพระราชินี
          และวันวิสาขบูชา ประกอบด้วย
        </h>

        {/* <List
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
        </List> */}
        <Image className={styles.detailImage} src={News2} alt="News image" />
        <h component="span" className={styles.textD2}>
          การยกเว้นค่าผ่านทางในวันหยุดราชการประจำปีตามประกาศสำนักนายกรัฐมนตรี
          เป็นไปตามที่ กทพ. บริษัท ทางด่วนและรถไฟฟ้ากรุงเทพ จำกัด (มหาชน) (BEM)
          และบริษัททางด่วน กรุงเทพเหนือจำกัด (NECL)
          ร่วมปฏิบัติตามเงื่อนไขสัญญาสัมปทานโครงการ ระบบทางด่วนขั้นที่ 2
          (ทางพิเศษศรีรัชรวมถึงส่วน D)
          และสัญญาโครงการทางด่วนสายบางปะอิน-ปากเกร็ด (ทางพิเศษ อุดรรัถยา)
          ฉบับแก้ไขใหม่
          เพื่อเป็นการอำนวยความสะดวกในการเดินทางของประชาชนในวันหยุด
        </h>
        <h className={styles.textD1}>
          ประชาชนผู้ใช้ทางสามารถสอบถามรายละเอียดได้ที่ EXAT Call Center โทร 1543
        </h>
        <div>
          <div className={styles.subTopic} direction="row">
            <h>ข่าวที่เกี่ยวข้อง</h>
            {/* <ArrowForwardIosIcon sx={{ fontSize: 14 }} /> */}
          </div>
          <div />
          <div className={styles.grid} direction="row">
            <div className={styles.relateCard}>
              <Image
                className={styles.relateImage}
                src={relateImage1}
                alt="Related News image"
              />
              <h>กทพ. ยกเว้นค่าทางด่วน 3 เส้นทางรับวันหยุด 3 มิถุนายน 64 นี้</h>
            </div>
            <div className={styles.relateCard}>
              <Image
                className={styles.relateImage}
                src={relateImage2}
                alt="Related News image"
              />
              <h>
                ข่าวดี! ทางด่วนฟรี 3 วัน รับวันหยุดราชการเดือน พฤษภาคม 65 นี้
              </h>
            </div>
            <div className={styles.relateCard}>
              <Image
                className={styles.relateImage}
                src={relateImage3}
                alt="Related News image"
              />
              <h>
                ทางด่วนฟรี! กทพ. เว้นค่าผ่านทาง 3 เส้นทางรับ วันมาฆบูชา 6
                มีนาคมนี้
              </h>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.boxRight}>
        <MostViews />
      </div>
    </div>
  );
}
