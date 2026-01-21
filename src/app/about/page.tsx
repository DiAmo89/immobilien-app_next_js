import Link from "next/link";
import Me from "./me/page";
import RootLayout from "../layout";

export default function About() {
  return (
    <section>
      <h2>About</h2>
      <Link href="/about/me">Me</Link>
    </section>
  );
}
