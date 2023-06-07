"use client";

import React from 'react';
import styles from './footer.module.css';
import Image from "next/image";

const Footer = () => {

  return (
    <div className={styles.container}>
      <div> 
        <h2>สงวนลิขสิทธิ์ © 2566 บริษัท เทนเซ็นต์ (ประเทศไทย) จำกัด</h2>
      </div>
      <div className={styles.social}>
        <Image src="/sanook.png" width={195} height={35} alt="Sanook"/>
        <Image src="/1.png" width={35} height={35} className={styles.icon} alt="Facebook"/>
        <Image src="/2.png" width={35} height={35} className={styles.icon} alt="Twitter"/>
        <Image src="/3.png" width={35} height={35} className={styles.icon} alt="Instagram"/>
        <Image src="/4.png" width={35} height={35} className={styles.icon} alt="Youtube"/>
        <Image src="/5.png" width={35} height={35} className={styles.icon} alt="LinkedIn"/>
        <Image src="/6.png" width={35} height={35} className={styles.icon} alt="Line"/>
      </div>
      <div className={styles.social}>
      <button
       className={styles.login}
       onClick={() => {
        console.log("Log in");
       }}
       >
        แนะนำติชม แจ้งปัญหาการใช้งาน
      </button>
      <button
       className={styles.login}
       onClick={() => {
        console.log("Log in");
       }}
       >
        ร่วมงานกับเรา
      </button>
      <button
       className={styles.login}
       onClick={() => {
        console.log("Log in");
       }}
       >
        เกี่ยวกับเรา
       </button>
       <button
       className={styles.login}
       onClick={() => {
        console.log("Log in");
       }}
       >
        นโยบายความเป็นส่วนตัว
       </button>
       <button
       className={styles.login}
       onClick={() => {
        console.log("Log in");
       }}
       >
        นโยบายคุกกี้
       </button>
       <button
       className={styles.login}
       onClick={() => {
        console.log("Log in");
       }}
       >
        ร้องเรียนเนื้อหาไม่เหมาะสม
       </button>
       </div>
    </div>
  );
};

export default Footer