import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../components/common/Header';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../styles/theme';
import createEmotionCache from '../src/createEmotionCache';
import Footer from '../components/common/Footer';
import { Container } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const componentIDList = [
  { component: 'News', id: 'njenia-news' },
  { component: 'About', id: 'njenia-about' },
  { component: 'Casestudy', id: 'njenia-casestudy' },
  { component: 'Member', id: 'njenia-member' }
]

const sections = [
  { title: 'News', url: `#${componentIDList.filter((c) => c.component == 'News')[0].id}` },
  { title: 'About', url: `#${componentIDList.filter((c) => c.component == 'About')[0].id}` },
  { title: 'Case Study', url: `#${componentIDList.filter((c) => c.component == 'Casestudy')[0].id}` },
  { title: 'Member', url: `#${componentIDList.filter((c) => c.component == 'Member')[0].id}` }
];

const socials = [
  { name: 'GitHub', icon: GitHubIcon, url: "https://github.com/NJENIA-org" },
  { name: 'Twitter', icon: TwitterIcon, url: "https://twitter.com/NJENIA_njlm" }
];

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  pageProps["componentIDList"] = componentIDList;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>NJENIA Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="NJENIA" sections={sections} />
          <Component {...pageProps} />
          <Footer
            title="NJENIA"
            copyright="NJENIA"
            description="to be a Jenio..."
            socials={socials}
          />
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};