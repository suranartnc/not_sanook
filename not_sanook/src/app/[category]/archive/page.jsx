"use client";
import React, { useState, useEffect } from "react";
import Clock from "public/clock_icon.png";
import styles from "./page.module.css";
import Image from "next/image";
import Mostview from "@/components/mostview/Mostview";
import Pagination from "@/components/pagination/Pagination";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Archive() {
  const [currentPage, setCurrentPage] = useState(1);
  const [late, setLate] = useState([]);
  const [views, setViews] = useState([]);
  const [channel, setChannel] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("latest");
  const [filteredData, setFilteredData] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.category || params.channel) {
      fetchData();
    }
  }, [params.category, params.channel]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3003/contents/?category=${params.category}`
      );
      const data = await response.json();

      const latest = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      const viewed = data.sort((a, b) => b.views - a.views);

      setLate(latest);
      setViews(viewed);
      setChannel(getChannel(data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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

  // const filterData = (filter) => {
  //   let sortedData = [];
  //   if (filter === "latest") {
  //     sortedData = late;
  //   } else if (filter === "mostViewed") {
  //     sortedData = views;
  //   }

  //   setFilteredData(paginatedPosts);
  //   return paginatedPosts;
  // };

  // const handleFilterChange = (event) => {
  //   const filter = event.target.value;
  //   setSelectedFilter(filter);
  //   if (filter === "latest") {
  //     const filteredItems = data.sort(
  //       (a, b) => new Date(b.date) - new Date(a.date)
  //     );
  //     setFilteredData(filteredItems);
  //   } else if (filter === "mostViewed") {
  //     const filteredItems = data.sort((a, b) => b.views - a.views);
  //     setFilteredData(filteredItems);
  //   }
  // };
  // const handleClick = () => {
  //   filterData(selectedFilter);
  // };

  const pageSize = 4;

  const onPageChange = (page) => {
    setCurrentPage(page);
    // window.alert(page);
  };

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  const paginatedPosts = paginate(late, currentPage, pageSize);

  const title = `All ${params.category}`;
  return (
    <div className={styles.container}>
      <title>{title}</title>
      <div className={styles.boxLeft}>
        <div>เนื้อหาทั้งหมด</div>
        <div className={styles.filter}>
          <div className={styles.dropdown}>
            <h4 className={styles.category}>{params.category}</h4>
            <div className={styles.contents}>
              {channel.map((channel) => (
                <h4 className={styles.channel}>{channel.channel}</h4>
              ))}
            </div>
          </div>
          <div className={styles.dropdown}>
            <select value={selectedFilter}>
              <option value="latest">Latest</option>
              <option value="mostViewed">Most Viewed</option>
            </select>
            <button>Sort</button>
          </div>
        </div>
        <div className={styles.info}>
          {paginatedPosts.map((item) => (
            <div key={item.id} className={styles.infoCard}>
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
              <div className={styles.detail}>
                <h4>{item.title}</h4>
                <div className={styles.bottom}>
                  <div className={styles.times}>
                    <Image
                      alt="News image"
                      src={Clock}
                      width={20}
                      height={20}
                    />
                    <p>{calculateElapsedTime(item.date)}</p>
                  </div>
                  <p className={styles.view}>{item.views} views</p>
                </div>
              </div>
            </div>
          ))}
          <Pagination
            items={late.length} // 100
            currentPage={currentPage} // 1
            pageSize={pageSize} // 10
            onPageChange={onPageChange}
          />
        </div>
      </div>
      <div className={styles.boxRight}>
        <Mostview category={params.category} />
      </div>
    </div>
  );
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
