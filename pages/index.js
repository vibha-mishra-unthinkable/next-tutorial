import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <h1>Welcome to our home page</h1>
      <div>Next JS tutorial</div>
      <a href="https://nextjs.org" className={styles.readMore}>
        Read More
      </a>
    </div>
  );
}
