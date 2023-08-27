import Link from "next/link";
import React from "react";

const SectionPresentation = () => {
  return (
    <section className=" m-8 ">
      <div>
        <h1 className=" text-3xl">Matthieu Franck</h1>
        <h2 className="[text-shadow:_2px_3px_0_rgb(128_244_220_/100%)] text-2xl ">
          Développeur Front-end
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo
          ex est quos recusandae at nostrum enim cum? Porro, repellat.
        </p>
        <div className=" my-4">
          <Link
            href="/"
            className=" text-sm py-4 px-3 bg-primary shadow-black rounded mr-3"
          >
            Voir mes projets
          </Link>
          <Link
            href="/"
            className=" text-sm py-4 px-3 bg-primary shadow-black rounded"
          >
            Contacter moi
          </Link>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default SectionPresentation;
