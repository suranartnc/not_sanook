'use client'
import React, { useState, useEffect, useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Image from 'next/image'
import styles from './relate.module.css'
import RightArrow from 'public/right.png'
import Clock from 'public/clock_icon.png'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function Relate() {
  const [data, setData] = useState([])
  const [posts, setPosts] = useState(data)
  const [hasMore] = useState(true)
  const params = useParams()
  const { category, channel, id } = params

  useEffect(() => {
    fetchData()
  }, [fetchData])

  let url = `http://localhost:3003/contents/?category=${category}&channel=${channel}&id_ne=${id}`
  const fetchData = useCallback(async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
  }, [url])

  const getMorePost = async () => {
    url += `&_sort=date&_order=desc&_start=${posts.length}&_limit=2`
    const res = await fetch(url)
    const newPosts = await res.json()
    setPosts((post) => [...post, ...newPosts])
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

  return (
    <div>
      <div className={styles.relate}>
        <div className={styles.relateTopic}>
          <h2>ข่าวที่เกี่ยวข้อง</h2>
          <Image
            className={styles.customIcon}
            src={RightArrow}
            alt="Arrow right icon"
          />
        </div>
        <div className={styles.divider} />
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePost}
          hasMore={hasMore}
          loader={<h3> Loading...</h3>}
          endMessage={<h4>Nothing more to show</h4>}
          className={styles.grid}
        >
          {posts?.map((item) => (
            <Link
              className={styles.relateCard}
              key={item.id}
              href={{
                pathname: `/blog/[id]`,
              }}
              as={`/blog/${item.id}`}
            >
              <Image
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '25vw', height: 'auto', borderRadius: '10px' }}
                alt="Related News image"
              />
              <div className={styles.relateDetail}>
                <h3 className={styles.relateText}>{item.title}</h3>
                <div className={styles.times}>
                  <Image alt="News image" src={Clock} width={20} height={20} />
                  <p>{calculateElapsedTime(item.date)}</p>
                </div>
              </div>
            </Link>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  )
}
