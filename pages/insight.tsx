import Discord from "../assets/img/icon-discord.svg";
import Email from "../assets/img/icon-email.svg";
import Facebook from "../assets/img/icon-facebook.svg";
import Instagram from "../assets/img/icon-instagram.svg";
import InsightLogo from "../assets/img/insight.png";
import TestApology from "../assets/img/test-apology-langauge.png";
import style from "../styles/Insight.module.css";
import TestLoveStyles from "../assets/img/test-love-styles.png";
import TestEnneagram from "../assets/img/test-enneagram.png";
import TestCareer from "../assets/img/test-career.png";
import TestWork from "../assets/img/test-work-assessment.png";
import Image from "next/image";
import Link from "next/link";

export default function Insight() {
  return (
    <div>
      <div className="flex items-center justify-center font-firaCode font-thin mt-20 mb-20">
        <div className="lg:w-[1000px] flex justify-center items-center gap-7 mb-10">
          <Image src={InsightLogo} alt="insight logo" height={300} />
          <div className="text-ins8ball-yellow">
            <h1 className="text-2xl">iNSIGHT</h1>
            <p className="mt-4 max-w-[40ch] text-white">
              iNSIGHT is an organization led by iACADEMY Psychology Majors who
              aim to help. As an organization, our priority is to embody the
              ideals of Psychology in fostering growth among students.
            </p>
            <div className="flex gap-4 mt-5">
              <Link href="mailto:insight@iacademy.edu.ph">
                <Email />{" "}
              </Link>
              <Link href="https://discord.gg/skTDXVxV4u">
                <Discord />{" "}
              </Link>
              <Link href="https://instagram.com/iacademyinsight/">
                <Instagram />{" "}
              </Link>
              <Link href="https://facebook.com/iACiNSIGHT">
                <Facebook />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-ins8ball-green font-firaCode text-center mt-10">
        PERSONALITY TESTS{" "}
      </h1>

      {/* row title */}
      <h2 className={style.sectionHeader}>Love</h2>
      {/* col 1 */}
      <div className="flex items-center justify-center font-firaCode mt-5">
        <div className="place-center auto-rows-max md:auto-rows-min gap-10">
          <div className="grid place-items-center rounded-md h-[300px] w-[300px] mb-10">
            <div className=" rounded-xl ">
              <Image
                src={TestLoveStyles}
                alt="truity"
                height={250}
                className="rounded-xl"
              ></Image>
            </div>
            <Link
              href="https://www.truity.com/test/love-styles-test"
              target={"_blank"}
              className={style.cardLink}
            >
              7 Love Language Styles
            </Link>
          </div>
        </div>
        {/* col 2 */}
        <div className="grid place-items-center rounded-md h-[300px] w-[300px] mb-10">
          <div className=" rounded-xl ">
            <Image
              src={TestApology}
              alt="truity"
              height={250}
              className="rounded-xl"
            ></Image>
          </div>
          <Link
            href="https://5lovelanguages.com/quizzes/apology-language"
            target={"_blank"}
            className={style.cardLink}
          >
            Apology Language
          </Link>
        </div>
      </div>
      {/* end of row */}
      <h2 className={style.sectionHeader}>Career</h2>
      {/* col 1 */}
      <div className="flex items-center justify-center font-firaCode mt-5">
        <div className="place-center grid grid-cols-1 grid-flow-row-dense grid-rows-1 auto-rows-max md:auto-rows-min gap-10">
          <div className="grid place-items-center rounded-md h-[300px] w-[300px] mb-10">
            <Image
              src={TestCareer}
              alt="career"
              height={240}
              className="rounded-xl"
            ></Image>

            <Link
              href="https://www.truity.com/test/career-personality-profiler-test"
              target={"_blank"}
              className={`${style.cardLink} w-[20ch]`}
            >
              Career Personality Profiler
            </Link>
          </div>
        </div>
      </div>
      {/* end of row */}
      <h2 className={style.sectionHeader}>
        Future in Academics, Money or Business
      </h2>
      {/* col 1 */}
      <div className="flex items-center justify-center font-firaCode mt-5">
        <div className="place-center grid grid-cols-1 grid-flow-row-dense grid-rows-1 auto-rows-max md:auto-rows-min gap-10">
          <div className="grid place-items-center rounded-md h-[300px] w-[300px] mb-10">
            <Image
              src={TestEnneagram}
              alt="enneagram test"
              height={250}
              className="rounded-xl"
            ></Image>

            <Link
              href="https://www.truity.com/test/enneagram-personality-test"
              target={"_blank"}
              className={`${style.cardLink} w-[20ch]`}
            >
              The Enneagram Personality Test
            </Link>
          </div>
        </div>
      </div>
      {/* end of row */}
      <h2 className={style.sectionHeader}>Team Personality and Work Style</h2>
      {/* col 1 */}
      <div className="flex items-center justify-center font-firaCode mt-5">
        <div className="place-center grid grid-cols-1 grid-flow-row-dense grid-rows-1 auto-rows-max md:auto-rows-min gap-10">
          <div className="grid place-items-center rounded-md h-[300px] w-[300px] mb-10">
            <Image
              src={TestWork}
              alt="enneagram test"
              height={250}
              className="rounded-xl"
            ></Image>

            <Link
              href="https://www.truity.com/test/disc-personality-test"
              target={"_blank"}
              className={style.cardLink}
            >
              Work Assessment
            </Link>
          </div>
        </div>
      </div>
      {/* end of row */}

      <div className="mt-10 mb-20 text-firaCode text-xs text-ins8ball-gray flex flex-col justify-center items-center ">
        <p className="">Did not find what you&apos;re looking for? </p>
        <p>
          <span>
            <Link href="mailto:compile@iacademy.edu.ph">
              <b>contact</b>
            </Link>
          </span>{" "}
          the devs for an update!
        </p>
      </div>
    </div>
  );
}
