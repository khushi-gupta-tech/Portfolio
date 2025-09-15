import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";

const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      timestamp: new Date()
    };
    
    try {
      await addDoc(collection(db, "messages"), data);
      toast.success("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message.");
    }
  };

  return (
    <div id="contact" className="mt-40 flex flex-col items-center px-6">
      <h1 className="font-bold text-6xl">Get in Touch</h1>

      <div className="flex flex-col md:flex-row justify-evenly gap-x-20 mt-12 w-full max-w-6xl">
        {/* Contact Info */}
        <div className="flex flex-col gap-4 mt-10">
          <h1 className="text-5xl font-semibold">Let's talk</h1>
          <p>Feel free to connect with me.</p>
          <div className="flex flex-col gap-3 text-lg">
            <p className="flex items-center gap-2">
              <MdEmail size={24} />
              <a href="mailto:kg834208@gmail.com" target="_blank" rel="noreferrer" className="underline hover:text-red-400">
                kg834208@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaLinkedin size={24} />
              <a href="https://www.linkedin.com/in/khushi-gupta-437656235/" target="_blank" rel="noreferrer" className="underline hover:text-red-400">
                LinkedIn
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaGithub size={24} />
              <a href="https://github.com/khushi-gupta-tech" target="_blank" rel="noreferrer" className="underline hover:text-red-400">
                GitHub
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MdLocationOn size={24} /> Greater Noida, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-[40%] mt-5">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="mb-1 font-medium">Name</label>
              <input name="name" className="border p-2 rounded" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="mb-1 font-medium">Email</label>
              <input name="email" className="border p-2 rounded" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="mb-1 font-medium">Message</label>
              <textarea name="message" className="border p-2 rounded h-32" placeholder="Enter your message" />
            </div>
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
