"use client";
import React, { useState, useEffect } from "react";
import Clock from "../../../../public/clock_icon.png";
import styles from "./page.module.css";
import Image from "next/image";
import Mostview from "@/components/mostview/Mostview";
import Pagination from "../../../components/pagination/Pagination";

export default function Archive({ params }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [late, setLate] = useState([]);
  const [views, setViews] = useState([]);
  const [channel, setChannel] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("latest");
  const [selectedFilter1, setSelectedFilter1] = useState("all news");
  const [filteredData, setFilteredData] = useState([]);

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
      console.log(latest,viewed)
      setLate(latest);
      setViews(viewed);
      setChannel(getChannel(data));
      
      const sortedData = filterData(selectedFilter, selectedFilter1);
      setFilteredData(sortedData);
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

  const filterData = (filter, filter1) => {
    let sortedData = [];
    if (filter === "latest") {
      sortedData = paginate(late, currentPage, pageSize);
    } else if (filter === "mostViewed") {
      sortedData = views;
    }

    if (filter1 !== "all news") {
      sortedData = sortedData.filter((item) => item.channel === filter1);
    }

    return sortedData;
  };

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
  };

  const handleFilterChange = (event) => {
    const filter = event.target.value;
    setSelectedFilter(filter);
  
    const sortedData = filterData(filter, selectedFilter1);
    setFilteredData(sortedData);
    
  };

  const renderChannels = () => {
    return channel.map((channel) => (
      <option key={channel.id} value={channel.channel}>{channel.channel}</option>
    ));
  };

  const handleFilterChange1 = (event) => {
    const filter1 = event.target.value;
    setSelectedFilter1(filter1);
  
    const sortedData = filterData(selectedFilter, filter1);
    setFilteredData(sortedData);
  };

  // const handleClick = () => {
  //   const filteredData = filterData(selectedFilter, selectedFilter1);
  //   setFilteredData(filteredData);
  // };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const paginatedData = filterData(selectedFilter, selectedFilter1);
    setFilteredData(paginatedData);
    setCurrentPage(1);
  }, [selectedFilter, selectedFilter1]);

  return (
    <div className={styles.container}>
      <div className={styles.boxLeft}>
        <div>เนื้อหาทั้งหมด</div>
        <div className={styles.filter}>
          
          <div className={styles.dropdown}>
            <select value={selectedFilter1} onChange={handleFilterChange1}>
              <option value="all news">All News</option>
              {renderChannels()}
            </select>
          </div>
          <div className={styles.dropdown}>
            <select value={selectedFilter} onChange={handleFilterChange}>
              <option value="latest">ใหม่ล่าสุด</option>
              <option value="mostViewed">ผู้ชม สูงสุดทั้งหมด</option>
              
            </select>
          </div>
          
        </div>

        <div className={styles.latest}>
          {filteredData.map((item) => (
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
            items={filteredData.length}
            currentPage={currentPage}
            pageSize={pageSize}
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
