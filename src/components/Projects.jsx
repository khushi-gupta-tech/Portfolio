import React from "react";
import projects from "../utils/ProjectData";

const Projects = () => {
  return (
    <div id="project" className="mt-40 flex-col flex  items-center">
      <div className="mr-auto ml-36 ">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>
      {projects.map((project) => (
        <div className="w-3/4 h-96 bg-neutral-900 mt-10 flex items-center rounded-2xl hover:scale-[1.04] hover:transition-all">
          <div className="flex gap-x-8 ">
            <img
              className="w-[400px] h-56 m-8 mt-10"
              src={project.img}
              alt="netfix"
            />
            <div>
              <div className="flex gap-x-6">
                {project.skills.map((skill) => (
                  <button className="border-red-500 border rounded-lg p-1 px-2 ">
                    {skill}
                  </button>
                ))}
              </div>

              <h1 className="mt-7 font-bold text-2xl">{project.title}</h1>
              <p className="mt-5 text-gray-300 w-[90%]">{project.para}</p>
              <button className="mt-10 border-red-500 border p-1 rounded-lg bg-red-500 px-3 hover:bg-red-400 hover:scale-110">
                <a href={project.preview} target="_blank">
                  Preview
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-12">
        <button className="bg-red-500 p-2 rounded-lg hover:bg-red-400 cursor-pointer hover:scale-105 ">
          <a href="https://github.com/khushi-gupta-tech?tab=repositories" target="_blank">View More</a>
        </button>
      </div>
    </div>
  );
};

export default Projects;
