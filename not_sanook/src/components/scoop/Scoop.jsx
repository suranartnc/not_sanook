import Link from "next/link";
import styles from "./scoop.module.css";
import Image from "next/image";

async function getData() {
  const response = await fetch(
    `http://localhost:3003/contents/?category=scoop&_limit=5`
  );
  const data = await response.json();
  return data;
}

const RowColumn = async () => {
  const data = await getData();

  const firstCategory = data[0]?.category;
  const firstColumn = data.slice(0, 1);
  const secondColumn = data.slice(1, 5);

  return (
    <div className={styles.container}>
      <Link href={`/${firstCategory}`} className={styles.title}>
        <div className={styles.category}>{firstCategory}</div>
        <Image src="/right.png" width={25} height={25} alt="right" />
      </Link>
      <div className={styles.separator} />
      <div className={styles.categoryBox}>
        <div className={styles.topNews}>
          {firstColumn.map((item) => (
            <Link key={item.id} href={`/${item.id}`}>
              <img src={item.image} className={styles.topImage} />
              <h3 className={styles.topText}>{item.title}</h3>
            </Link>
          ))}
        </div>

        <div className={styles.moreNews}>
          {secondColumn.map((item) => (
            <Link key={item.id} className={styles.moreBox} href={`/${item.id}`}>
              <img
                src={item.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
              <h3 className={styles.moreText}>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RowColumn;
