import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Icon } from "@iconify-icon/react";
import anime from "animejs";
import { useState } from "react";
import EightBall from "../components/EightBall";
import { Utilities } from "../utils/Utilities";
import { Animations } from "../utils/Animations";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Popup from "../components/Popup";

export default function Home() {
  const [answer, setAnswer] = useState<JSX.Element>();
  const [showPopup, setShowPopup] = useState<boolean>();

  const regex =
    /^(?:am|is|are|does|do|will|was|has|which|whose|who|where|how|when|why)|(?:\\?|\\uff1f)\$/g;

  return (
    <div>
      <Head>
        <title>Ins8ball</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col gap-7 pt-3 pb-10 items-center">
        <Popup isVisible={showPopup} onClose={() => setShowPopup(false)} />
        <div className="eightball">
          <EightBall answer={answer} />
        </div>
        <Formik
          initialValues={{ question: "" }}
          validationSchema={Yup.object().shape({
            question: Yup.string()
              .lowercase()
              .matches(regex, "Invalid Question!")
              .required("Required"),
          })}
          onSubmit={() => {
            const shake = Animations.shake();
            setAnswer(undefined);
            shake.play();

            setTimeout(() => {
              shake.pause();
              anime.set(".eightball", {
                translateX: 0,
              });
              setAnswer(Utilities.getAnswer());
              setTimeout(() => {
                setShowPopup(true);
              }, 1000);
            }, 1000);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.inputField}>
              <div className="flex flex-col flex-grow">
                <Field
                  className={
                    errors.question && touched.question
                      ? `${styles.inputBox} ${styles.inputBoxInvalid}`
                      : styles.inputBox
                  }
                  name="question"
                  type="text"
                  placeholder="ask a question!"
                />
                <ErrorMessage
                  name="question"
                  render={(msg) => (
                    <span className="text-red-600 mt-2">{msg}</span>
                  )}
                />
              </div>
              <button type="submit">
                <Icon
                  icon="majesticons:send"
                  width={66}
                  className={styles.sendBtn}
                />
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
