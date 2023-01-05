import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex p-4">
      <div className="flex font-poppins tracking-[-0.5rem] font-bold">
        <h1 className="text-ins8ball-yellow text-8xl">ins8</h1>
        <h1 className="-ml-4 text-ins8ball-green text-8xl">ball</h1>
      </div>
      <div className="flex gap-7 text-2xl justify-evenly font-firaCode tracking-[0.3rem] text-ins8ball-yellow ml-auto">
        <Link href="/">about</Link>
        <Link href="/">compile</Link>
        <Link href="/">insight</Link>
      </div>
    </div>
  );
}
