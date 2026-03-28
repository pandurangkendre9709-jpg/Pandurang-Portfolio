function ProjectCard({ project }) {
  return (
    <div
      className="hover:-translate-y-1 hover:shadow-lg transition mt-6 border border-[#AAAAAA] rounded-md w-full px-6 md:px-10 py-6"
    >
      <div className="bg-[#E5E5E5] rounded-md px-8 md:px-14 pt-5">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="pt-6">
        <h1 className="text-xl md:text-2xl font-semibold ">{project.title}</h1>
        <p className="pt-3 text-[#5B5A5A] text-sm md:text-base">
          {project.description}
        </p>
        <div className="flex gap-4 pt-5 flex-wrap">
          {project.tech.map((item, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs md:text-sm border rounded-full border-black"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex mt-8">
          <a
            href={project.sourcelink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button
              className="w-full cursor-pointer px-4 py-2 md:px-5 md:py-3 rounded-lg text-white transition bg-[#EB6200] hover:bg-[#c75c0a]"
            >
              Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
