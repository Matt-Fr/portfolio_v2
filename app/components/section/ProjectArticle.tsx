import React from "react";

interface project {
  title: string;
}

const ProjectArticle: React.FC<project> = ({ title }) => {
  return (
    <article>
      <h1>{title}</h1>
    </article>
  );
};

export default ProjectArticle;
