import React from "react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";

const Contact = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    // Validation checks
    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    const data = { name, email, message, timestamp: new Date() };

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
    <div id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">Get in Touch</h1>

        <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-20 mt-12 text-left">
          {/* Contact Info */}
          <div className="flex flex-col gap-4 mt-10">
            <h2 className="text-4xl lg:text-5xl font-semibold">Let's talk</h2>
            <p className="text-gray-400">Feel free to connect with me.</p>
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
          <div className="w-full md:w-[40%] mt-5">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
               <input name="name" className="border border-neutral-700 bg-neutral-900 p-3 rounded" placeholder="Enter your name" />
               <input name="email" type="email" className="border border-neutral-700 bg-neutral-900 p-3 rounded" placeholder="Enter your email" />
               <textarea name="message" className="border border-neutral-700 bg-neutral-900 p-3 rounded h-32" placeholder="Enter your message" />
               <button type="submit" className="bg-red-500 text-white px-4 py-3 rounded hover:bg-red-600 mt-2 transition-colors">
                 Send Message
               </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
