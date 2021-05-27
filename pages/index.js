import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
        家具や家電を楽に選べる
        </h1>

        <p className={styles.description}>
          あなたの部屋に合う家具や家電をAIが選びます
        </p>
      </main>

      <Footer />
    </div>
  )
}
