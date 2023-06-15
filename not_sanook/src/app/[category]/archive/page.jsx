"use client";
import React, { useState, useEffect } from "react";
import Clock from "../../../../public/clock_icon.png";
import styles from "./page.module.css";
import Image from "next/image";
import Mostview from "@/components/mostview/Mostview";
import Pagination from "../../../components/pagination/Pagination";
import Link from "next/link";

export default function Archive({ params }) {

  const [currentPage, setCurrentPage] = useState(1);
  const [late, setLate] = useState([]);
  const [views, setViews] = useState([]);
  const [channel, setChannel] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("latest");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (params.category || params.channel) {
      fetchData();
    }
  }, [params.category, params.channel]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3003/contents/?category=${category}&channel=${channel}`
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
  
  const pageSize = 4;
  const filterData = (filter) => {
    let sortedData = [];
    if (filter === "latest") {
      sortedData = late;
    } else if (filter === "mostViewed") {
      sortedData = views;
    }
    const paginate = (items, pageNumber, pageSize) => {
      const startIndex = (pageNumber - 1) * pageSize;
      return items.slice(startIndex, startIndex + pageSize);
    };
    const paginatedPosts = paginate(sortedData, currentPage, pageSize);
    setFilteredData(paginatedPosts);
    return paginatedPosts;
  };
  const defaultFilter = filterData(selectedFilter);
  const handleFilterChange = (event) => {
    const filter = event.target.value;
    setSelectedFilter(filter);
    if (filter === 'latest') {
      const filteredItems = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setFilteredData(filteredItems);
    } else if (filter === 'mostViewed') {
      const filteredItems = data.sort((a, b) => b.views - a.views);
      setFilteredData(filteredItems);
    }
  };
  const handleClick = () => {
    filterData(selectedFilter);
  };
  const onPageChange = (page) => {
    setCurrentPage(page);
    filterData(selectedFilter);
  };
  return (
    <div className={styles.container}>
      <div className={styles.boxLeft}>
        <div>เนื้อหาทั้งหมด</div>


        <div className={styles.dropdown}>
        <div className={styles.navLeft}>
          {useData.map((category) => (
            <div className={styles.dropdown}>
              <Link
                key={category.id}
                href={{
                  pathname: `/[category]`,
                }}
                as={`/${category.category}`}
                className={styles.container}
              >
                <h4 className={styles.category}>{category.category}</h4>
              </Link>
              <div className={styles.contents}>
                {category.channels.map((channel) => (
                  <Link
                    key={channel.id}
                    href={{
                      pathname: `/[category]/archive`,
                    }}
                    as={channel.url}
                  >
                    <h4 className={styles.channel}>{channel.name}</h4>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
          <div className={styles.down}>
            <Image src="/down.png" width={20} height={20} alt="right" />
          </div>
          <div className={styles.contents}>
            {channel.map((item) => (

              <div className={styles.channel}>{item.channel}</div>
            ))}
          </div>
        </div>


        <div className={styles.dropdown}>
          <div>
            <select value={selectedFilter} onChange={handleFilterChange}>
              <option value="latest">Latest</option>
              <option value="mostViewed">Most Viewed</option>
            </select>
            <button onClick={handleClick}>Sort</button>
          </div>
        </div>
        
        <div className={styles.latest}>
          {defaultFilter.map((item) => (
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
              <div>{item.channel}</div>
              <div className={styles.latestDetail}>
                <h4>{item.title}</h4>
                <div className={styles.times}>
                  <Image alt="News image" src={Clock} width={20} height={20} />
                  <p>{calculateElapsedTime(item.date)}</p>
                  <p>{item.views}</p>
                </div>
              </div>
            </div>
          ))}
          <Pagination
            items={filteredData.length} // 100
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
};


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
