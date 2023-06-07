import Image from "next/image";
import styles from "./page.module.css";
import Ploy from 'public/Ploy.png';
//import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src={Ploy} alt="" className={styles.img} />
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>"พลอย เฌอมาลย์" เช็กอิน
        อังกฤษลงภาพคู่ "โต้งทูพี" 
        รักหวานฟุ้งเต็มเฟรม </h1>
      </div>
      
    </div>
  );
};