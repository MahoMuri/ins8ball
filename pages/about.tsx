import Compile from "../assets/img/compile.svg";
import Iacademy from "../assets/img/iacademy.svg";
import Insight from "../assets/img/insight.svg";
import styles from "../styles/About.module.css";
import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>about</title>
      </Head>

      <div className="flex flex-col items-center gap-32 my-6">
        <div className="flex gap-10">
          <Insight />
          <Compile />
          <Iacademy />
        </div>

        <div className={styles.centerContent}>
          <div>
            This project is done in collaboration of
            <span className="font-bold">COMPILE </span>
            <span className="text-gray-600">x</span>
            <span className="font-bold"> INSIGHT</span> for the foundation week
            celebration of iACADEMY: &quot;<i>KUNG ANO MAN TO</i>&quot;
          </div>
          <div>
            <p>&copy; COMPILE x INSIGHT</p>
            <p>All rights reserved 2023.</p>
          </div>
        </div>

        <div className={styles.bottomContent}>
          <p className="text-neutral-600">developed by:</p>
          <table className="text-left">
            <tbody>
              <tr>
                <td className="pr-3 border-r border-gray-600">MahoMuri</td>
                <td className="px-3">Paolo Steven Santos</td>
                <td className="pl-3 border-l border-gray-600">
                  201901081@iacademy.edu.ph
                </td>
              </tr>
              <tr>
                <td className="pr-3 border-r border-gray-600">Rizuno</td>
                <td className="px-3">Felise Jann Sanchez</td>
                <td className="pl-3 border-l border-gray-600">
                  202001066@iacademy.edu.ph
                </td>
              </tr>
            </tbody>
          </table>
          <p className="text-neutral-600">COMPILE</p>
        </div>
      </div>
    </div>
  );
}
