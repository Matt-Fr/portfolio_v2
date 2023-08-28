import Image from "next/image";
import Link from "next/link";
import React from "react";
import authorPic from "@/app/assets/picAuthor.jpg";

const SectionPresentation = () => {
  return (
    <section className=" m-8 flex flex-col items-center ">
      <div className="flex flex-col items-center">
        <h1 className=" text-3xl">Matthieu Franck</h1>
        <h2 className="[text-shadow:_2px_3px_0_rgb(128_244_220_/100%)] text-2xl ">
          Développeur Front-end
        </h2>
        <p className=" my-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo
          ex est quos recusandae at nostrum enim cum? Porro, repellat.
        </p>
        <div className=" my-4 flex">
          <Link
            href="/"
            className=" font-bold text-sm py-4 px-3 bg-primary shadow-black rounded mr-3  ease-out duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Voir mes projets
          </Link>
          <Link
            href="/"
            className=" font-bold text-sm py-4 px-3 bg-white shadow-primary border rounded ease-out duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
          >
            Contactez-moi
          </Link>
        </div>
      </div>
      <div className=" w-3/4 h-96 overflow-hidden flex justify-center border-2 rounded-2xl  shadow-black ease-out duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
        <Image
          alt="author picture"
          src={authorPic}
          className="object-cover"
        ></Image>
      </div>
    </section>
  );
};

export default SectionPresentation;
