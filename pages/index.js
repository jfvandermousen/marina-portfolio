import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Marina Ermanni | Home</title>
        <meta name="description" content="Collages portfolio of Marina Ermanni" />
        <meta name="keywords" content="Marina Ermanni, collages, portfolio, artistic, composition, paper, photographs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Image className="" 
              src='/1.jpg' 
              alt="error page turn back" 
              height={410} width={300}
              layout='intrinsic'
              />
              <Image className="" 
            src='/2.jpg' 
            alt="error page turn back" 
            height={775} width={600}
            layout='intrinsic'
            />
            <Image className="" 
            src='/3.jpg' 
            alt="error page turn back" 
            height={410} width={300}
            />

      </div>
 </div>
  )
}
