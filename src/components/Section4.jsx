import "../css/section4.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import data from "../../data";

function Box({ name, github, link, tech, description }) {
  return (
    <div className="project-box">
      <div className="project-header">
        <div className="project-header-1">
          <img
            src="https://ik.imagekit.io/hbzknb1hm/icons8-file.gif?updatedAt=1687962773667"
            alt=""
          />
        </div>
        <div className="project-header-2">
          <a href={github}>
            <img
              src="https://ik.imagekit.io/hbzknb1hm/icons8-github.gif?updatedAt=1687962773756"
              alt=""
            />
          </a>
          <a href={link}>
            <img
              src="https://ik.imagekit.io/hbzknb1hm/icons8-link.gif?updatedAt=1687962773580"
              alt=""
            />
          </a>
        </div>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="project-footer">
        {tech.map((number) => {
          const randomkey = uuidv4();
          return <div key={randomkey}>{number}</div>;
        })}
      </div>
    </div>
  );
}

function Section4() {
  return (
    <section id="section4">
      <h1>
        <span>Ø3.</span> &lt;my portfolio&gt;
      </h1>
      <p>
        A small gallery of recent projects chosen by me.I've done all of them
        alone and these projects are only part of my projects
      </p>
      <div id="grid">
        {data.map((item) => (
          <Box
            key={uuidv4()}
            name={item.name}
            github={item.github}
            link={item.link}
            description={item.description}
            tech={item.tech}
          />
        ))}
      </div>
      <h2>&lt;/my portfolio&gt;</h2>
    </section>
  );
}

export default Section4;
