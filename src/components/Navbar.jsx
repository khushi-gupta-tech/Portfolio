import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex  gap-x-170 w-full p-4 ml-10 items-center font-[Inter] ">
      <div className="text-xl font-bold">Khushi &nbsp;Gupta</div>
      <div className="flex  gap-x-30">
        <div>
          <ul className="flex gap-x-10 font-bold ">
            <li  className="hover:text-red-600 cursor-pointer">Home</li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-red-600 cursor-pointer"
              >
                About
              </Link>
            </li>
             <li>
              <Link
                to=""
                smooth={true}
                duration={500}
                className="hover:text-red-600 cursor-pointer"
              >
                Skills
              </Link>
            </li>
             <li>
              <Link
                to=""
                smooth={true}
                duration={500}
                className="hover:text-red-600 cursor-pointer"
              >
                Projects
              </Link>
            </li>
            
          </ul>
        </div>
        <div>
          <button className="bg-red-600 p-1 rounded-lg hover:bg-red-300 cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
