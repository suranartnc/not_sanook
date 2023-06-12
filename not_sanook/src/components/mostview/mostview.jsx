import Image from "next/image";
import styles from "./mostview.module.css";

async function getData(category, channel, id) {
  let url = "http://localhost:3003/contents/?_limit=3&_order=desc&";
  if (category) url += `category=${category}&`;
  if (channel) url += `channel=${channel}&`;
  if (id) url += `id_ne=${id}`;

  const response = await fetch(url);
  return response.json();
}

const Mostview = async ({ category, channel, id }) => {
  const data = await getData(category, channel, id);

  return (
    <div className={styles.mostview}>
      <h3>Most viewed</h3>
      {data.map((item) => (
        <div className={styles.mvCard}>
          <div className={styles.stack}>
            <Image
              src={item.image}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
              alt="Most Viewed News image"
            />
            <div className={styles.view}>
              <p>{item.views} views</p>
            </div>
          </div>
          <h5 className={styles.mvTitle}>{item.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default Mostview;
