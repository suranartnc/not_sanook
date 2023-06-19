'use client'
import React, { useState, useEffect } from 'react'
import Clock from 'public/clock_icon.png'
import styles from './page.module.css'
import Image from 'next/image'
import Mostview from '@/components/mostview/mostview'
import Pagination from '@/components/pagination/Pagination'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function Archive() {
  const params = useParams()
  const [currentPage, setCurrentPage] = useState(1)
  const [channel, setChannel] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('date')
  const [selectedFilter1, setSelectedFilter1] = useState('all news')
  const [filteredData, setFilteredData] = useState([])
  const category = params.category

  const fetchData = async (filter, filter1) => {
    try {
      let url = `http://localhost:3003/contents/?category=${category}&_order=desc`

      if (filter !== 'all news') {
        url += `&channel=${filter}`
      }
      if (filter1) url += `&_sort=${filter1}`

      const response = await fetch(url)
      const data = await response.json()
      const response1 = await fetch(
        `http://localhost:3003/contents/?category=${category}`,
      )
      const data1 = await response1.json()

      setChannel(getChannel(data1))
      setFilteredData(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const calculateElapsedTime = (time) => {
    const currentDateTime = new Date()
    const newsDate = new Date(time)
    const elapsedMilliseconds = currentDateTime - newsDate
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000)
    const elapsedMinutes = Math.floor(elapsedSeconds / 60)
    const elapsedHours = Math.floor(elapsedMinutes / 60)
    const elapsedDays = Math.floor(elapsedHours / 24)

    if (elapsedSeconds < 60) {
      return `${elapsedSeconds} second${elapsedSeconds !== 1 ? 's' : ''} ago`
    } else if (elapsedMinutes < 60) {
      return `${elapsedMinutes} minute${elapsedMinutes !== 1 ? 's' : ''} ago`
    } else if (elapsedHours < 24) {
      return `${elapsedHours} hour${elapsedHours !== 1 ? 's' : ''} ago`
    } else {
      return `${elapsedDays} day${elapsedDays !== 1 ? 's' : ''} ago`
    }
  }

  const title = `All ${category}`

  const pageSize = 4

  const handleFilterChange = (event) => {
    const filter = event.target.value
    setSelectedFilter(filter)
  }

  const handleFilterChange1 = (event) => {
    const filter1 = event.target.value
    setSelectedFilter1(filter1)
  }

  const onPageChange = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    fetchData(selectedFilter1, selectedFilter)
  })

  const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize
    return items.slice(startIndex, startIndex + pageSize)
  }

  const paginatedPosts = paginate(filteredData, currentPage, pageSize)

  return (
    <div className={styles.container}>
      <title>{title}</title>
      <div className={styles.boxLeft}>
        <div className={styles.all}>เนื้อหาทั้งหมด</div>
        <div className={styles.filter}>
          <select
            value={selectedFilter1}
            onChange={handleFilterChange1}
            className={`${styles.select} ${styles.customSelect}`}
          >
            <option value="all news">All News</option>
            {channel.map((channel) => (
              <option key={channel.id} value={channel.channel}>
                {channel.channel}
              </option>
            ))}
          </select>
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className={`${styles.select} ${styles.customSelect} ${styles.secondSelect}`}
          >
            <option value="date">ใหม่ล่าสุด</option>
            <option value="views">ผู้ชม สูงสุดทั้งหมด</option>
          </select>
        </div>

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
                  width: '30%',
                  height: 'auto',
                  borderRadius: '10px',
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
                  <div className={styles.view}>
                    <p>{item.views} views</p>
                  </div>
                </div>
              </div>
            </Link>
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
        <Mostview category={category} />
      </div>
    </div>
  )
}

function getChannel(data) {
  const usedChannel = []
  const modifiedData = []

  data.forEach((item, index) => {
    const channel = item.channel
    if (!usedChannel.includes(channel)) {
      modifiedData.push({
        id: index,
        channel: channel,
      })
      usedChannel.push(channel)
      index++
    }
  })
  return modifiedData
}
