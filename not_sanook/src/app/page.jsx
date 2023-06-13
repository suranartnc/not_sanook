"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Ploy from 'public/Ploy.png';
import Link from "next/link";
import Slider from '../components/slider/Slider';
import Mostbar from '../components/mostbar/Mostbar';
import Scoop from '../components/scoop/Scoop';
import Review from '../components/review/Review';
//import Button from "@/components/Button/Button";


async function getData() {
  const res = await fetch('http://localhost:3003/contents/?category=scoop&_limit=5');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}
 

const Home = async ({ params }) => {
  const data = await getData(params);
  return (
    <div className={styles.container}>
      <Slider />
      <Mostbar />
      <Scoop />
      <div className={styles.row}>
        <div className={styles.category}> ดวง-ความเชื่อ-หวย </div>
            <div className={styles.arrow}>
              <Image src="/right.png" width={25} height={25} alt="right" />
            </div>
      </div>
      <div className={styles.separator}></div>
              <div className={styles.boxlot}>
              <div className={styles.header}> ตรวจสลากกินแบ่งรัฐบาล </div>
              <div className={styles.desc}> ผลสลากงวด1 มิ.ย. 2566 </div>
              <div className={styles.first}> รางวัลที่1 </div>
              <div className={styles.nofirst}> 125272 </div>
                <div className="containerlot">
                  <div className="columnlot">
                    <div className={styles.front}> เลขหน้า 3 ตัว </div>
                    <div className={styles.nofront}> 000 </div>
                    <div className={styles.numfront}> 681 </div>
                  </div>
                  <div className="columnlot">
                    <div className={styles.back}> เลขท้าย 3 ตัว </div>
                    <div className={styles.noback}> 386 </div>
                    <div className={styles.numback}> 971 </div>
                  </div>
                  <div className="columnlot">
                    <div className={styles.sec}> เลขท้าย 2 ตัว </div>
                    <div className={styles.nosec}> 09 </div>
                  </div>
                </div>
                <div className={styles.separate}></div>
                <div className={styles.bot}> งวดนี้คุณตรวจสลากฯ แล้วรึยัง? </div>
                <div className={styles.date}>
                <div className={styles.day}> 1 มิถุนายน 2566 </div>
                  <div className={styles.down}>
                    <Image src="/down.png" width={20} height={20} alt="right" />
                  </div>
                </div>
                <div className={styles.check}>
                <div className={styles.num}> กรอกเลขสลาก </div>
                  <div className={styles.search}>
                    <div className={styles.pic}>
                      <Image src="/search.png" width={20} height={20} alt="right" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.boxhoro}>
                <div className={styles.header}> เช็คดวง </div>
                <div className={styles.desc}> เลือกหมวดทำนายดวงชะตา </div>
                <div className={styles.rowpic}>
                  <div className={styles.column}>
                    <Image src="/hr1.png" width={60} height={60} alt="" />
                    <Image src="/hr4.png" width={60} height={60} alt="" />
                    <Image src="/hr7.png" width={60} height={60} alt="" />
                  </div>
                  <div className={styles.columntext}>
                    <div className={styles.texthoro}> ดวงรายวัน </div>
                    <div className={styles.texthoro}> ดวงรายเดือน </div>
                    <div className={styles.texthoro}> ดวงรายปี </div>
                  </div>
                  <div className={styles.column}>
                    <Image src="/hr2.png" width={60} height={60} alt="" />
                    <Image src="/hr5.png" width={60} height={60} alt="" />
                    <Image src="/hr8.png" width={60} height={60} alt="" />
                  </div>
                  <div className={styles.columntext}>
                    <div className={styles.texthoro}> ดวงความรัก </div>
                    <div className={styles.texthoro}> ไพ่ยิปซี </div>
                    <div className={styles.texthoro}> ทำนายฝัน </div>
                  </div>
                  <div className={styles.column}>
                    <Image src="/hr3.png" width={60} height={60} alt="" />
                    <Image src="/hr6.png" width={60} height={60} alt="" />
                    <Image src="/hr9.png" width={60} height={60} alt="" />
                  </div>
                  <div className={styles.columntext}>
                    <div className={styles.texthoro}> กราฟชีวิต </div>
                    <div className={styles.texthoro}> สีมงคล </div>
                    <div className={styles.texthoro}> อื่นๆ </div>
                  </div>
                </div>
              </div>
          <Review />
    </div>
    
  );
};

export default Home;