import { client } from "../../libs/client";
import styles from "./Blogid.module.css";

export default function Blogid({ blog }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{
          __html: `${blog.details}`
        }}
      />  
    </main>
  )
}

export async function getStaticPaths(){
  const data = await client.get({ endpoint: "news"});

  const paths = data.contents.map((content) => { return { params: {"id": content.id}} });
  // console.log(paths)
  return { paths, fallback: false };
}

export async function getStaticProps(context){
  const id = context.params.id;
  const data = await client.get({ endpoint: 'news', contentId: id});
  
  return {
    props: {
      blog: data,
    },
  };
}