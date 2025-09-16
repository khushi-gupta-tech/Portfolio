import skills from "../utils/mockData";

const Skills = () => {
  return (
    <div id="skill" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex lg:flex-row sm:flex-row justify-between items-center gap-4 mb-4">
          <h1 className="text-4xl font-bold">Skills</h1>
          <a
            href="https://www.linkedin.com/in/khushi-gupta-437656235/details/skills/"
            target="_blank"
            rel="noreferrer"
            className="text-red-500 border border-red-500 p-2 rounded-lg cursor-pointer hover:bg-red-500 hover:scale-105 hover:text-white transition-all"
          >
            More Skills
          </a>
        </div>

        <h2 className="text-gray-400 mb-12 hidden lg:block ">
        ⭕ Hover over each skill to see my proficiency level
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-10 sm:mt-0">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-x-4 w-full sm:w-[500px] p-4 bg-neutral-900 rounded-lg shadow-md group hover:scale-[1.02] transition-transform "
              style={{ "--skill-level-width": `${skill.level}%` }}
            >
              <skill.icon size={30} />
              <p className="font-semibold text-lg flex-1">{skill.name}</p>

              <div className="w-1/2 bg-neutral-700 rounded-full h-3 overflow-hidden">
                <div className="bg-red-600 h-3  transition-all duration-700 ease-out w-[var(--skill-level-width)] md:w-0 group-hover:w-[var(--skill-level-width)]"></div>
              </div>

              <div className="w-12 text-center h-6">
                <span className=" hidden group-hover:hidden lg:block font-bold">0%</span>
                <span className="lg:hidden group-hover:block font-bold">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
