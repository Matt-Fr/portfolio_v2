import Image from "next/image";
import React from "react";

interface project {
  title?: string;
  id?: number;
  picture?: any;
  descriptionFr?: string;
  tags?: string[];
  demo?: string;
  linkGithub?: string;
}

const ProjectArticle: React.FC<project> = ({
  title,
  picture,
  id,
  descriptionFr,
  tags,
  demo,
  linkGithub,
}) => {
  return (
    <article>
      <Image src={picture} alt={`picture of the project ${title}`}></Image>
      <div>
        <h2>{title}</h2>
        {tags &&
          tags.map((tag, index) => {
            return <span key={index}>{tag}</span>;
          })}
        <p>{descriptionFr}</p>
        <div>
          {demo && (
            <a
              className="modalProject-info-elements-links-link"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
          <a
            className="modalProject-info-elements-links-link"
            href={linkGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectArticle;
