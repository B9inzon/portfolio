import { icons } from "@/components/icons/icons";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
        <main className="flex flex-col w-full items-center justify-center sm:items-center">
          <section className="flex flex-col min-h-screen  w-full items-center justify-center">
            <h1 className="text-[#b7c9cd] font-thin text-8xl pb-10">Brandon Pinzón</h1>
            <h1 className="text-[#b7c9cd] font-thin text-6xl pb-10">Front End Developer</h1>
            <p className="text-[#b7c9cd] font-thin text-xl pb-16">Quiero mejorar el mundo, una linea de código a la vez.</p>
            <div className="flex flex-row w-full h-20 items-center justify-center gap-20">
              {icons &&
                icons.map((icon, index) => {
                  const IconComponent = icon.image;
                  return (
                    <Link
                      key={`icon-${index}`}
                      href={icon.url}
                      target="_blank"
                      className="group"
                    >
                      <IconComponent
                        size={70}
                        className="text-[#b7c9cd] group-hover:text-[#cfdbde] group-hover:scale-125 transition-all duration-700 ease-in-out"
                      />
                    </Link>
                  );
                })}
            </div>
          </section>
          <section id="About" className="flex flex-row items-center justify-center bg-[#061e24] bg-opacity-100 gap-20 min-h-screen">
            <img 
              src="./assets/brandonpinzon.jpeg"
              alt="Fotografía de Brandon Pinzón"
              className="w-80 h-80 rounded-full overflow-hidden"
            />
            <div className="items-center text-center w-1/2">
              <h1 className="text-[#b7c9cd] text-6xl font-thin pb-10">Acerca de Mi</h1>
              <p className="text-[#b7c9cd] text-xl font-thin">
                Hola, soy Brandon Pinzón, desarrollador front end con experiencia en la creación de proyectos personales y académicos, estoy mejorando mis habilidades en tecnologias clave como React, Node.js, NextJs, CSS, HTML, TypeScript y JavaScript. Vivo en Bogotá, Colombia, y estoy buscando oportunidades para contribuir al desarrollo de aplicaciones innovadoras mientras sigo creciendo profesionalmente.
                Me apasiona trabajar en equipo, ayudar a las personas y ser parte de proyectos con impacto. Contáctame para conversar sobre cómo puedo aportar al éxito de tu proyecto. ¡Hagamos realidad las ideas!
              </p>
            </div>
          </section>
          <section id="Projects" className="min-h-screen pt-20">
            <h1 className="text-[#b7c9cd] text-6xl font-thin pb-10">Proyectos Recientes</h1>
          </section>
        </main>       
      </div>
  );
}
