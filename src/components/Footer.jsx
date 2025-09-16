import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-center py-1 px-4  text-gray-400">
      <p className="flex items-center gap-2">
        <MdEmail size={24} />
        <a
          href="mailto:kg834208@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-red-400"
        >
          kg834208@gmail.com
        </a>
      </p>
      <p className="flex items-center gap-2">
        <FaLinkedin size={24} />
        <a
          href="https://www.linkedin.com/in/khushi-gupta-437656235/"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-red-400"
        >
          LinkedIn
        </a>
      </p>
      <p className="flex items-center gap-2">
        <FaGithub size={24} />
        <a
          href="https://github.com/khushi-gupta-tech"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-red-400"
        >
          GitHub
        </a>
      </p>
      <p className="mb-1">© 2025 Khushi Gupta. Made with ❤️</p>
      <p className="text-sm">
        Crafting digital experiences that inspire and engage.
      </p>
    </footer>
  );
};

export default Footer;
