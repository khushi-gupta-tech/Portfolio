import React from "react";
import photo from "../assets/p.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const MainPage = () => {
  return (
    <div id="main" className="flex  mt-32 font-[Inter] gap-x-40 justify-center">
      <div>
        <h1 className="text-6xl font-bold">
          Front - End <br /> React Developer
        </h1>
        <p className="mt-5 text-xl text-gray-400 ">
          I'm Khushi Gupta , a frontend web developer skilled in <br />
          HTML , CSS , JavaScript , React , and Tailwind ,<br /> building
          responsive, user-friendly, and modern <br />
          web applications.
        </p>
        <div>
          <ul className="flex mt-5 gap-x-5 cursor-pointer">
            <li className="hover:text-gray-400 hover:scale-110">
             <a href="https://github.com/khushi-gupta-tech" target="_blank" > <FaGithub size={30} /></a>
            </li>
            <li className="hover:text-gray-400 hover:scale-110">
              <a href="https://www.linkedin.com/in/khushi-gupta-437656235/" target="_blank"><FaLinkedin size={30} /></a>
            </li>
            <li className="w-8 transition-transform duration-200 hover:scale-110 hover:shadow-lg hover:shadow-orange-400/50 rounded-full">
             <a href="https://leetcode.com/u/_Khushi123/" target="_blank"> <img
                className="w-8"
                src="https://assets.leetcode.com/static_assets/public/images/LeetCode_avatar.png"
              /></a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <img className="w-80 rounded-full" src={photo} alt="not found" />
      </div>
    </div>
  );
};

export default MainPage;
