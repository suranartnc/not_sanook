"use client";
import Image from "next/image";
// import styles from "./page.module.css";
// import Ploy from 'public/Ploy.png';
import { useEffect, useState } from "react";
//import Button from "@/components/Button/Button";

const Home = () => {
  const [home, setDetail] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3003/contents/?category=review&_limit=5"
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
      {home ? (
        <div>
          <div className={styles.container}>
            <div className={styles.boxLeft}>
              <h className={styles.title}>{home.title}</h>
              <div className={styles.moreOption}>
                {/* <AccessTimeIcon sx={{ padding: "0 0.3rem" }} /> */}
                <h className={styles.textMoreOption}>{home.date}</h>
                <div className={styles.divider} />
                <h className={styles.textMoreOption}>ความคิดเห็น 1</h>
                <div className={styles.divider} />
                <h className={styles.textMoreOption}>แชร์</h>
                {
                  <Image
                src={home.image}
                alt=""
                width={555}
                height={333}
                className={styles.image}
                />
               }
                <div>
                  <div className={styles.copyLink} direction={"row"}>
                    {/* <LinkIcon sx={{ fontSize: 14, marginRight: "0.3rem" }} /> */}
                    <h sx={{ fontSize: "0.8rem", fontWeight: "200" }}>
                      คัดลอกลิงก์
                    </h>
                  </div>
                </div>
              </div>
              {/* <Image
                alt="News image"
                src={detail.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              /> */}

              <h className={styles.textD}>{home.body}</h>

              <div>
                <div className={styles.subTopic} direction="row">
                  <h>ข่าวที่เกี่ยวข้อง</h>
                  {/* <ArrowForwardIosIcon sx={{ fontSize: 14 }} /> */}
                </div>
                <div />
                <div className={styles.grid} direction="row">
                  <div className={styles.relateCard}>
                    {/* <Image
                      className={styles.relateImage}
                      src={relateImage1}
                      alt="Related News image"
                    /> */}
                    <h>
                      กทพ. ยกเว้นค่าทางด่วน 3 เส้นทางรับวันหยุด 3 มิถุนายน 64
                      นี้
                    </h>
                  </div>
                  <div className={styles.relateCard}>
                    {/* <Image
                      className={styles.relateImage}
                      src={relateImage2}
                      alt="Related News image"
                    /> */}
                    <h>
                      ข่าวดี! ทางด่วนฟรี 3 วัน รับวันหยุดราชการเดือน พฤษภาคม 65
                      นี้
                    </h>
                  </div>
                  <div className={styles.relateCard}>
                    {/* <Image
                      className={styles.relateImage}
                      src={relateImage3}
                      alt="Related News image"
                    /> */}
                    <h>
                      ทางด่วนฟรี! กทพ. เว้นค่าผ่านทาง 3 เส้นทางรับ วันมาฆบูชา 6
                      มีนาคมนี้
                    </h>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.boxRight}>
              {/* <MostViews /> */}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Home;

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.boxLeft}>
//         <div className={styles.item}>
//           <Image src={Ploy} alt="" className={styles.img} />
//         </div>
//         <div className={styles.item}>
//           <h1 className={styles.title}>"พลอย เฌอมาลย์" เช็กอิน
//           อังกฤษลงภาพคู่ "โต้งทูพี" 
//           รักหวานฟุ้งเต็มเฟรม </h1>
//         </div>
//         <button className={styles.button}>อ่านต่อ</button>
//           <div>
//             <h2 className={styles.most}>Most viewed</h2>
//             <Image src="/MV1.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>ยายชีวิตพลิก ถูกหวย 12 ล้านจากบ้านต้องเช่าบางครั้งกินข้าวก้นบาตรหลวงพ่อ</h3>
//             <Image src="/MV2.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>"มิย่า" เจอดราม่าถล่มเละอายุไม่ถึงแต่มีภาพทั้งเข้าผับและขับรถได้อย่างไร?</h3>
//             <Image src="/MV3.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>"ณิชา" เรียนขี่ม้าอีกครั้ง "โตโน่"ให้กำลังใจติดขอบสนามแต่พีคที่ภาพสุดท้าย</h3>
//             <Image src="/MV4.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>อั้นไว้ก่อน! ราคาน้ำมันวันพรุ่งนี้เบนซิน-แก๊สโซฮอล์ ลดลง 50สตางค์ต่อลิตร</h3>
//             <Image src="/MV5.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>สรุปไทม์ไลน์ แบคฮยอน ซิ่วหมินเฉิน EXO ยื่นขอยุติสัญญา SMอ้างว่ามีคนภายนอกปั่วหัว</h3>
//           </div>
//           <div>
//             <h2 className={styles.category}>บันเทิง-ดารา</h2>
//             <Image src="/en1.png" width={400} height={250} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>"แก้ม" ออกรายการเคลียร์ใจ "ตั้ม-โดม"เผยหายหน้าสภาพจิตใจไม่แข็งแรง</h3>
//             <Image src="/en2.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>เปิดใจ "ท็อป ดารณีนุช" กับรักครั้งใหม่ปลื้มใจลูกชายแต่งงานมีครอบครัวแล้ว</h3>
//             <Image src="/en3.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>"แต้ว ณฐพร" ควงแขน "ไฮโซณัย"เที่ยวลอนดอน แต่งานนี้แอบมีดราม่า</h3>
//             <Image src="/en4.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>"กระแต อาร์สยาม"เปิดใจแต่งงานสายฟ้าแลบ?ร่ำไห้โดนว่าอกตัญญูไม่ดูแลพ่อ</h3>
//             <Image src="/en5.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>"น้ำผึ้ง ณัฐริกา"แชร์โมเมนต์สวีตกับแฟน หวานเจี๊ยบ!คนโสดทนดูไม่ได้</h3>
//           </div>
//           <div>
//             <h2 className={styles.category}>ดวง-ความเชื่อ-หวย</h2>
//               <div>
//                 <h3 className={styles.desc}>ตรวจสลากกินแบ่งรัฐบาล</h3>
//                 <h3 className={styles.desc}>ผลสลากงวด1 มิ.ย. 2566</h3>
//                 <p>รางวัลที่1</p>
//                 <h1>125272</h1>
//                 <p>เลขหน้า 3 ตัว</p>
//                 <h1>000</h1>
//                 <h1>681</h1>
//                 <p>เลขท้าย 3 ตัว</p>
//                 <h1>386</h1>
//                 <h1>971</h1>
//                 <p>เลขท้าย 2 ตัว</p>
//                 <h1>09</h1>
//                 <h1>งวดนี้คุณตรวจสลากฯ แล้วรึยัง?</h1>
//               </div>
//               <div>
//                 <h2 className={styles.desc}>เช็คดวง</h2>
//                 <h3>เลือกหมวดทำนายดวงชะตา</h3>
//                 <Image src="/hr1.png" width={60} height={60} className={styles.imgmost} alt=""/>
//                 <Image src="/hr2.png" width={60} height={60} className={styles.imgmost} alt=""/>
//                 <Image src="/hr3.png" width={60} height={60} className={styles.imgmost} alt=""/>
//                 <Image src="/hr4.png" width={60} height={60} className={styles.imgmost} alt=""/>
//                 <Image src="/hr5.png" width={60} height={60} className={styles.imgmost} alt=""/>
//                 <Image src="/hr6.png" width={60} height={60} className={styles.imgmost} alt=""/>
//                 <Image src="/hr7.png" width={60} height={60} className={styles.imgmost} alt=""/>
//                 <Image src="/hr8.png" width={60} height={60} className={styles.imgmost} alt=""/>
//                 <Image src="/hr9.png" width={60} height={60} className={styles.imgmost} alt=""/>
//               </div>
//           </div>
//           <div>
//             <h2 className={styles.category}>กีฬา</h2>
//             <Image src="/sp1.png" width={400} height={250} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>ถูกใจใช่เลย! แมนฯ ยูไนเต็ด เล็งกระชาก"แนวรับเสือใต้" ตลาดหน้าร้อนนี้</h3>
//             <Image src="/sp2.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>ต้องได้สักคน! สื่อตี แมนฯ ยูฯ เดินหน้าถก"2 หัวหอก" แต่ "เคน" ยังเป็นเป้าหมายหลัก</h3>
//             <Image src="/sp3.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>กระหน่ำเลิฟ! เพจ Volleyball Worldเปลี่ยนหน้าปกใหม่ยังเป็น "สาวไทย"เหมือนเดิม</h3>
//             <Image src="/sp4.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>อวยยศทั้งโซเชียล!คอมเมนต์แฟนวอลเลย์บอลต่างชาติหลังเกม ไทย คว่ำ แคนาดา 3-0</h3>
//             <Image src="/sp5.png" width={200} height={150} className={styles.imgmost} alt=""/>
//             <h3 className={styles.desc}>สุดเสียดาย! "บัลลังก์"เทควันโดดาวรุ่งไทยโดนหักแต้ม 8วิ.สุดท้ายชวดแชมป์โลก 2023</h3>
//           </div>
//         </div>
//     </div>
//   );
// };