import styles from 'styles/Home.module.css';
import { client } from "libs/client";

import BlogTopImage from 'components/blogtop/BlogTopImage';
import CaseStudyList from 'components/casestudy/CaseStudyList';
import Member from 'components/member/Member';

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import About from 'components/about/About';
import AboutImages from 'components/about/AboutImages';
import News from 'components/news/News';


const theme = createTheme();

export default function Home({ about, aboutImages, members, componentIDList, blogTopImageProps }) {
  return (
    <div className={styles.container}>
      <div>
        <Container maxWidth="lg">
          <main>
            <BlogTopImage post={blogTopImageProps} />
            <div id={componentIDList.filter((c) => c.component == 'News')[0].id}>
              <News />
            </div>
            <Divider sx={{ margin: '0 0 10px 0' }} />
            <div id={componentIDList.filter((c) => c.component == 'About')[0].id}>
              <About about={about} ></About>
              <AboutImages aboutImages={aboutImages}></AboutImages>
            </div>
            <Divider sx={{ margin: '0 0 10px 0' }} />
            <div id={componentIDList.filter((c) => c.component == 'Casestudy')[0].id}>
              <Typography component="h2" variant="h4" align="left" sx={{ fontSize: "5vh", fontWeight: "bold", margin: "0 0 10px 0" }}>Case Study</Typography>
              <CaseStudyList />
            </div>
            <Divider sx={{ margin: '10px' }} />
            <div id={componentIDList.filter((c) => c.component == 'Member')[0].id}>
              <Typography component="h2" variant="h4" align="left" sx={{ fontSize: "5vh", fontWeight: "bold", margin: "0 0 10px 0" }}>Member</Typography>
              <Member members={members} />
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
  const members = await client.get({ endpoint: "member" });

  return {
    props: {
      about: about.contents,
      aboutImages: aboutImages.contents,
      members: members.contents
    }
  }
}
