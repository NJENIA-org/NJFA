import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../components/blog/Header';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from './theme';
import createEmotionCache from '../src/createEmotionCache';
import Footer from '../components/blog/footer';
import { Container } from '@mui/material';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const sections = [
  { title: 'About', url: '#' },
  { title: 'Case Study', url: '#' },
  { title: 'Member', url: '#' },
  { title: 'Links', url: '#' },
];

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

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
            title="Footer"
            description="Something here to give the footer a purpose!"
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