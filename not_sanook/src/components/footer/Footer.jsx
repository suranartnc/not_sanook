"use client";

import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Sanook from "../../../public/sanook.png";
import FB from "../../../public/facebook.png";
import TW from "../../../public/twitter.png";
import IG from "../../../public/instagram.png";
import YT from "../../../public/youtube.png";
import IN from "../../../public/linkedin.png";
import LI from "../../../public/line.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxLeft}>
        <Image src={Sanook} width={120} height={17} alt="Sanook icon" />
        <h4>สงวนลิขสิทธิ์ © 2566 บริษัท เทนเซ็นต์ (ประเทศไทย) จำกัด</h4>
        <div className={styles.suggest}>
          <p
            onClick={() => {
              console.log("About us");
            }}
          >
            เกี่ยวกับเรา
          </p>
          <div className={styles.divider} />
          <p
            onClick={() => {
              console.log("Privacy Policy");
            }}
          >
            นโยบายความเป็นส่วนตัว
          </p>
          <div className={styles.divider} />
          <p
            onClick={() => {
              console.log("Cookie Policy");
            }}
          >
            นโยบายคุกกี้
          </p>
          <div className={styles.divider} />
          <p
            onClick={() => {
              console.log("Inappropriate content");
            }}
          >
            ร้องเรียนเนื้อหาไม่เหมาะสม
          </p>
        </div>
      </div>
      <div className={styles.boxRight}>
        <p
          onClick={() => {
            console.log("Give feedback, report problems");
          }}
        >
          แนะนำติชม แจ้งปัญหาการใช้งาน
        </p>
        <p
          onClick={() => {
            console.log("Work with uss");
          }}
        >
          ร่วมงานกับเรา
        </p>
        <div className={styles.contact}>
          <div className={styles.social}>
            <Image src={FB} className={styles.icon} alt="Facebook" />
            <Image src={TW} className={styles.icon} alt="Twitter" />
            <Image src={IG} className={styles.icon} alt="Instagram" />
            <Image src={YT} className={styles.icon} alt="Youtube" />
            <Image src={IN} className={styles.icon} alt="LinkedIn" />
            <Image src={LI} className={styles.icon} alt="Line" />
          </div>
          <div class="searchBox">
            <form noValidate action="" role="search">
              <input
              className={styles.input}
              type="text"
                placeholder="Email address"
              />
              <button className={styles.button} type="submit">รับข่าวสาร</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
