import COMPILELogo from "../assets/img/compile.svg";
import IACLogo from "../assets/img/iacademy.svg";
import InsightLogo from "../assets/img/insight.svg";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex p-5 gap-4">
      <Link href={"/"}>
        <div className="flex font-poppins tracking-[-0.5rem] font-bold">
          <h1 className="text-ins8ball-yellow text-8xl">ins8</h1>
          <h1 className="-ml-4 text-ins8ball-green text-8xl">ball</h1>
        </div>
      </Link>
      <div className={styles.navlinks}>
        <div>
          <Link className={styles.navlink} href="/about">
            about
          </Link>
        </div>
        <div>
          <Link className={styles.navlink} href="/compile">
            compile
          </Link>
        </div>
        <div>
          <Link className={styles.navlink} href="/insight">
            insight
          </Link>
        </div>
      </div>
      <div className="flex gap-2 align-top">
        <div>
          <InsightLogo />
        </div>
        <div>
          <COMPILELogo />
        </div>
        <div>
          <IACLogo />
        </div>
      </div>
    </div>
  );
}
