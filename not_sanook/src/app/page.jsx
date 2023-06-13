"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Ploy from "public/Ploy.png";
import Link from "next/link";
import arrow from "../../public/right_arrow_icon.png";
import Slider from "../components/slider/Slider";
import Mostbar from "../components/mostbar/Mostbar";
import Scoop from "../components/scoop/Scoop";
import Review from "../components/review/Review";
//import Button from "@/components/Button/Button";

async function getData() {
  const res = await fetch(
    "http://localhost:3003/contents/?category=scoop&_limit=5"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
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
      <div className={styles.title}>
        <div className={styles.category}>ดวง-ความเชื่อ-หวย</div>
        <Image className={styles.arrow} src={arrow} width={25} height={25} />
      </div>
      <div className={styles.lottoAndHoro}>
        <div className={styles.boxlot}>
          <div className={styles.header}>ตรวจสลากกินแบ่งรัฐบาล</div>
          <div className={styles.desc}>งวดวันที่ 1 มิถุนายน 2566</div>
          <div className={styles.first}>รางวัลที่ 1</div>
          <div className={styles.numFirst}>125272</div>
          <div className={styles.otherPriceLot}>
            <div className={styles.columnLot}>
              <div className={styles.otherPrice}> เลขหน้า 3 ตัว </div>
              <div className={styles.num1}> 000 </div>
              <div className={styles.num1}> 681 </div>
            </div>
            <div className="columnlot">
              <div className={styles.otherPrice}> เลขท้าย 3 ตัว </div>
              <div className={styles.num1}> 386 </div>
              <div className={styles.num1}> 971 </div>
            </div>
            <div className="columnlot">
              <div className={styles.otherPrice}> เลขท้าย 2 ตัว </div>
              <div className={styles.num2}> 09 </div>
            </div>
          </div>
          <div className={styles.addition}> งวดนี้คุณตรวจสลากฯ แล้วรึยัง? </div>
          <div className={styles.checkNum}>
            <div className={styles.inputDate}>
              <p className={styles.day}>1 มิถุนายน 2566</p>
              <Image src="/down.png" width={20} height={20} alt="right" />
            </div>
            <div className={styles.inputNum}>
              <input
                className={styles.inputBox}
                type="text"
                placeholder="กรอกเลขสลาก"
              />
              <button className={styles.button} type="submit">
                <Image src="/search.png" width={12} height={12} alt="search" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.boxhoro}>
          <div className={styles.topHoro}>
            <div className={styles.header}> เช็คดวง </div>
            <div className={styles.desc}> เลือกหมวดทำนายดวงชะตา </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.typeHoro}>
              <Image src="/hr1.png" width={60} height={60} alt="" />
              <div className={styles.textHoro}> ดวงรายวัน </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr2.png" width={60} height={60} alt="" />
              <div className={styles.textHoro}> ดวงความรัก </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr3.png" width={60} height={60} alt="" />
              <div className={styles.textHoro}> กราฟชีวิต </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr4.png" width={60} height={60} alt="" />
              <div className={styles.textHoro}> ดวงรายเดือน </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr5.png" width={60} height={60} alt="" />
              <div className={styles.textHoro}> ไพ่ยิปซี </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr6.png" width={60} height={60} alt="" />
              <div className={styles.textHoro}> สีมงคล </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr7.png" width={60} height={60} alt="" />
              <div className={styles.textHoro}> ดวงรายปี </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr8.png" width={60} height={60} alt="" />
              <div className={styles.textHoro}> ทำนายฝัน </div>
            </div>
            <div className={styles.typeHoro}>
              <Image src="/hr9.png" width={60} height={60} alt="" />
              <div className={styles.textHoro}> อื่นๆ </div>
            </div>
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
};

export default Home;
