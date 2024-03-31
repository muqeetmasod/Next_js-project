import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h1>welcome to my home page</h1>
        <Link href="/blog">blog</Link>
        <br></br>
        <Link href="/dashboard">dashboard</Link>
        </div>
  );
}