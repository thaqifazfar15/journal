import React, { useState } from "react";

function Nav() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full shadow-md">
      <div className="items-center justify-between bg-white py-5 px-5 md:flex md:px-6">
        <div className="kaushan-font flex cursor-pointer items-center text-4xl font-bold text-gray-800 md:mb-0">
          Journal
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
        >
          <ion-icon
            size="large"
            className=""
            name={open ? "close" : "menu"}
          ></ion-icon>
        </div>

        <ul
          className={`absolute left-0 z-[-1] flex w-full flex-col bg-white py-4 pl-5 opacity-0 duration-500 ease-in md:static md:z-auto md:w-auto md:flex-row md:items-center md:py-0 md:pl-0 md:opacity-100 ${
            open ? "top-[4.6rem] opacity-100" : "top-[-490px]"
          }`}
        >
          {Links.map((Link) => (
            <li
              key={Link.name}
              className="text-5sm inter-font order-1 my-7 md:my-0 md:ml-6 "
            >
              <a
                href={Link.link}
                className="text-gray-800 duration-500 hover:text-gray-400"
              >
                {Link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Nav;
