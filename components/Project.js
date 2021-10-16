import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Project = ({ title, description, image, tags, repo, demo }) => {
  return (
    <div className="project">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="links">
          {repo ? (
            <Link href={repo}>
              <a className="link-image" target="_blank">
                View Code
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
          ) : (
            <></>
          )}
          {demo ? (
            <Link href={demo}>
              <a className="link-image" target="_blank">
                View Site
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="project-body">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, id) => (
            <h4 key={id}>{tag}</h4>
          ))}
        </div>
      </div>
      <style jsx>{`
        img {
          max-width: 100%;
          width: 100%;
          height: 250px;
          object-fit: cover;
        }
        div.project {
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          background: var(--white);
          box-shadow:0 0 10px rgba(0,0,0,.2);
        }

        div.project-image {
          position: relative;
        }

        div.project-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 10px;
        }
        div.project-body h2 {
          font-size: clamp(24px, 3.5vw, 28px);
          margin: 7px 0;
        }
        div.project-body p {
          font-size: clamp(16px, 2.5vw, 22px);
        }
        div.project-tags {
          margin-top: 10px;
          height: 100%;
          display: flex;
          gap: 10px;
          align-items: flex-end;
        }

        div.project-tags h4 {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          height: max-content;
          padding: 5px 10px;
          border-radius: 10px;
          color: var(--white);
          background-color: var(--blue-light);
        }

        div.links {
          position: absolute;
          left: 10px;
          bottom: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        a.link-image {
          background: var(--blue);
          padding: 5px 10px;
          color: white;
          font-weight: 500;
          border-radius: 10px;
          display: flex;
          gap: 5px;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Project;
