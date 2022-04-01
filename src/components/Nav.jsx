import React from "react";

function Nav() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full shadow-md">
      <div className="items-center justify-between bg-white py-5 px-5 md:flex md:px-20">
        <div className="flex cursor-pointer items-center text-2xl font-bold text-gray-800 md:mb-0">
          Journal
        </div>

        <div className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden">
          <ion-icon name="menu-outline"></ion-icon>
        </div>

        <ul className="absolute left-0 z-[-1] flex w-full flex-col bg-white py-4 pl-5 duration-500 ease-in md:static md:z-auto md:w-auto md:flex-row md:items-center md:py-0 md:pl-0">
          {Links.map((Link) => (
            <li
              key={Link.name}
              className="text-5sm order-1 my-7 md:my-0 md:ml-6 "
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
