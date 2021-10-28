import * as React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import getConfig from 'next/config';
import styles from "./Casestudy.module.css";
// import { client } from "../../libs/client";
import { useContext } from 'react';

// import { client } from '../../libs/client';
import { useState } from 'react';

const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

const fetcher = async (caseid) => {
  const baseUrl = `/api/casestudy/details/${caseid}`;

  let caseResponse = await fetch(baseUrl);
  caseResponse = await caseResponse.json();
  console.log("caseresponse")
  console.log(caseResponse);

  return caseResponse;
  // return caseResponse.contents[0];
}

const Casestudy = () => {
  const router = useRouter();
  // if (router.isFallback) {
  //   return <div>Loading...</div>
  // }
  const { caseid } = router.query;

  // const { data, error } = useSWR(`${API_URL}/casestudy/${caseid}`, fetcher(caseid));
  const { data, error } = useSWR(caseid, fetcher);
  // const { data, error } = useSWR(`/api/casestudy/details/${caseid}`);
  if (!data) return <div>loading...</div>
  if (error) return <div>failed.</div>
  // console.log(props);
  // const casestudy = data;
  // console.log(data);
  const caseData = data.contents[0];

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>{caseData.title}</h1>
      <p className={styles.publishedAt}>{caseData.publishedAt}</p>
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
