import Discord from "../assets/img/icon-discord.svg";
import Email from "../assets/img/icon-email.svg";
import Facebook from "../assets/img/icon-facebook.svg";
import Instagram from "../assets/img/icon-instagram.svg";
import CompileLogo from "../assets/img/compile.png";
import Image from "next/image";

export default function Compile() {
  return (
    <div className="flex items-center justify-center font-firaCode font-thin h-[calc(100vh-256px-60px)] ">
      <div className="lg:w-[1000px] flex justify-center items-center gap-10">
        <Image src={CompileLogo} alt="compile logo" height={289} />
        <div className="text-ins8ball-yellow">
          <h1 className="text-2xl">COMPILE</h1>
          <p className="mt-4 max-w-[40ch] text-white">
            <i>Computing Students that Innovate and Lead</i>, formerly SEAL, is
            the official school of computing organization of iACADEMY. Home to
            people that are passionate on developing technological innovations
            for the future.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="mailto:compile@iacademy.edu.ph">
              <Email />{" "}
            </a>
            <a href="https://discord.gg/Jj83qbAF42">
              <Discord />{" "}
            </a>
            <a href="https://www.instagram.com/iac.compile/">
              <Instagram />{" "}
            </a>
            <a href="https://www.facebook.com/iacademycompile">
              <Facebook />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
