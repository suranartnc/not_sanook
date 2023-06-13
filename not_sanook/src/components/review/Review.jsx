import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './review.module.css';
import Image from "next/image";

const RowColumn = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setItems(data);
    };

    fetchData();
  }, []);

  const getData = async (params) => {
    // Your async function to fetch data based on params
    // Replace this with your actual implementation
    const response = await fetch(`http://localhost:3003/contents/?category=review&_limit=5`);
    const data = await response.json();
    return data;
  };

  const firstCategory = items[0]?.category;
  const firstColumn = items.slice(0, 1);
  const secondColumn = items.slice(1, 3);
  const thirdColumn = items.slice(3, 5);

  return (
    <div className={styles.container}>
        <div className={styles.row}>
          <Link href={`/${firstCategory}`}>
            <div className={styles.item}>
              <div className={styles.category}>{firstCategory}</div>
                <div className={styles.arrow}>
                  <Image src="/right.png" width={25} height={25} alt="right" />
                </div>
            </div>
          </Link>
        </div>
        <div className={styles.separator}></div>
      <div className={styles.column}>
        {firstColumn.map((item) => (
          <Link key={item.id} href={`/${item.id}`}>
            <div className={styles.item}>
              <div className={styles.bigImageContainer}>
                <img src={item.image} alt={item.text} className={styles.bigImage} />
              </div>
              <p className={styles.bigText}>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className={`${styles.column} ${styles.smallColumn}`}>
        {secondColumn.map((item) => (
          <Link key={item.id} href={`/${item.id}`}>
            <div className={styles.item}>
                {/* <div className={styles.smallImageContainer}> */}
                    <img src={item.image} alt={item.text} className={styles.smallImage} />
                {/* </div> */}
              <p className={styles.smallText}>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className={`${styles.column} ${styles.smallColumn}`}>
        {thirdColumn.map((item) => (
          <Link key={item.id} href={`/${item.id}`}>
            <div className={styles.item}>
              <img src={item.image} alt={item.text} className={styles.smallImage} />
              <p className={styles.smallText}>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RowColumn;
