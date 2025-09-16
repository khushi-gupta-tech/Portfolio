import React from "react";
import photo from "../assets/p.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MainPage = () => {
  return (
    <div
      id="main"
      className="flex flex-col items-center  min-h-screen py-15 mt-25 lg:mt-0"
    >
      <div className="lg:mt-0  lg:w-1/2 flex justify-center ">
        <img
          className="w-48 md:w-64  rounded-full object-cover"
          src={photo}
          alt="Khushi Gupta"
        />
      </div>

      <div className="text-center flex justify-center flex-col lg:w-1/2 mt-3 ">
        <h1 className="text-4xl md:text-6xl font-bold">
          Front-End <br /> React Developer
        </h1>
        <p className="mt-3 text-lg md:text-md text-gray-400 max-w-xl mx-auto lg:ml-10 lg:mx-0">
          I'm Khushi Gupta, a frontend web developer skilled in HTML, CSS,
          JavaScript, React, and Tailwind, building responsive, user-friendly,
          and modern web applications.
        </p>
        <div>
          <ul className="flex mt-2 gap-x-4 cursor-pointer justify-center ">
            <li className="hover:text-gray-400 hover:scale-110 transition-transform">
              <a
                href="https://github.com/khushi-gupta-tech"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li className="hover:text-gray-400 hover:scale-110 transition-transform">
              <a
                href="https://www.linkedin.com/in/khushi-gupta-437656235/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-8 transition-transform duration-200 hover:scale-110 hover:shadow-lg hover:shadow-orange-400/50 rounded-full">
              <a
                href="https://leetcode.com/u/_Khushi123/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-8"
                  src="https://assets.leetcode.com/static_assets/public/images/LeetCode_avatar.png"
                  alt="LeetCode"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
