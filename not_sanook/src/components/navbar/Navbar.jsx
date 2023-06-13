"use client";

import Link from 'next/link';
import React from 'react';
import styles from "./navbar.module.css";
import Image from "next/image";
//import { signIn, useSession } from "next-auth/react";

const links = [
    {
      id: 1,
      title: "ข่าว",
      url: "/dashboard",
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
      title: "",
      url: "/",
    },
  ];

const Navbar = () => {
  //const session = useSession();

  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>
        <Image src="/sanook.png" width={195} height={45} alt="Sanook"/>
        </Link>
        <h4 className={styles.most}>2 June 2023</h4>
        <div className={styles.link}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <div className={styles.social}>
        <Image src="/Lotto.png" width={35} height={35} className={styles.icon} alt="ตรวจหวย"/>
        <h5 className={styles.most}>ตรวจหวย</h5>
        <Image src="/Joox.png" width={35} height={35} className={styles.icon} alt="Joox"/>
        <h5 className={styles.most}>Joox</h5>
        <Image src="/TV.png" width={35} height={35} className={styles.icon} alt="TV"/>
        <h5 className={styles.most}>WeTV</h5>
        <Image src="/Comic.png" width={35} height={35} className={styles.icon} alt="Comics"/>
        <h5 className={styles.most}>WeComics</h5>
        <Image src="/Pubg.png" width={35} height={35} className={styles.icon} alt="PubG"/>
        <h5 className={styles.most}>PUBG</h5>
      </div>
       <button
       className={styles.login}
       onClick={() => {
        console.log("Log in");
       }}
       >
        Login
       </button>
       <button
       className={styles.login}
       onClick={() => {
        console.log("Register");
       }}
       >
        Register
       </button>
        </div>
    </div>
  );
};

export default Navbar