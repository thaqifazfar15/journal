import React from "react";

function Main() {
  return (
    <div className="flex h-[100%] flex-col items-center justify-center">
      {/* Container */}
      <div className="inter-font flex h-full max-w-[1200px] flex-col items-start justify-center px-7 pb-12 md:pb-4">
        <p className="inter-font md:text-md text-2xs text-gray-600">
          Hi there, welcome to my
        </p>
        <h1 className="text-4xl font-bold text-slate-100 md:text-6xl">
          Software Engineer
        </h1>
        <h2 className="text-4xl font-bold text-lime-300 md:text-6xl">
          Study Journal
          <p>of 2022.</p>
        </h2>
        <button className="my-3 border-2 px-6 py-3 text-white hover:border-pink-500 hover:bg-pink-500 hover:shadow-md">
          View Blog
        </button>
      </div>
    </div>
  );
}

export default Main;
