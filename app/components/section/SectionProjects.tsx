import React from "react";
import mydata from "@/app/myData";
import ProjectArticle from "./ProjectArticle";

const SectionProjects = () => {
  return (
    <section className=" lg:p-14 bg-grey  p-8  ">
      <h1 className="[text-shadow:_2px_3px_0_rgb(70_140_247_/50%)] text-2xl md:text-3xl lg:text-4xl my-8">
        mes projets
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8 justify-items-center">
        {mydata.map((project) => {
          const {
            title,
            id,
            picture,
            descriptionFr,
            tags,
            demo,
            linkGithub,
            logo,
          } = project;

          return (
            <ProjectArticle
              title={title}
              key={id}
              picture={picture}
              descriptionFr={descriptionFr}
              tags={tags}
              demo={demo}
              linkGithub={linkGithub}
              logo={logo}
            ></ProjectArticle>
          );
        })}
      </div>
    </section>
  );
};

export default SectionProjects;
