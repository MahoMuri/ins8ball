import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Ball from "../assets/img/ball.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>ins8ball</title>
      </Head>
      <div className="flex justify-center">
        <Ball />
      </div>
    </>
  );
}
