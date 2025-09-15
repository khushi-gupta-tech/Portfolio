import netflix from "../assets/netflix.png";
import foodo from "../assets/Foodo.png";
import youtube from "../assets/Youtube.png";

const projects = [
  {
    img: netflix,
    title: "Netflix GPT: AI-Based Movie Recommender",
    skills: ["React.js", "OpenAI", "Redux.js", "Firebase", "Tailwind CSS"],
    para: "Netflix GPT is an AI-powered recommendation system that integrates the OpenAI API with the TMDB API to deliver intelligent movie and show suggestions. It uses Firebase Authentication for secure access and incorporates state management with a responsive UI, ensuring seamless navigation, personalized recommendations, and optimized performance for an enhanced streaming discovery experience.",
    preview: "https://github.com/khushi-gupta-tech/Netflix-GPT",
  },
  {
    img: foodo,
    title: "Foodo: Food Ordering App",
    skills: ["React.js", "Redux.js", "Tailwind CSS","express.js","node.js"],
    para: "Foodo App is a food ordering platform leveraging the Swiggy API via a Node.js + Express backend to handle CORS. Bundled with Parcel, it delivers fast builds and optimized performance. The app provides dynamic cart functionality, responsive UI, and seamless API integration, ensuring smooth ordering and scalable architecture across devices.",
    preview: "https://github.com/khushi-gupta-tech/Foodo",
  },
  {
    img: youtube,
    title: "Youtube Clone",
    skills: ["React.js", "Redux.js", "Tailwind CSS","Youtube API"],
    para: "YouTube Clone is a video streaming platform integrating the YouTube Data API v3 for search and recommendations. It features live chat functionality, dynamic state management, responsive UI, and optimized performance. The application ensures seamless API integration, smooth navigation, and scalability across devices, providing an interactive and immersive video streaming experience.",
    preview: "https://github.com/khushi-gupta-tech/Youtube_Clone",
  },
];

export default projects;
