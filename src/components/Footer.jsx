import React from "react";

function Footer() {
  let Icons = ["logo-facebook", "logo-twitter", "logo-linkedin", "logo-github"];
  return (
    <div className="inter-font flex min-h-[30vh] w-full flex-col items-center justify-center bg-blue-900 px-8 pt-8 pb-4 font-bold text-white">
      <div className="mb-auto text-center">Thanks for coming!</div>

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
      <div className="mt-auto text-center">Thaqif Azfar 2022</div>
    </div>
  );
}

export default Footer;
