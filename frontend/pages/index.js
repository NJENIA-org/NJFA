import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { client } from "../libs/client";

import Footer from '../components/blog/Footer';
import Header from '../components/blog/Header';
import MainFeaturedPost from '../components/blog/MainFeaturedPost';
import FeaturedPost from '../components/blog/FeaturedPost';
import Main from '../components/blog/Main';
import Sidebar from '../components/blog/Sidebar';

import { Buton, Button, ButtonGroup } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Blog from "../components/blog/Blog";
import About from '../components/about/About';
import AboutImages from '../components/about/AboutImages';
import News from '../components/news/News';

const sections = [
  { title: 'About', url: '#' },
  { title: 'Case Study', url: '#' },
  { title: 'Member', url: '#' },
  { title: 'Links', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Home({ news, about, aboutImages, blog, caseStudies, cms }) {
  const cases = caseStudies;
  return (
    <div className={styles.container}>
      <Head>
        <title>NJFA Blog Top</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header title="NJENIA" sections={sections} />
            <main>
              <MainFeaturedPost post={mainFeaturedPost} />
              <News news={news}></News>
              <About about={about} ></About>
              <AboutImages aboutImages={aboutImages}></AboutImages>
              <Grid container spacing={4}>
                {cases.map((c) => (
                  <FeaturedPost key={c.title} case={c} />
                ))}
              </Grid>
              <Grid container spacing={5} sx={{ mt: 3 }}>
                <Sidebar
                  title={sidebar.title}
                  description={sidebar.description}
                  archives={sidebar.archives}
                  social={sidebar.social}
                />
              </Grid>
            </main>
          </Container>
          <Footer
            title="Footer"
            description="Something here to give the footer a purpose!"
          />
        </ThemeProvider>
      </div>
      <Footer></Footer>
    </div>
  );
}

export const getStaticProps = async () => {
  const about = await client.get({ endpoint: 'about' });
  const aboutImages = await client.get({ endpoint: 'about_image' });
  const news = await client.get({ endpoint: "news" });
  const caseStudy = await client.get({ endpoint: "casestudy" });

  let filtersCaseIDsQuery = '';
  // console.log(caseStudy);
  for (const i in caseStudy.contents) {
    filtersCaseIDsQuery = `${filtersCaseIDsQuery}casestudy_id[equals]${caseStudy.contents[i].id}`;
    if (i != caseStudy.contents.length - 1) {
      filtersCaseIDsQuery += '[or]';
    }
  }

  const caseStudyImages = await client.get({
    endpoint: "casestudy_image",
    queries: {
      filters: filtersCaseIDsQuery,
      fields: 'casestudy_id,category,image'
    }
  });

  const caseStudies = [];
  for (const c of caseStudy.contents) {
    caseStudies.push({
      id: c.id,
      title: c.title,
      summary: c.summary,
      details: c.details,
      createdAt: c.createdAt,
      images: caseStudyImages.contents.filter((im) => im.casestudy_id.id == c.id)
    });
  }

  return {
    props: {
      about: about.contents,
      aboutImages: aboutImages.contents,
      caseStudies: caseStudies,
      news: news.contents
      // cms: {
      //   posts: news.contents.map((post) => post.title)
      // }
    }
  }
}
