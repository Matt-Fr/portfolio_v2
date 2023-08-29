import Image from "next/image";
import Navbar from "./components/Navbar";
import SectionPresentation from "./components/section/SectionPresentation";
import SectionProjects from "./components/section/SectionProjects";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <SectionPresentation></SectionPresentation>
        <SectionProjects></SectionProjects>
      </main>
    </>
  );
}
