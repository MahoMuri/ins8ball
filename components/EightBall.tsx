import BallAns from "../assets/img/ball-answer.svg";
import Ball from "../assets/img/ball.svg";
import styles from "../styles/EightBall.module.css";

type EightBallProps = {
  answer: JSX.Element | undefined;
};
export default function EightBall({ answer }: EightBallProps) {
  return (
    <div>
      {answer ? (
        // 8 Ball with answer
        <div className="relative">
          <BallAns />
          <div className={styles.eightball}>{answer}</div>
        </div>
      ) : (
        // Without answer
        <Ball />
      )}
    </div>
  );
}
