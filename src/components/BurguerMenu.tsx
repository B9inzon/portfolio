"use client";

import { Menu } from "lucide-react";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

const BurguerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const switchMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Menu size={32} color="#b7c9cd" strokeWidth={2} className="lg:hidden" onClick={switchMenu} />
      <div
        className={`fixed top-0 right-0 min-h-screen w-60 bg-gradient-to-b from-[#061e24] to-[#020c0e] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <CgClose
            size={32}
            color="#b7c9cd"
            strokeWidth={2}
            onClick={switchMenu}
          />
        </div>
        <ul className=" flex h-full flex-col font-medium items-center space-y-6 text-xl mt-10 text-[#b7c9cd] transition ">
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
      </div>
      {isOpen && (
        <div
          className="fixed h-screen inset-0 bg-black opacity-80 lg:hidden z-40"
          onClick={switchMenu}
        ></div>
      )}
    </div>
  );
};

export default BurguerMenu;
