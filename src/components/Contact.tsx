import React from "react";
import { icons } from "./icons";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-[#061e24] to-[#020c0e]  justify-between w-full min-h-full pt-24">
      <section id="Contact" className="w-full items-center justify-center text-center h-auto ">
        <h1 className="text-[#b7c9cd] text-[2.75rem] lg:text-6xl font-normal lg:font-thin mb-8">Contacto</h1>
        <p className="text-[#b7c9cd] text-xl lg:text-2xl font-thin mb-12">Contáctame para dar vida a tus ideas o simplemente para saludarme.</p>
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
                    <div className="h-[70px] flex items-center justify-center">
                      <IconComponent
                        className=" w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20  text-[#b7c9cd] group-hover:text-[#cfdbde] group-hover:scale-110 transition-all duration-700 ease-in-out"
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
      </section>
      <section id="Footer" className="flex w-full h-[20%] pt-10 px-2 lg:px-4 ">
        <div className="flex max-w-6xl h-full mx-auto flex-col sm:flex-row items-end mb-5 justify-around gap-4">
          <p className="text-lg text-[#b7c9cd] text-center sm:text-left">
            &copy; {new Date().getFullYear()} Con ❤ por <span> </span>
            <a
              href="https://github.com/B9inzon"
              className="hover:underline transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brandon Pinzón
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;

