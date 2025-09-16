import React from "react";
import projects from "../utils/ProjectData";

const Projects = () => {
  return (
    <div id="project" className=" px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold">Projects</h1>
        </div>

        <div className="flex flex-col items-center gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full bg-neutral-900 flex flex-col lg:flex-row items-center rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-full lg:w-1/2">
                <img
                  className="w-full h-64 object-cove p-5 " // object-cover ensures image fills space without distortion
                  src={project.img}
                  alt={project.title}
                />
              </div>

              <div className="w-full lg:w-1/2 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="border-red-500 border rounded-lg p-1 px-3 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <h2 className="mb-4 font-bold text-2xl">{project.title}</h2>
                <p className="mb-6 text-gray-300">{project.para}</p>
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block border-red-500 border p-2 rounded-lg bg-red-500 px-4 hover:bg-red-600 hover:scale-105 transition-all"
                >
                  Preview
                </a>
              </div>
            </div>
          ))}
          <div className="mt-8">
            <a
              href="https://github.com/khushi-gupta-tech?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="bg-red-500 p-3 rounded-lg hover:bg-red-600 cursor-pointer hover:scale-105 transition-transform inline-block"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
