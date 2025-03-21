import React from "react";
import Link from "next/link";
import { skills } from "./icons";

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col py-28 lg:flex-row  items-center justify-center bg-[#061e24]  lg:gap-20 min-h-screen"
    >
      <img
        src="./brandonpinzon.jpeg"
        alt="Fotografía de Brandon Pinzón"
        className="w-36 h-36 lg:w-80 lg:h-80 mb-4 rounded-full overflow-hidden"
      />
      <div className=" flex flex-col items-center text-center w-full lg:w-1/2 p-5">
        <h1 className="text-[#b7c9cd] text-4xl lg:text-6xl font-normal lg:font-thin mb-6 lg:mb-10">
          Acerca de Mi
        </h1>
        <p className="text-[#b7c9cd] text-xl text-center lg:text-left font-thin mb-8 leading-8">
          Hola, soy Brandon Pinzón, desarrollador front end con experiencia en
          la creación de proyectos personales y académicos, estoy mejorando mis
          habilidades en tecnologias clave como React, Node.js, Next.js, CSS,
          HTML, TypeScript y JavaScript. Me gusta investigar, aprender, compartir.
        </p>
        <p className="text-[#b7c9cd] text-xl text-center lg:text-left font-thin mb-14 leading-8">
          Vivo en Bogotá, Colombia, y estoy buscando oportunidades para
          contribuir al desarrollo de aplicaciones innovadoras mientras sigo
          creciendo profesionalmente. Me apasiona trabajar en equipo, ayudar a
          las personas y ser parte de proyectos con impacto.
        </p>
        
        <h1 className="text-[#b7c9cd] text-4xl lg:text-6xl font-normal lg:font-thin mb-10">Tecnologías</h1>
        <div className="flex flex-row flex-wrap w-[80%] h-auto items-center justify-center gap-8 ">
          {skills &&
            skills.map((skill, index) => {
              const IconComponent = skill.image;
              return (
                <Link
                  key={`icon-${index}`}
                  href={skill.url}
                  target="_blank"
                  className="group"
                >
                  <IconComponent
                    size={50}
                    className="text-[#b7c9cd] group-hover:text-[#cfdbde] group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default About;
