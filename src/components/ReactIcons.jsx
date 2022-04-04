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
  return (
    <div className="contents">
      <div className="grid h-20  w-20 place-items-center shadow-lg">
        <FaRust className="text-[3.5rem] text-gray-400" />
      </div>
      <div className="grid h-20  w-20 place-items-center shadow-lg">
        <SiWeb3Dotjs className="text-[3.5rem] text-gray-400" />
      </div>
      <div className="grid h-20  w-20 place-items-center shadow-lg">
        <SiCplusplus className="text-[3.5rem] text-gray-400" />
      </div>
      <div className="grid h-20  w-20 place-items-center shadow-lg">
        <SiNextdotjs className="text-[3.5rem] text-gray-400" />
      </div>
      <div className="grid h-20  w-20 place-items-center shadow-lg">
        <SiElixir className="text-[3.5rem] text-gray-400" />
      </div>
      <div className="grid h-20  w-20 place-items-center shadow-lg">
        <GrMysql className="text-[3.5rem] text-gray-400" />
      </div>
    </div>
  );
}

export default ReactIcons;
