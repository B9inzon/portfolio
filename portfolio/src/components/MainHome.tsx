import React from "react";
import { icons } from "./icons";
import Link from "next/link";

const MainHome = () => {
  return (
    <section
      id="Main"
      className="flex flex-col min-h-screen  w-full items-center justify-center"
    >
      <h1 className="text-[#b7c9cd] font-thin text-5xl mb-6 md:text-7xl md:mb-8  lg:text-8xl lg:mb-10">
        Brandon Pinzón
      </h1>
      <h1 className="text-[#667528] font-thin text-4xl mb-6 md:text-5xl md:mb-8 lg:text-6xl lg:mb-10">
        Front End Developer
      </h1>
      <p className="text-[#b7c9cd] font-thin text-md pb-10 md:text-lg md:mb-14 lg:text-xl lg:mb-16">
        Quiero mejorar el mundo, una linea de código a la vez.
      </p>
      <div className="flex flex-row w-full items-start justify-center gap-8 md:gap-20 mb-20">
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
                    <div className="h-[40px] md:h-[70px] flex items-center justify-center">
                      <IconComponent
                        className=" w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20  text-[#b7c9cd] group-hover:text-[#cfdbde] group-hover:scale-110 transition-all duration-700 ease-in-out"
                      />
                    </div>
                    {icon.label && (
                      <span className="text-[#b7c9cd] text-xs md:text-sm mt-2 block">{icon.label}</span>
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
