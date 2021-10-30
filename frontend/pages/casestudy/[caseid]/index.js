import * as React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import styles from "./Casestudy.module.css";

const fetcher = async (url) => {
  let caseResponse = await fetch(url);
  caseResponse = await caseResponse.json();

  return caseResponse;
}

const Casestudy = () => {
  const router = useRouter();
  const { caseid } = router.query;

  const { data, error } = useSWR(`/api/casestudy/details/${caseid}`, fetcher);
  if (!data) return <div>loading...</div>
  if (error) return <div>failed.</div>

  const caseData = data.contents[0];

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>{caseData.title}</h1>
      <p className={styles.publishedAt}>{(new Date(caseData.publishedAt)).toLocaleString()} 更新</p>
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{
          __html: `${caseData.details}`
        }}
      />
    </main>
  )
};

export default Casestudy;
