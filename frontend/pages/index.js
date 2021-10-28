import styles from '../styles/Home.module.css';
import { client } from "../libs/client";

import MainFeaturedPost from '../components/blog/MainFeaturedPost';
import CaseStudyList from '../components/blog/CaseStudyList';
import Sidebar from '../components/blog/Sidebar';
import Member from '../components/blog/Member';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import About from '../components/about/About';
import AboutImages from '../components/about/AboutImages';
import News from '../components/news/News';



const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

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

export default function Home({ news, about, aboutImages, members}) {
  console.log(news)
  return (
    <div className={styles.container}>
      <div>
          <Container maxWidth="lg">
            <main>
              <MainFeaturedPost post={mainFeaturedPost} />
              <News news={news}></News>
              <Divider sx={{ margin: '0 0 10px 0' }}/>
              <About about={about} ></About>
              <AboutImages aboutImages={aboutImages}></AboutImages>
              <Divider sx={{ margin: '0 0 10px 0' }} />
              <Typography component="h2" variant="h4" align="left" sx={{ fontWeight: "bold"}}>Case Study</Typography>
              <Grid container spacing={4} justifyContent='center'>
                <CaseStudyList />
              </Grid>
              <Divider sx={{ margin: '10px' }} />
              <Typography component="h2" variant="h4" align="left" sx={{ margin: '0 0 10px 0', fontWeight: "bold" }} >Member</Typography>
              <Grid container spacing={4}>
                <Member members={members} />
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
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const about = await client.get({ endpoint: 'about' });
  const aboutImages = await client.get({ endpoint: 'about_image' });
  const news = await client.get({ endpoint: "news" });
  const members = await client.get({ endpoint: "member" });

  return {
    props: {
      about: about.contents,
      aboutImages: aboutImages.contents,
      news: news.contents,
      members: members.contents
    }
  }
}
