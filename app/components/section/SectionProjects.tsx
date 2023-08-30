import React from "react";
import mydata from "@/app/myData";
import ProjectArticle from "./ProjectArticle";

const SectionProjects = () => {
  return (
    <section className=" bg-grey lg:p-14 bg-cover h-full">
      <h1>mes projets</h1>
      {mydata.map((project) => {
        const { title, id } = project;

        return <ProjectArticle title={title} key={id}></ProjectArticle>;
      })}
    </section>
  );
};

export default SectionProjects;
