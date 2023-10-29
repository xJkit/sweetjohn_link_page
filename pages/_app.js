import Head from 'next/head';
import GA from '../components/GA';

import '../global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GA />
      <Head>
        <title>甜約翰 Sweet John</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
