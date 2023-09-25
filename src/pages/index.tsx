import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ImageFeed from "@/components/ImageFeed";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rick and Morty Image Feed</title>
        <meta
          name="description"
          content="Rick and Morty Character Image Feed"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.titleText}>
        <h1 className="title-text">Rick and Morty Image Feed</h1>
        <ImageFeed />
      </main>

      <footer>{/* Footer content */}</footer>
    </div>
  );
}
