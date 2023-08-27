import Image from "next/image";
import Navbar from "./components/Navbar";
import SectionPresentation from "./components/section/SectionPresentation";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <SectionPresentation></SectionPresentation>
      </main>
    </>
  );
}
