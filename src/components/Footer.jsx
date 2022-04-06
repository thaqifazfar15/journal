import React from "react";

function Footer() {
  let Icons = ["logo-facebook", "logo-twitter", "logo-linkedin", "logo-github"];
  return (
    <div className="inter-font flex min-h-[30vh] w-full flex-col items-center justify-center bg-blue-900 px-8 py-16 font-bold text-white">
      <div className="text-center">test</div>

      <div className="text-center">test</div>
      <div className="flex w-full flex-row items-center justify-between">
        <span className="kaushan-font flex items-center text-2xl font-bold text-white">
          Journal
        </span>
        <div className="">
          <ul className="flex ">
            {Icons.map((icon) => (
              <li className="footer-icon ml-2 grid place-items-center">
                <a href="#">
                  <ion-icon name={icon}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
