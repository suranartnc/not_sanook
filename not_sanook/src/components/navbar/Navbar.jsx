"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Sanook from "../../../public/sanook.png";
import Search from "../../../public/search.png";
//import { signIn, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "ข่าว",
    url: "/",
  },
  {
    id: 2,
    title: "ดูดวง-ตรวจหวย",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "ไลฟ์สไตล์",
    url: "/blog",
  },
  {
    id: 4,
    title: "บันเทิงครบรส",
    url: "/about",
  },
  {
    id: 5,
    title: "ความรู้รอบตัว",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  //const session = useSession();

  return (
    <div className={styles.container}>
      <div className={styles.nav1}>
        <div className={styles.navLeft}>
          <Link href="/">
            <Image src={Sanook} className={styles.logo} alt="Sanook icon" />
          </Link>
          <p className={styles.most}>2 June 2023</p>
        </div>
        <div className={styles.navMid}>
          <input className={styles.input} type="text" placeholder="Search" />
          <Image
            className={styles.inputIcon}
            src={Search}
            width={20}
            height={20}
            alt="Search icon"
          />
        </div>
        <div className={styles.navRight}>
          <h4
            onClick={() => {
              console.log("Log in");
            }}
          >
            Login
          </h4>
          <div className={styles.divider} />
          <h4
            onClick={() => {
              console.log("Register");
            }}
          >
            Register
          </h4>
        </div>
      </div>
      <div className={styles.nav2}>
        <div className={styles.navLeft}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.category}>
              <h4>{link.title}</h4>
            </Link>
          ))}
        </div>
        <div className={styles.navRight}>
          <div className={styles.feature}>
            <div className={styles.app}>
              <Image
                src="/Lotto.png"
                width={30}
                height={30}
                alt="ตรวจหวย"
              />
              <h5 className={styles.most}>ตรวจหวย</h5>
            </div>
            <div className={styles.app}>
              <Image
                src="/Joox.png"
                width={30}
                height={30}
                alt="Joox"
              />
              <h5 className={styles.most}>Joox</h5>
            </div>
            <div className={styles.app}>
              <Image
                src="/TV.png"
                width={30}
                height={30}
                alt="TV"
              />
              <h5 className={styles.most}>WeTV</h5>
            </div>
            <div className={styles.app}>
              <Image
                src="/Comic.png"
                width={30}
                height={30}
                alt="Comics"
              />
              <h5 className={styles.most}>WeComics</h5>
            </div>
            <div className={styles.app}>
              <Image
                src="/Pubg.png"
                width={30}
                height={30}
                alt="PubG"
              />
              <h5 className={styles.most}>PUBG</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
