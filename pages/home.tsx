import Link from "next/link";

export default function Home () {
  return (
    <div>
      <nav>
        <Link href={"/about"}>About</Link>
      </nav>

      <h1>Home</h1>
    </div>
  );
}