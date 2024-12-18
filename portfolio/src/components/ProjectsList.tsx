import React from 'react'
import { myProjects } from './myProjects';
import Card from './Card';

const ProjectsList = () => {
  return (
    <section id="Projects" className="flex flex-col items-center w-full min-h-screen py-24 ">
          <h1 className="text-[#b7c9cd] text-6xl font-thin mb-16">
            Proyectos Recientes
          </h1>
          <div className="flex flex-row flex-wrap w-full h-auto items-center justify-center gap-1 ">
              {myProjects &&
                myProjects?.map((project, index) => {
                  return (
                    <div
                      key={`icon-${index}`}
                      className="group w-full"
                    >
                     <Card {... project}/> 
                    </div>
                  );
                })}
            </div>
        </section>
  )
}

export default ProjectsList