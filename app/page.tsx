import Link from "next/link";

export default function Home() {
  return (
    <>
    <h1 className="text-2xl font-medium">Bienvenue sur mon site </h1>
    <Link href="/blog" className="hover:text-red-200 transition-colors duration-300">Visiter mon Blog</Link>
    </>
  );
}
