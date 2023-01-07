import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Ball from "../assets/img/ball.svg";
import { Icon } from "@iconify-icon/react";

export default function Home() {
  const sendAlert = () => {
    alert("This works");
  };
  return (
    <>
      <Head>
        <title>ins8ball</title>
      </Head>
      <div className="flex flex-col gap-7 pt-3 pb-10 items-center">
        <Ball />
        <div className={styles.inputField}>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="tell me what you think?"
          />
          <Icon
            icon="majesticons:send"
            width={66}
            className={styles.sendBtn}
            onClick={sendAlert}
          />
        </div>
      </div>
    </>
  );
}
