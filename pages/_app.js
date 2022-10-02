import { ChakraProvider } from '@chakra-ui/react';
import theme from 'config/theme';
import Head from 'next/head';
import GA from '../components/GA';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GA />
      <Head>
        <title>甜約翰 Sweet John</title>
        <meta charset="utf-8" />
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
