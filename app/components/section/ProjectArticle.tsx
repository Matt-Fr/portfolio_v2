"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface project {
  title?: string;
  id?: number;
  picture?: any;
  descriptionFr?: string;
  tags?: string[];
  demo?: string;
  linkGithub?: string;
  logo?: any;
}

const ProjectArticle: React.FC<project> = ({
  title,
  picture,
  id,
  descriptionFr,
  tags,
  demo,
  linkGithub,
  logo,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  //useEffect to allow the esc key to close the modal
  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
    } else {
      document.removeEventListener("keydown", handleEscKey);
    }
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 right-0 w-full  bg-primary h-full flex items-center justify-center  bg-opacity-50 z-50 ">
          <div className="bg-white p-8 flex flex-col   justify-evenly md:w-1/2  rounded h-full   shadow-md">
            <span
              className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer text-3xl"
              onClick={closeModal}
            >
              &times;
            </span>
            <div className=" border rounded-2xl w-full  max-h-80 overflow-hidden">
              <Image
                src={picture}
                alt={`picture of the project ${title}`}
                className=" w-full h-full   object-cover cursor-pointer object-top  "
              ></Image>
            </div>
            <h2>{title}</h2>
            <div className="flex flex-wrap">
              {tags &&
                tags.map((tag, index) => {
                  return (
                    <span
                      className=" text-sm border  rounded-sm py-[2px] px-[5px] mr-2 mb-2"
                      key={index}
                    >
                      {tag}
                    </span>
                  );
                })}
            </div>
            <div className="flex">
              {demo && (
                <a
                  className=" font-bold text-sm p-2 bg-secondary text-white shadow-black rounded mr-3  ease-out duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-base"
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
              <a className=" font-bold text-sm p-2 bg-white shadow-secondary border rounded ease-out duration-300 cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-base">
                Github
              </a>
            </div>
            <p className=" text-sm  mb-4 cursor-pointer">{descriptionFr}</p>
          </div>
        </div>
      )}

      <article className="flex flex-col bg-white border rounded-2xl border-secondary  shadow-black hover:shadow-bigBlack ease-out duration-300 hover:translate-x-[-0.25rem] hover:translate-y-[-0.25rem]  overflow-hidden h-[32rem] max-w-sm">
        <div
          onClick={openModal}
          className="h-2/5 p-12 w-full  flex justify-center items-center cursor-pointer"
        >
          <Image
            src={logo}
            alt={`logo of the project ${title}`}
            className=" w-full h-full cursor-pointer  "
          ></Image>
        </div>
        <div className=" h-3/5 flex flex-col p-5">
          <h2 className="text-lg text-secondary font-semibold">{title}</h2>

          <div className="flex flex-wrap">
            {tags &&
              tags.map((tag, index) => {
                return (
                  <span
                    className=" text-sm border  rounded-sm py-[2px] px-[5px] mr-2 mb-2"
                    key={index}
                  >
                    {tag}
                  </span>
                );
              })}
          </div>
          <p className=" text-sm  overflow-hidden line-clamp-5 mb-4 cursor-pointer">
            {descriptionFr}
          </p>
          <div className="flex">
            {demo && (
              <a
                className=" font-bold text-sm p-2 bg-secondary text-white shadow-black rounded mr-3  ease-out duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-base"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            )}
            <a className=" font-bold text-sm p-2 bg-white shadow-secondary border rounded ease-out duration-300 cursor-pointer hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-base">
              Github
            </a>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectArticle;
