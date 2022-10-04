import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic';
import CreateForm from '../components/CreateForm/CreateForm';
import { useEffect, useState } from 'react';

export const AxieAnimation = dynamic(
  () => import('axie-animation').then(module => module.AxieAnimation),
  { ssr: false, loading: () => <></> },
);

const Home: NextPage = () => {

  useEffect(() => {

    function updateSize() {

      if(window.innerWidth<=600){
        setAxieStyle({
          width: 300,
          height: 500,
          transparent: true,
          resolution: 1
        })
        setScale(0.9)
      }else{
        setAxieStyle({
          width: 600,
          height: 500,
          transparent: true,
          resolution: window.devicePixelRatio
        })
        setScale(1)
      }

    }

    window.addEventListener('resize', updateSize);

    updateSize();

    return () => window.removeEventListener('resize', updateSize);

  }, []);
    
  const [axieId, setAxieId] = useState(1235)

  const [axieStyle, setAxieStyle] = useState<any>()

  const [scale, setScale] = useState<any>()

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
      
      <AxieAnimation axieId={axieId} scaleAxie={scale} style={axieStyle} />

      <CreateForm setAxieId={setAxieId}/>
    </div>
  )
}

export default Home
