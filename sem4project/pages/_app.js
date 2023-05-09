import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';

import 'bootstrap-icons/font/bootstrap-icons.css';


export default function App({ Component, pageProps, session }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
       </Head>

      <Script src="/bootstrap.bundle.min.js"/>

      <SessionProvider session={session}>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  )
}
