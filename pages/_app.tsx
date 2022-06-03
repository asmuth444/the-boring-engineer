import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";
import Layout from "../components/layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boring Engineer</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
