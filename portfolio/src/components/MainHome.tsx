import React from "react";
import { icons } from "./icons";
import Link from "next/link";

const MainHome = () => {
  return (
    <section
      id="Main"
      className="flex flex-col min-h-screen  w-full items-center justify-center"
    >
      <h1 className="text-[#b7c9cd] font-thin text-8xl mb-10">
        Brandon Pinzón
      </h1>
      <h1 className="text-[#b7c9cd] font-thin text-6xl mb-10">
        Front End Developer
      </h1>
      <p className="text-[#b7c9cd] font-thin text-xl mb-16">
        Quiero mejorar el mundo, una linea de código a la vez.
      </p>
      <div className="flex flex-row w-full items-start justify-center gap-20 mb-20">
          {icons &&
            icons.map((icon, index) => {
              const IconComponent = icon.image;            
              return (
                <div key={`icon-${index}`} className="flex flex-col items-center">
                  <Link
                    href={icon.url}
                    target="_blank"
                    className="group flex flex-col items-center"
                  >
                    <div className="h-[70px] flex items-center justify-center">
                      <IconComponent
                        size={70}
                        className="text-[#b7c9cd] group-hover:text-[#cfdbde] group-hover:scale-125 transition-all duration-700 ease-in-out"
                      />
                    </div>
                    {icon.label && (
                      <span className="text-[#b7c9cd] text-sm mt-2 block">{icon.label}</span>
                    )}
                  </Link>
                </div>
              );
            })}
        </div>
      <button></button>
    </section>
  );
};

export default MainHome;
