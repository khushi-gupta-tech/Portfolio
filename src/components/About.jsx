import React from "react";
import photo from "../assets/p.jpg";
const About = () => {
  return (
    <div id="about" className="flex justify-center gap-x-30 mt-50 ">
      <div>
        <img className="w-96  rounded-full" src={photo} />
      </div>
      <div className="w-[40%]">
        <h1 className="font-bold text-3xl">About me</h1>
        <p className="mt-6 text-gray-300 text-xl">
          Hi, I'm Khushi Gupta, a frontend web developer driven by creativity,
          problem-solving, and a passion for building clean, responsive, and
          user-friendly websites. I enjoy the process of transforming ideas into
          interactive digital experiences that are both visually appealing and
          highly functional. For me, frontend development is the perfect balance
          of design and technology—it allows me to bring concepts to life while
          ensuring they deliver real value to users.
        </p>
        
        <p className=" mt-3 text-gray-300 text-xl">
          My technical skills include HTML, CSS, JavaScript, React, and Tailwind
          CSS, along with experience in responsive design and modern development
          practices. I focus on writing efficient, maintainable code while
          paying close attention to the finer details that enhance usability,
          such as accessibility, smooth navigation, and performance
          optimization.
        </p>
        
        <p className="mt-3 text-gray-300 text-xl">
          I'm a continuous learner who loves exploring new tools, frameworks,
          and trends in web development. With every project, I aim to grow as a
          developer and create meaningful solutions that not only meet client or
          user needs but also leave a positive, lasting impression.
        </p>
      </div>
    </div>
  );
};

export default About;
