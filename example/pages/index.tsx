import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';
import CreateForm from '../components/CreateForm/CreateForm';
import { useState } from 'react';

export const AxieAnimation = dynamic(
  () => import('axie-animation').then(module => module.AxieAnimation),
  { ssr: false, loading: () => <></> },
);

const Home: NextPage = () => {

  const [axieId, setAxieId] = useState(1235)

  return (
    <div className={styles.container}>
      <Head>
        <title>Axie Animation</title>
        <meta
          name="description"
          content="Axie Animation NPM Package"
        />
        <link rel="icon" href="/axie.png" />
      </Head>
      
      <AxieAnimation axieId={axieId}/>

      <CreateForm setAxieId={setAxieId}/>
    </div>
  )
}

export default Home
