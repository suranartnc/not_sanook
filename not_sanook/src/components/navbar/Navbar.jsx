import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Search from "@/components/search/Search";
import Dropdown from "@/components/dropdown/Dropdown";
import Image from "next/image";
import Sanook from "../../../public/sanook.png";

export default function Navbar() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className={styles.container}>
      <div className={styles.nav1}>
        <div className={styles.navLeft}>
          <Link
            href={{
              pathname: `/`,
            }}
            as={`/`}
            key={"sanook"}
          >
            <Image src={Sanook} className={styles.logo} alt="Sanook icon" />
          </Link>
          <p className={styles.most}>{currentDate}</p>
        </div>
        <div className={styles.navMid}>
          <Search />
        </div>
        <div className={styles.navRight}>
          <h4>Login</h4>
          <div className={styles.divider} />
          <h4>Register</h4>
        </div>
      </div>
      <div className={styles.nav2}>
        <Dropdown/>
        <div className={styles.navRight}>
          <div className={styles.feature}>
            <div className={styles.app}>
              <Image src="/Lotto.png" width={30} height={30} alt="ตรวจหวย" />
              <h5 className={styles.most}>ตรวจหวย</h5>
            </div>
            <div className={styles.app}>
              <Image src="/Joox.png" width={30} height={30} alt="Joox" />
              <h5 className={styles.most}>Joox</h5>
            </div>
            <div className={styles.app}>
              <Image src="/TV.png" width={30} height={30} alt="TV" />
              <h5 className={styles.most}>WeTV</h5>
            </div>
            <div className={styles.app}>
              <Image src="/Comic.png" width={30} height={30} alt="Comics" />
              <h5 className={styles.most}>WeComics</h5>
            </div>
            <div className={styles.app}>
              <Image src="/Pubg.png" width={30} height={30} alt="PubG" />
              <h5 className={styles.most}>PUBG</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
