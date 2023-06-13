"use client";
import Image from "next/image";
import styles from "./page.module.css";
import LineIcon from "../.././../../public/line_icon.png";
import FBIcon from "../.././../../public/fb_icon.png";
import TWIcon from "../.././../../public/tw_icon.png";
import ClockIcon from "../.././../../public/clock_icon.png";
import LinkIcon from "../.././../../public/link_icon.png";
import Mostview from "@/components/mostview/Mostview";
import Relate from "@/components/relate/Relate";

async function getData(id) {
  const response = await fetch(`http://localhost:3003/contents/${id}`);
  return response.json();
}

const Detail = async ({params}) => {
  const data = await getData(params.id);

  return (
    <div>
      {data ? (
          <div className={styles.container}>
            <div className={styles.boxLeft}>
              <h1 className={styles.textDetailTopic}>{data.title}</h1>
              <div className={styles.moreOption}>
                <Image
                  className={styles.customIcon1}
                  src={ClockIcon}
                  alt="Clock icon"
                />
                <h4 className={styles.textMoreOption}>{data.date}</h4>
                <div className={styles.divider} />
                <h4 className={styles.textMoreOption}>ความคิดเห็น 1</h4>
                <div className={styles.divider} />
                <h4 className={styles.textMoreOption}>แชร์</h4>
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
                    <Image
                      className={styles.customIcon1}
                      src={LinkIcon}
                      alt="Link icon"
                    />
                    <h5>คัดลอกลิงก์</h5>
                  </div>
                </div>
              </div>
              <Image
                alt="News image"
                src={data.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <p className={styles.textD}>{data.body}</p>
              <Relate
                channel={data.channel}
                category={data.category}
                id={data.id}
              />
            </div>
            <div className={styles.boxRight}>
              <Mostview category={data.category} id={data.id} />
            </div>
          </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
