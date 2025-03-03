'use client'
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Ideas from "./components/Ideas";
import Project from "./components/Project";


export default function Home() {
  return (
    <main >
      <Navbar />
      <Homepage />
      <Aboutme />
      <Project />
      <Ideas />
      <Contact />
    </main>
  );
}
