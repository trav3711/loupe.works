import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loupe Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Loupe Works</h1>
      </main>

      <footer className={styles.footer}>
      <Link href='/about'><a>About</a></Link>
      </footer>
    </div>
  )
}
