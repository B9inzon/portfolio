import Link from "next/link";
import React from "react";
import BurguerMenu from "./BurguerMenu";

const Navigation = () => {
  return (
    <nav
      className="flex items-center justify-between h-20 px-10  lg:px-14 fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-md bg-[#07262d]"
      id="navigation"
    >
      <div className="flex items-center">
        <Link href="#Main">
          <h1 className="font-medium text-xl text-[#b7c9cd]">{`< Brandon />`}</h1>
        </Link>
      </div>
      <ul className="hidden font-thin lg:flex lg:items-center space-x-10 text-xl text-[#b7c9cd]">
        <li>
          <a href="#About">Acerca de mi</a>
        </li>
        <li>
          <a href="#Projects">Proyectos</a>
        </li>
        <li>
          <a href="#Contact">Contáctame</a>
        </li>
      </ul>
      <div className="lg:hidden">
        <BurguerMenu />
      </div>
    </nav>
  );
};

export default Navigation;

