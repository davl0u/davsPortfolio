import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

export default function FourthContents() {
  const projects = [
    {
      id: 1,
      imageName: "vstest.png",
      name: "Project 1",
      codeLink: "#",
      projectLink: "#",
    },
    {
      id: 2,
      imageName: "vstest.png",
      name: "Project 2",
      codeLink: "#",
      projectLink: "#",
    },
    {
      id: 3,
      imageName: "vstest.png",
      name: "Project 3",
      codeLink: "#",
      projectLink: "#",
    },
    {
      id: 4,
      imageName: "vstest.png",
      name: "Project 4",
      codeLink: "#",
      projectLink: "#",
    },
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleMouseEnter = (projectId: number) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div id="projects" className="max-w-[850px] w-full mx-auto">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        stopOnHover={true}
        selectedItem={0}
        showThumbs={false}
        dynamicHeight={true}
        useKeyboardArrows={true}
        className="carousel-wrapper"
      >
        {projects.map((project) => (
          <div key={project.id} className="relative px-5">
            <div
              className="relative overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={`/images/${project.imageName}`}
                alt={project.name}
                width={400}
                height={225}
                layout="responsive"
              />
              {hoveredProject === project.id && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300">
                  <div className="text-white text-center">
                    <p className="text-lg font-bold mb-2">{project.name}</p>
                    <div className="flex justify-center">
                      <a
                        href={project.projectLink}
                        className="text-blue-500 hover:text-blue-700 mr-4"
                      >
                        View Project
                      </a>
                      <a
                        href={project.codeLink}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
