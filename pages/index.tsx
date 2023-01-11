import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Icon } from "@iconify-icon/react";
import { ChangeEvent, InvalidEvent, useState } from "react";
import EightBall from "../components/EightBall";

export default function Home() {
  const [answer, setAnswer] = useState<JSX.Element>();
  const [question, setQuestion] = useState<string>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  const ask = () => {
    // TODO: Improve error handling, add anime.js for animation
    if (
      !question?.match(
        /^(?:am|is|are|does|do|will|was|has|what|which|whose|who|where|how|when|why)|(?:\\?|\\uff1f)\$/g
      )
    ) {
      alert("Not a valid question!");
    } else {
      const possibleAnswers = [
        <p>
          It is <br /> certain
        </p>,
        <p>It is decidedly so</p>,
        <p>Without a doubt</p>,
        <p>
          Yes,
          <br />
          definitely{" "}
        </p>,
        <p>You may rely on it</p>,
        <p>
          As I see it,
          <br />
          yes
        </p>,
        <p>
          Outlook <br />
          good
        </p>,
        <p>Yes</p>,
        <p>Signs point to yes</p>,
        <p>Reply hazy try again</p>,
        <p>Ask again later</p>,
        <p>Better not tell you now</p>,
        <p>
          Cannot predict <br /> now
        </p>,
        <p>Concentrate and ask again</p>,
        <p>Don&apos;t count on it</p>,
        <p>
          My reply
          <br />
          is no
        </p>,
        <p>My sources say no</p>,
        <p>
          Most <br /> likely
        </p>,
        <p>Outlook not so good</p>,
        <p>
          Very
          <br />
          doubtful
        </p>,
      ];

      setAnswer(
        possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]
      );
    }
  };

  return (
    <>
      <Head>
        <title>ins8ball</title>
      </Head>
      <div className="flex flex-col gap-7 pt-3 pb-10 items-center">
        <EightBall answer={answer} />
        <div className={styles.inputField}>
          <input
            type="text"
            id="question"
            className={styles.inputBox}
            onChange={handleChange}
            placeholder="tell me what you think?"
          />
          <Icon
            icon="majesticons:send"
            width={66}
            className={styles.sendBtn}
            onClick={ask}
          />
        </div>
      </div>
    </>
  );
}
