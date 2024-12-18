import About from "@/components/About";
import Contact from "@/components/Contact";
import MainHome from "@/components/MainHome";
import ProjectsList from "@/components/ProjectsList";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col w-full items-center justify-center sm:items-center">
        < MainHome />
        < About />
        < ProjectsList />
        < Contact />
      </main>
    </div>
  );
}
