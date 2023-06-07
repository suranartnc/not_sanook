"use client";
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

import { useEffect, useState } from "react";

const Detail = () => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3003/contents/2e57f096-2a7c-44ae-b01c-84c612af1fae"
        ); // Replace "your-id" with the actual ID you want to fetch
        const data = await response.json();
        setDetail(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {detail ? (
        <div>
          <div className={styles.container}>
            <div className={styles.boxLeft}>
              <h className={styles.textDetailTopic}>{detail.title}</h>
              <div className={styles.moreOption}>
                {/* <AccessTimeIcon sx={{ padding: "0 0.3rem" }} /> */}
                <h className={styles.textMoreOption}>{detail.date}</h>
                <div className={styles.divider} />
                <h className={styles.textMoreOption}>ความคิดเห็น 1</h>
                <div className={styles.divider} />
                <h className={styles.textMoreOption}>แชร์</h>
                <Image
                  className={styles.customIcon}
                  src={LineIcon}
                  alt="Line icon"
                />
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
                    <h sx={{ fontSize: "0.8rem", fontWeight: "200" }}>
                      คัดลอกลิงก์
                    </h>
                  </div>
                </div>
              </div>
              <Image
                alt="News image"
                src={detail.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />

              <h className={styles.textD}>{detail.body}</h>

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
                    <h>
                      กทพ. ยกเว้นค่าทางด่วน 3 เส้นทางรับวันหยุด 3 มิถุนายน 64
                      นี้
                    </h>
                  </div>
                  <div className={styles.relateCard}>
                    <Image
                      className={styles.relateImage}
                      src={relateImage2}
                      alt="Related News image"
                    />
                    <h>
                      ข่าวดี! ทางด่วนฟรี 3 วัน รับวันหยุดราชการเดือน พฤษภาคม 65
                      นี้
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
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;

