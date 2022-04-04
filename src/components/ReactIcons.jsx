import React from "react";
import { FaRust } from "react-icons/fa";
import {
  SiWeb3Dotjs,
  SiCplusplus,
  SiNextdotjs,
  SiElixir,
} from "react-icons/si";

import { GrMysql } from "react-icons/gr";

function ReactIcons() {
  let Icons = [{ logo: "FaRust" }, { logo: "SiWeb3Dotjs" }];
  let hello = "SiElixir";
  return (
    <div className="contents">
      <div className="grid h-20  w-20 place-items-center shadow-lg md:h-[7rem] md:w-[7rem]">
        <FaRust className="text-[3.5rem] text-gray-400 hover:text-gray-500 md:text-[5.2rem] " />
      </div>
      <div className="grid h-20  w-20 place-items-center shadow-lg md:h-[7rem] md:w-[7rem]">
        <SiWeb3Dotjs className="text-[3.5rem] text-gray-400 hover:text-gray-500 md:text-[5.2rem]" />
      </div>
      <div className="grid h-20 w-20 place-items-center shadow-lg md:h-[7rem] md:w-[7rem]">
        <SiCplusplus className="text-[3.5rem] text-gray-400 hover:text-gray-500 md:text-[5.1rem]" />
      </div>
      <div className="grid h-20 w-20 place-items-center shadow-lg md:h-[7rem] md:w-[7rem]">
        <SiNextdotjs className="text-[3.5rem] text-gray-400 hover:text-gray-500 md:text-[5rem]" />
      </div>
      <div className="grid h-20 w-20 place-items-center shadow-lg md:h-[7rem] md:w-[7rem]">
        <SiElixir className="text-[3.5rem] text-gray-400 hover:text-gray-500 md:text-[5rem]" />
      </div>
      <div className="grid h-20 w-20 place-items-center shadow-lg md:h-[7rem] md:w-[7rem]">
        <GrMysql className="text-[3.5rem] text-gray-400 hover:text-gray-500 md:text-[5.2rem]" />
      </div>
    </div>
  );
}

export default ReactIcons;
