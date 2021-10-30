import * as React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import styles from "./News.module.css";


const newsFetcher = async (url) => {

  let caseResponse = await fetch(url);
  caseResponse = await caseResponse.json();

  return caseResponse;
}

const NewsDetails = () => {
  const router = useRouter();
  const { newsid } = router.query;

  const { data, error } = useSWR(`/api/news/details/${newsid}`, newsFetcher);
  if (!data) return <div>loading...</div>
  if (error) return <div>failed.</div>

  const newsData = data.contents[0];

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>{newsData.title}</h1>
      <p className={styles.publishedAt}>{(new Date(newsData.publishedAt)).toLocaleString()} 更新</p>
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{
          __html: `${newsData.details}`
        }}
      />
    </main>
  )
};

export default NewsDetails;
