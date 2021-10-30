import styles from '../styles/Home.module.css';
import { client } from "../libs/client";

import MainFeaturedPost from '../components/blog/MainFeaturedPost';
import CaseStudyList from 'components/casestudy/CaseStudyList';
import Member from '../components/blog/Member';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import About from 'components/about/About';
import AboutImages from 'components/about/AboutImages';
import News from 'components/news/News';



const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of",
  image: 'njenia2.png',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

// const componetIDList = {
//   news: "njenia-"
// }

const theme = createTheme();

export default function Home({ news, about, aboutImages, members, componentIDList }) {
  return (
    <div className={styles.container}>
      <div>
        <Container maxWidth="lg">
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <div id={componentIDList.filter((c) => c.component == 'News')[0].id}>
              <News news={news}></News>
            </div>
            <Divider sx={{ margin: '0 0 10px 0' }} />
            <div id={componentIDList.filter((c) => c.component == 'About')[0].id}>
              <About about={about} ></About>
              <AboutImages aboutImages={aboutImages}></AboutImages>
            </div>
            <Divider sx={{ margin: '0 0 10px 0' }} />
            <div id={componentIDList.filter((c) => c.component == 'Casestudy')[0].id}>
              <Typography component="h2" variant="h4" align="left" sx={{ fontWeight: "bold", margin: "0 0 10px 0" }}>Case Study</Typography>
              <CaseStudyList />
            </div>
            <Divider sx={{ margin: '10px' }} />
            <div id={componentIDList.filter((c) => c.component == 'Member')[0].id}>
              <Typography component="h2" variant="h4" align="left" sx={{ margin: '0 0 10px 0', fontWeight: "bold" }} >Member</Typography>
              <Grid container spacing={4}>
                <Member members={members} />
              </Grid>
            </div>
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
