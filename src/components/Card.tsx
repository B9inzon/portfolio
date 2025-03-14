import { IProject } from "@/Interfaces/IProject";

const ProjectCard: React.FC<IProject> = ({
  title,
  image,
  repo,
  demo,
  technologies,
  description,
  date,
}) => {
  const techBadges = technologies
  .filter(tech => tech !== "-")
  .map(tech => tech.trim());

  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[80%] m-auto items-center justify-center gap-12 lg:gap-28 bg-opacity-80 rounded-2xl shadow-md overflow-hidden transition-all duration-700 mb-12 lg:mb-20 lg:bg-gradient-to-tl lg:from-[#04171b] lg:via-[#030f12]  lg:to-[#030f12] lg:hover:bg-gradient-to-br lg:hover:from-[#04171b] lg:hover:via-[#030f12]  lg:hover:to-[#030f12] px-2 lg:py-8 lg:px-8 ease-in-out">
      <div className="w-full lg:w-[40%] ">
        <img src={image} alt={title} className="rounded-sm lg:rounded-xl overflow-hidden " />
      </div>
      <div className="flex flex-col items-center text-center justify-center w-[80%] lg:w-[50%]">
        <h2 className="text-4xl lg:text-5xl font-extralight text-[#cfdbde] mb-6">
          {title}
        </h2>
        <p className="text-lg lg:text-lg text-[#cfdbde] mb-8">{description}</p>
        <p className="text-lg text-[#cfdbde] mb-8 font-medium">{date}</p>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {techBadges.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gradient-to-b from-[#0f4d5b] to-[#07262d] text-[#e7edee] text-sm font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex w-full justify-evenly mb-8 ">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-300 hover:bg-gray-200 text-gray-800 text-md font-medium rounded-md transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Repo
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-md font-medium rounded-md transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
