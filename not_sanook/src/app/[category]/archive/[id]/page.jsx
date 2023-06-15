import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";

async function getData(category) {
  const res = await fetch(`http://localhost:3003/contents/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Right =  () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.category || params.channel) {
      fetchData();
    }
  }, [params.category, params.channel]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3003/contents/?category=${params.category}&channel=${params.channel}`
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

  const title = `All ${params.channel}`;

  return (
    <div className={styles.mainContainer}>
      <title>{title}</title>
      {data.map((item) => (
        <Link href={`/blog/[id]`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Right;
