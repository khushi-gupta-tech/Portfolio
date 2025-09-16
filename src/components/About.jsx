import React from "react";
import photo from "../assets/p.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20  px-6 lg:px-12"
    >
      <div>
        <img
          className="w-64 md:w-64  rounded-full object-cover shadow-lg"
          src={photo}
          alt="Profile"
        />
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left lg:mt-20">
        <h1 className="font-bold text-4xl mb-6">About Me</h1>
        <div className="space-y-4 text-gray-300 text-lg">
          <p>
            Hi, I'm Khushi Gupta, a frontend web developer driven by creativity,
            problem-solving, and a passion for building clean, responsive, and
            user-friendly websites. I enjoy the process of transforming ideas
            into interactive digital experiences that are both visually
            appealing and highly functional.
          </p>
          <p>
            My technical skills include HTML, CSS, JavaScript, React, and
            Tailwind CSS, along with experience in responsive design and modern
            development practices. I focus on writing efficient, maintainable
            code while paying close attention to the finer details that enhance
            usability.
          </p>
          <p>
            I'm a continuous learner who loves exploring new tools, frameworks,
            and trends in web development. With every project, I aim to grow as
            a developer and create meaningful solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
