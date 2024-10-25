import "../css/section4.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";

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
        <Box
          name={"SmartDoc"}
          github={"https://github.com/kanugurajesh/SmartDoc"}
          link={"https://smart-doc-pearl.vercel.app/"}
          description="The first open-source RAG (Retrieval-Augmented Generation) application built with Gemini, Pinecone, and Next.js, featuring robust authentication and complete control over your data."
          tech={[
            "Typescript",
            "Next.Js",
            "Tailwindcss",
            "Gemini Flash",
            "Pinecone DB",
          ]}
        />
        <Box
          name={"MoodMap"}
          github={"https://github.com/kanugurajesh/MoodMap"}
          link={"https://mood-map-three.vercel.app/"}
          description="MoodMap is an app designed to track and manage daily depression, offering personalized mental health support."
          tech={[
            "Typescript",
            "Next.Js",
            "Tailwindcss",
            "Gemini Pro",
            "Gemini Pro Vision",
            "Xat.io",
            "Remote Patient Monitoring",
            "shadcn"
          ]}
        />
        <Box
          name={"Mentify"}
          github={"https://github.com/kanugurajesh/Mentify"}
          link={"https://mentify-five.vercel.app/"}
          description="An all in one solution for mental health issues"
          tech={[
            "Typescript",
            "Next.Js",
            "Tailwindcss",
            "Gemini Pro",
            "Gemini Pro Vision",
            "Replicate",
          ]}
        />
        <Box
          name={"Career-Guide"}
          github={"https://github.com/kanugurajesh/Career-Guide"}
          link={"https://career-guide-tau.vercel.app/"}
          description="Ai career guide for secondary students"
          tech={["Typescript", "Next.Js", "Tailwindcss", "Gemini Pro", "Css"]}
        />
        <Box
          name={"Career-Guide"}
          github={"https://github.com/kanugurajesh/Career-Guide"}
          link={"https://career-guide-tau.vercel.app/"}
          description="Ai career guide for secondary students"
          tech={["Typescript", "Next.Js", "Tailwindcss", "Gemini Pro", "Css"]}
        />
        <Box
          name={"Student-LMS"}
          github={"https://github.com/kanugurajesh/Student-LMS"}
          link={"https://student-lms.vercel.app/"}
          description="Gamified Student-LMS"
          tech={["Typescript", "Next.Js", "Tailwindcss", "Html", "Css"]}
        />
        <Box
          name={"Developer Blog"}
          github={"https://github.com/kanugurajesh/kanugurajesh.github.io"}
          link={"https://kanugurajesh.github.io"}
          description="My personal developer blog"
          tech={["Next.Js", "TypeScript", "Tailwindcss", "Markdown"]}
        />
        <Box
          name={"Siem Converter"}
          github={"https://github.com/kanugurajesh/Siem-Converter"}
          link={""}
          description="A reactJS web app that converts ruleset to siem search query"
          tech={["Next.Js", "Fastapi", "Python", "TypeScript", "Tailwindcss"]}
        />
        <Box
          name={"llm app"}
          github={"https://github.com/kanugurajesh/llm-app"}
          link=""
          tech={["Next.js", "Typescript", "Tailwindcss", "Gemini Pro"]}
        />
        <Box
          name={"SnapScale"}
          github={"https://github.com/kanugurajesh/SnapScale"}
          link=""
          tech={["Javascript", "Electron.js", "Html", "Css"]}
        />
        <Box
          name={"Movie Recommendation System"}
          github={"https://github.com/kanugurajesh/Movie-Recommendation-System"}
          link=""
          tech={[
            "Sveltekit",
            "TypeScript",
            "Html",
            "Css",
            "Python",
            "Jupyter Notebook",
          ]}
        />
        <Box
          name={"Next.js-Auth"}
          github={"https://github.com/kanugurajesh/Next.js-Auth"}
          link=""
          tech={[
            "Next.js",
            "TypeScript",
            "MongoDB",
            "Cryptography",
            "Tailwindcss",
          ]}
        />
        <Box
          name={"Space Exploration"}
          github="https://github.com/rajesh604/space-tourism"
          link="https://space-tourism-l7gb.vercel.app/"
          tech={["Javascript", "Html", "Css"]}
          description="Explore the Space,planets and know about some famous astronauts"
        />
        <Box
          name={"Company Portfolio"}
          github="https://github.com/rajesh604/rajesh_web_design"
          link="https://rajesh-web-design.vercel.app/"
          tech={["Javascript", "Html", "Css", "React Js"]}
          description="A small company portfolio"
        />
        <Box
          name={"Food Order"}
          github="https://github.com/rajesh604/food_ordering_app"
          link="https://rajesh604.github.io/food_ordering_app/"
          tech={["Javascript", "Html", "Css"]}
          description="A Basic Food Ordering Demo"
        />
        <Box
          name={"Portfolio 1"}
          github=""
          link="https://salmon-river-0d2437110.3.azurestaticapps.net/"
          tech={[
            "Javascript",
            "Html",
            "Css",
            "Azure",
            "React Js",
            "Nodemailer",
            "Express",
            "Node Js",
          ]}
          description="I have build a portfolio"
        />
        <Box
          name={"Portfolio Dashboard"}
          github=""
          link="https://dashboard-xpsi.vercel.app/"
          tech={[
            "Javascript",
            "Html",
            "Css",
            "Azure",
            "React Js",
            "mui",
            "ant design",
          ]}
          description="I have build a portfolio dashboard"
        />
        <Box
          name={"Portfolio 2"}
          github="https://github.com/rajesh604/rajesh604.github.io"
          link="https://rajesh604.github.io"
          tech={["Javascript", "Html", "Css", "Github Static Pages"]}
          description="I have build a portfolio"
        />
        <Box
          name={"Restaurant Menu"}
          github="https://github.com/rajesh604/restaurant-app"
          link="https://restaurant-app-c7wi.vercel.app/"
          tech={["Javascript", "Html", "Css", "React", "meal api", "hosting"]}
          description="I have build a restaurant menu"
        />
      </div>
      <h2>&lt;/my portfolio&gt;</h2>
    </section>
  );
}

export default Section4;
