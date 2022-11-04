import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Main from '../components/Main';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Connect</title>
        <meta name="description" content="Connect all the points" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Main />
      </main>
    </div>
  )
};

export default Home;
