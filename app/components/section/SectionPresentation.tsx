import Image from "next/image";
import Link from "next/link";
import React from "react";
import authorPic from "@/app/assets/picAuthor.jpg";

const SectionPresentation = () => {
  return (
    <section className=" m-8 md:m-10 flex flex-col items-center md:flex-row lg:m-14   ">
      <div className="flex flex-col items-center justify-center md:w-1/2 md:items-start ">
        <h1 className=" text-3xl md:text-5xl">Matthieu Franck</h1>
        <h2 className="[text-shadow:_2px_3px_0_rgb(128_244_220_/100%)] text-2xl md:text-3xl lg:text-4xl">
          Développeur Front-end
        </h2>
        <p className=" my-5 md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In magni
          rerum accusamus nostrum dolore, repellat reprehenderit tempora ex
          voluptates fugit ipsa voluptas facere ab molestiae! Quisquam eum
          repellat dignissimos facilis.
        </p>
        <div className=" my-4 flex">
          <Link
            href="/"
            className=" font-bold text-sm py-4 px-3 bg-primary shadow-black rounded mr-3  ease-out duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-base"
          >
            Voir mes projets
          </Link>
          <Link
            href="/"
            className=" font-bold text-sm py-4 px-3 bg-white shadow-primary border rounded ease-out duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-base"
          >
            Contactez-moi
          </Link>
        </div>
      </div>
      <div className=" w-full md:w-1/2 flex justify-center items-center h-full ">
        <div className="overflow-hidden border-2 rounded-2xl  shadow-black ease-out duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none w-3/4 max-h-96 flex justify-center items-center max-w-sm lg:w-2/5 ">
          <Image
            alt="author picture"
            src={authorPic}
            className="object-cover"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default SectionPresentation;
