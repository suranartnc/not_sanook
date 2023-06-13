import Link from "next/link";
import styles from "./mostbar.module.css";

async function getData() {
    const response = await fetch(
      `http://localhost:3003/contents/?_sort=views&_order=desc&_limit=5`
    ); // replace with your API endpoint
    const data = await response.json();
    return data;
}

const Mostbar = async () => {
  const data = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.most}>Most viewed</h1>
      <div className={styles.box}>
        <div className={styles.rowItem}>
          {data.map((item, index) => (
            <Link
              key={item.id}
              href={`/${item.id}`}
              className={styles.columnItem}
            >
              <h3 className={styles.number}>{index + 1}</h3>
              <div className={styles.cardItem}>
                <img
                  src={item.image}
                  alt={item.text}
                  className={styles.image}
                />
                <p className={styles.text}>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mostbar;
