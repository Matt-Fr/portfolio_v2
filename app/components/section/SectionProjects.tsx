import React from "react";
import mydata from "@/app/myData";
import ProjectArticle from "./ProjectArticle";

const SectionProjects = () => {
  return (
    <section className=" bg-grey lg:p-14 bg-cover h-full">
      <h1>mes projets</h1>
      {mydata.map((project) => {
        const { title, id, picture, descriptionFr, tags, demo, linkGithub } =
          project;

        return (
          <ProjectArticle
            title={title}
            key={id}
            picture={picture}
            descriptionFr={descriptionFr}
            tags={tags}
            demo={demo}
            linkGithub={linkGithub}
          ></ProjectArticle>
        );
      })}
    </section>
  );
};

export default SectionProjects;
