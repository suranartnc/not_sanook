import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './mostbar.module.css';

const getData = async (params) => {
  // Use the provided parameters to fetch data asynchronously
  try {
    const response = await fetch(`http://localhost:3003/contents/?_sort=views&_order=desc&_limit=5`); // replace with your API endpoint
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching row data:', error);
    return [];
  }
};

const Mostbar = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const params = 'example'; // replace with your parameters
      const data = await getData(params);
      setItems(data);
    }

    fetchData();
  }, []);

  if (items.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
        <h1 className={styles.most}>Most viewed</h1>
         <div className={styles.box}>
         {/* <h1 className={styles.most}>Most viewed</h1> */}
                <div className={styles.row}>
                {items.map((item, index) => (
                    <Link key={item.id} href={`/${item.id}`} className={styles.column}>
                    {/* <div className={styles.column}> */}
                        <span className={styles.rowNumber}>{index + 1}</span>
                        <img src={item.image} alt={item.text} className={styles.itemImage} />
                    {/* </div> */}
                    <p className={styles.itemText}>{item.title}</p>
                    </Link>
                ))}
                </div>

        </div>
    </div>
  );
};

export default Mostbar;
