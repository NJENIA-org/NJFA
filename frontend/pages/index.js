import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import { client } from "../libs/client"
import { Buton, Button, ButtonGroup } from '@mui/material'
import Blog from "../components/blog/Blog"

export default function Home( { blog, cms } ) {
  // console.log(blog.blog)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Blog blog={blog}></Blog>
      </div>
      <Footer></Footer>
    </div>
  );
}

export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "blog"});
  return {
    props: {
      blog: data.contents,
      cms: {
        posts: data.contents.map((post) => post.title)
      }
    }
  }
  // return {
  //   props: {
  //     blog: data.contents
  //   }
  // };
}
