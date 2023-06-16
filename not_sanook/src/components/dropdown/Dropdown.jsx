'use client'
import React, { useState, useEffect } from 'react'
import styles from './dropdown.module.css'
import Link from 'next/link'

export default function Dropdowm() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3003/contents/`)
      const data = await response.json()
      setData(getCategoryAndChannel(data))
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  return (
    <div className={styles.navLeft}>
      {data.map((category) => (
        <div className={styles.dropdown} key={category.id}>
          <Link
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
                  pathname: `/[category]/[channel]`,
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
  )
}

function getCategoryAndChannel(data) {
  const usedCategories = []
  const modifiedData = []

  function getChannelURL(category, channel) {
    return `/${category}/${channel}`
  }

  data.forEach((item, index) => {
    const category = item.category
    const channel = item.channel

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
      })

      usedCategories.push(category)
      index++
    } else {
      const categoryIndex = modifiedData.findIndex(
        (entry) => entry.category === category,
      )
      const existingChannel = modifiedData[categoryIndex].channels.find(
        (ch) => ch.name === channel,
      )

      if (!existingChannel) {
        const channelId = modifiedData[categoryIndex].channels.length + 1
        modifiedData[categoryIndex].channels.push({
          id: channelId,
          name: channel,
          url: getChannelURL(category, channel),
        })
      }
    }
  })
  return modifiedData
}
