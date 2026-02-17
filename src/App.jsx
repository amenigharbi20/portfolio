import "./App.css";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About";
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const skills = ["React", "JavaScript", "HTML", "CSS", "Git", "Node.js"];

const projects = [
  {
    name: "React Lab",
    description: "My first React project built with reusable components.",
    technologies: ["React", "Vite", "CSS"]
  },
  {
    name: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects.",
    technologies: ["React", "HTML", "CSS"]
  },
  {
    name: "Todo App",
    description: "A simple and clean task management application.",
    technologies: ["React", "JavaScript"]
  }
];

function App() {
  return (
    <>
      <Header 
        title="Ameni Gharbi"
        tagline="Full Stack Developer"
      />

      <About
        profileImage="https://via.placeholder.com/180"
        bio="Hi! I'm Ameni, a full-stack developer passionate about building scalable backend systems and modern, responsive user interfaces. I enjoy turning ideas into complete, high-performance web applications."
        skills={skills}
      />

      <ProjectShowcase projects={projects} />

      <Contact
        email="amenigharbi1016@gmail.com"
        github="https://github.com/amenigharbi1O16"
        linkedin="https://www.linkedin.com/in/ameni-gharbi-22688b386"
      />

      <Footer name="Ameni Gharbi" />
    </>
  );
}

export default App;
