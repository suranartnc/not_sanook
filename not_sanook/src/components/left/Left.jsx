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
        http://localhost:3003/contents/?category=${params.category}
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
