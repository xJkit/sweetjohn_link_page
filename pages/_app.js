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
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
