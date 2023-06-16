"use client";
import React, { useRef, useState, useCallback } from "react";
import searchIcon from "public/search_icon.png";
import styles from "./search.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Search() {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState();
  const [active, setActive] = useState(false);
  const searchRef = useRef(null);

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(`http://localhost:3003/contents/?title_like=${query}&_limit=5`)
        .then((res) => res.json())
        .then((res) => {
          setResult(res);
        });
    } else {
      setResult([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <div className={styles.dropdown}>
      <input
        className={styles.input}
        onChange={onChange}
        onFocus={onFocus}
        value={query}
        type="text"
        placeholder="Search"
      />
      {active && result?.length > 0 && (
        <div className={styles.inputContents}>
          {result.map((item) => (
            <Link
              key={item.id}
              href={{
                pathname: `/blog/[id]`,
              }}
              as={`/blog/${item.id}`}
            >
              <h5 className={styles.inputResult}>{item.title}</h5>
            </Link>
          ))}
        </div>
      )}
      <Image
        className={styles.inputIcon}
        src={searchIcon}
        width={20}
        height={20}
        alt="Search icon"
      />
    </div>
  );
}
