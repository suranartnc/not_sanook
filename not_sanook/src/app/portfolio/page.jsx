"use client";
import MostViews from "@/components/mostview/mostview";
import Pagination from "../../components/pagination/pagination";
import styles from "./page.module.css";
import Clock from "../../../public/clock_icon.png";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Category = ({ params }) => {
  const [firstNews, setFirstNews] = useState([]);
  const [otherNews, setOtherNews] = useState([]);
  const [data, setData] = useState([]);
  

  const category = "news";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3003/contents/?category=${category}`
      );
      const data = await response.json();
      // const sortDate = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      const random = data.sort(() => Math.random() - 0.5);

      const first = random[0];
      const other = random.slice(1, 5);

      setFirstNews(first);
      setOtherNews(other);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const onPageChange = (page) => {
    setCurrentPage(page);
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
          <h3 className={styles.textCategory}>{category}</h3>
          <div className={styles.highlight}>
            {firstNews && (
              <div className={styles.topHighlight}>
                <Image
                  alt="Highlight News image"
                  src={firstNews.image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
                <h4>{firstNews.title}</h4>
              </div>
            )}
            <div className={styles.moreHighlight}>
              {otherNews.map((item) => (
                <div key={item.id} className={styles.moreNews}>
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
                </div>
              ))}
            </div>
          </div>
          <h3>Latest News</h3>
          <div className={styles.latest}>
            {paginatedPosts.map((item) => (
              <div key={item.id} className={styles.latestCard}>
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
              </div>
            ))}
            <Pagination
              items={latest.length} // 100
              currentPage={currentPage} // 1
              pageSize={pageSize} // 10
              onPageChange={onPageChange}
            />
          </div>
        </div>
        <div className={styles.boxRight}>
          <MostViews category={category} />
        </div>
      </div>
    </div>
  );
};

export default Category;
