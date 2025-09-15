import React from "react";
import skills from "./utils/mockData";

const Skills = () => {
  return (
    <div id="skill" className="mt-40 flex flex-col items-center">
      <div className="flex gap-x-230 ">
        <h1 className="text-4xl font-bold">Skills</h1>
        <button className=" text-red-500 border  p-2 rounded-lg cursor-pointer hover:bg-red-500 hover:scale-110 hover:text-white hover:border-red-500">
         <a href="https://www.linkedin.com/in/khushi-gupta-437656235/details/skills/" target="_blank">More Skills</a>
        </button>
      </div>

      <h1 className="mr-[780px] mt-6">
        Hover over each skill to see my proficiency level
      </h1>

      <div className="flex flex-wrap justify-center  gap-6 max-w-5xl mx-auto mt-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex  items-center gap-x-5  w-[500px]  justify-evenly p-6 bg-neutral-900 rounded-lg shadow-md group hover:scale-[1.02]"
             style={{ '--skill-level-width': `${skill.level}%` }}
          >
            <skill.icon size={30}/>
            <p className=" font-semibold text-lg">{skill.name}</p>

            {/* Skill bar container */}
            <div className="w-1/2  bg-neutral-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-red-600 h-3 w-0  transition-all duration-500 ease out group-hover:w-[var(--skill-level-width)]"
              ></div>
            </div>

             <div className="mt-2 w-12 text-center h-6"> {/* Fixed width/height to prevent layout shifts */}
                {/* Visible by default, hidden on hover */}
                <span className="group-hover:hidden font-bold">0%</span>
                {/* Hidden by default, visible on hover */}
                <span className="hidden group-hover:block font-bold">{skill.level}%</span>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
