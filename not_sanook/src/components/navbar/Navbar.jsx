"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Sanook from "../../../public/sanook.png";
import Search from "../../../public/search.png";
import { useEffect, useState } from "react";
//import { signIn, useSession } from "next-auth/react";

async function getData() {
  const response = await fetch(`http://localhost:3003/contents/`);
  return response.json();
}

function getCategoryAndChannel(data) {
  const usedCategories = [];
  const modifiedData = [];
  function getChannelURL(category, channel) {
    return `/${category}/${channel}`;
  }

  data.forEach((item, index) => {
    const category = item.category;
    const channel = item.channel;

    if (!usedCategories.includes(category)) {
      modifiedData.push({
        id: index,
        category: category,
        channels: [
          {
            id: 1,
            name: channel,
            url: getChannelURL(category, channel),
          },
        ],
      });

      usedCategories.push(category);
      index++;
    } else {
      const categoryIndex = modifiedData.findIndex(
        (entry) => entry.category === category
      );
      const existingChannel = modifiedData[categoryIndex].channels.find(
        (ch) => ch.name === channel
      );

      if (!existingChannel) {
        const channelId = modifiedData[categoryIndex].channels.length + 1;
        modifiedData[categoryIndex].channels.push({
          id: channelId,
          name: channel,
          url: getChannelURL(category, channel),
        });
      }
    }
  });
  return modifiedData;
}

const Navbar = async ({}) => {
  const data = await getData();
  const useData = getCategoryAndChannel(data);
  
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className={styles.container}>
      <div className={styles.nav1}>
        <div className={styles.navLeft}>
          <Link href="/">
            <Image src={Sanook} className={styles.logo} alt="Sanook icon" />
          </Link>
          <p className={styles.most}>{currentDate}</p>
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
          {useData.map((category) => (
            <div className={styles.dropdown}>
              <Link
                key={category.id}
                href={`/${category.category}`}
                className={styles.container}
              >
                <h4 className={styles.category}>{category.category}</h4>
              </Link>
              <div className={styles.contents}>
                {category.channels.map((channel) => (
                  <Link key={channel.id} href={channel.url}>
                    <h4 className={styles.channel}>{channel.name}</h4>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
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
};

export default Navbar;
