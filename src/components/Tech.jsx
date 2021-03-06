import React from "react";
import { SiTailwindcss, SiGraphql, SiWeb3Dotjs } from "react-icons/si";
import ReactIcons from "./ReactIcons";
import "../index.css";

function Tech() {
  let Techs = [
    { logo: "logo-html5", name: "HTML5" },
    { logo: "logo-css3", name: "CSS" },
    { logo: "logo-javascript", name: "JS" },
    { logo: "logo-github", name: "GitHub" },
    { logo: "logo-python", name: "Python" },
    { logo: "logo-nodejs", name: "NodeJS" },
    { logo: "logo-react", name: "ReactJS" },
  ];

  return (
    <div className="relative z-[0] flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center py-16 px-8">
      <h1 className="mb-6 text-center text-3xl font-bold md:text-5xl">
        Technologies I'm Learning
      </h1>
      <div className="relative z-[1] grid grid-cols-3 gap-5">
        {Techs.map((Tech) => (
          <div className="icon-name icon-title:hover z-2 relative grid h-20 w-20 place-items-center shadow-lg duration-300 ease-in hover:translate-y-3 hover:scale-105 md:h-[7rem] md:w-[7rem]">
            <span className="icon-title md:text-xl">{Tech.name}</span>
            <ion-icon name={Tech.logo}></ion-icon>
          </div>
        ))}
        <div className="icon-name grid h-20  w-20 place-items-center shadow-lg hover:translate-y-3 hover:scale-105 md:h-[7rem] md:w-[7rem]">
          <span className="icon-title md:text-xl">Tailwind</span>
          <SiTailwindcss className="text-[3.5rem] md:text-[5rem]" />
        </div>
        <div className="icon-name  grid h-20 w-20 place-items-center  shadow-lg hover:translate-y-3 hover:scale-105 md:h-[7rem] md:w-[7rem]">
          <span className="icon-title md:text-xl">GraphQL</span>
          <SiGraphql className="text-[3.7rem] md:text-[5.3rem]" />
        </div>
      </div>

      <h1 className="mt-12 mb-6 text-center text-3xl font-bold">
        Will Learn Soon
      </h1>

      <div className="grid grid-cols-3 gap-5">
        <ReactIcons />
      </div>
    </div>
  );
}

export default Tech;
