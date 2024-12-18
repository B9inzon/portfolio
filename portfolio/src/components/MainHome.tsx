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
      <button></button>
    </section>
  );
};

export default MainHome;
