import ProjectCard from "./ProjectCard";
import project2 from "../assets/project2.png";
import project1 from "../assets/pro1.png";

function ProjectList() {
  const projects = [
    {
      image: project2,
      title: "Food-del",
      description:
        "A full-stack food ordering application built with MongoDB, Express, React, and Node.js featuring menu browsing, cart, and order management.",
      tech: ["JavaScript", "API Integration", "React.js", "Node.js", "Express", "MongoDB"],
      sourcelink: "https://github.com/pandurangkendre9709-jpg/Food-del.git",
    },
    {
      image: project1,
      title: "Netflix",
      description:
        "React-based UI that replicates Netflix with movie browsing, banners, and responsive design.",
      tech: ["React.js", "Socket.io"],
      sourcelink: "https://github.com/codewithkamal01/notes-app",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 px-6 md:px-10">
      {projects.map((project, index) => (
        <div key={index}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
