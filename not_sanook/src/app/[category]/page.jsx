"use client";
import Mostview from "@/components/mostview/Mostview";
import Pagination from "@/components/pagination/Pagination";
import styles from "./page.module.css";
import Clock from "../../../public/clock_icon.png";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

async function getData(category) {
  const response = await fetch(
    `http://localhost:3003/contents/?category=${category}`
  );
  return response.json();
}

function getChannel(data) {
  const usedChannel = [];
  const modifiedData = [];

  data.forEach((item, index) => {
    const channel = item.channel;
    if (!usedChannel.includes(channel)) {
      modifiedData.push({
        id: index,
        channel: channel,
      });
      usedChannel.push(channel);
      index++;
    }

  });
  return modifiedData;
}

export default async function Category({params}) {
  const [currentPage, setCurrentPage] = useState(1);
  const category = params.category;
  const data = await getData(category);
  const channel = getChannel(data);

  const random = data.sort(() => Math.random() - 0.5);
  const first = random[0];
  const other = random.slice(1, 5);

  const latest = data.sort((a, b) => new Date(b.date) - new Date(a.date));

  const calculateElapsedTime = (time) => {
    const currentDateTime = new Date();
    const newsDate = new Date(time);
    const elapsedMilliseconds = currentDateTime - newsDate;
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const elapsedDays = Math.floor(elapsedHours / 24);

    if (elapsedSeconds < 60) {
      return `${elapsedSeconds} second${elapsedSeconds !== 1 ? "s" : ""} ago`;
    } else if (elapsedMinutes < 60) {
      return `${elapsedMinutes} minute${elapsedMinutes !== 1 ? "s" : ""} ago`;
    } else if (elapsedHours < 24) {
      return `${elapsedHours} hour${elapsedHours !== 1 ? "s" : ""} ago`;
    } else {
      return `${elapsedDays} day${elapsedDays !== 1 ? "s" : ""} ago`;
    }
  };

  const pageSize = 4;

  const onPageChange = (page) => {
    setCurrentPage(page);
    // window.alert(page);
  };

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  const paginatedPosts = paginate(latest, currentPage, pageSize);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.boxLeft}>
          <div className={styles.category}>
            <p className={styles.textCategory}>{category}</p>
            {channel.map((item) => (
              <Link
                key={item.channel}
                href={{
                  pathname: `/[category]/[channel]`,
                }}
                as={`/${category}/${item.channel}`}
              >
                <p className={styles.textChannel}>{item.channel}</p>
              </Link>
            ))}
            <Link
              href={{
                pathname: `/[category]/archive`,
              }}
              as={`${category}/archive`}
              key={category}
            >
              <p className={styles.textChannel}>all {category}</p>
            </Link>
          </div>
          <div className={styles.highlight}>
            {first && (
              <Link
                className={styles.topHighlight}
                key={first.id}
                href={{
                  pathname: `/blog/[id]`,
                }}
                as={`/blog/${first.id}`}
              >
                <Image
                  alt="Highlight News image"
                  src={first.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
                <h4>{first.title}</h4>
              </Link>
            )}
            <div className={styles.moreHighlight}>
              {other.map((item) => (
                <Link
                  className={styles.moreNews}
                  key={item.id}
                  href={{
                    pathname: `/blog/[id]`,
                  }}
                  as={`/blog/${item.id}`}
                >
                  <Image
                    alt="Highlight News image"
                    src={item.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "5px",
                    }}
                  />
                  <h4>{item.title}</h4>
                </Link>
              ))}
            </div>
          </div>
          <h3>Latest News</h3>
          <div className={styles.latest}>
            {paginatedPosts.map((item) => (
              <Link
                className={styles.latestCard}
                key={item.id}
                href={{
                  pathname: `/blog/[id]`,
                }}
                as={`/blog/${item.id}`}
              >
                <Image
                  alt="Latest News image"
                  src={item.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "30%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
                <div className={styles.latestDetail}>
                  <h4>{item.title}</h4>
                  <div className={styles.times}>
                    <Image
                      alt="News image"
                      src={Clock}
                      width={20}
                      height={20}
                    />
                    <p>{calculateElapsedTime(item.date)}</p>
                  </div>
                </div>
              </Link>
            ))}
            <Pagination
              items={latest.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={onPageChange}
            />
          </div>
        </div>
        <div className={styles.boxRight}>
          <Mostview category={category} />
        </div>
      </div>
    </div>
  );
}
