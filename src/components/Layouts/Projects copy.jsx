import React from "react";
import "@/assets/css/bootstrap.min.css";
import "../../assets/css/projects.css";
import { FaGithub } from "react-icons/fa";
import ipocrate from "../../assets/images/ipocrate.png"
import instat from "../../assets/images/INSTAT.png"
import databoost from  "../../assets/images/Eddy.png"

const ProjectsCarousel = () => {
  const projects = [
    {
      name: "iPocrate - Medical Management Platform",
      description:
        "A platform for managing patients, consultations, prescriptions, and automated medical observations.",
      technologies: "Laravel, Inertia.js, Vue.js, TailwindCSS, MySQL",
      highlights: [
        "Automatic generation of medical observations.",
        "Validation and management of allergies, medical history, and lifestyle habits.",
      ],
      image:ipocrate,
      link: "github"
    },
    {
      name: "Website for INSTAT Madagascar",
      description:
        "A data request management site for INSTAT Madagascar, with an admin and user interface.",
      technologies: "Laravel, Vue.js",
      highlights: [
        "Intuitive user interface for managing requests.",
        "Admin functionalities for processing requests.",
      ],
      image: instat,
      link: "github"
    },
    {
      name: "Foreign Trade Data Visualization (INSTAT)",
      description:
        "A tool for visualizing data on foreign trade and companies in Madagascar.",
      technologies: "Laravel, JavaScript, Chart.js",
      highlights: [
        "Interactive display of statistical data.",
        "Update and optimization of existing features.",
      ],
      image: "/assets/images/Eddy.png",
      link: "github"
    },
    {
      name: "Databoost.us",
      description:
        "A modern platform for managing data requests, designed to streamline communication between customers and administrators with a modern and intuitive interface.",
      technologies: "Symfony, JavaScript, SASS, HTML",
      highlights: [
        "Optimization of the management of tourist trips.",
        "Administrative role with the integration of management tools.",
      ],
      image: "/assets/images/Eddy.png",
      link: "https://databoost.us/"
    },

    {
      name: "SwiftCart",
      description:
        "A modern platform for managing data requests, designed to streamline communication between customers and administrators with a modern and intuitive interface.",
      technologies: "Symfony, JavaScript, SASS, HTML",
      highlights: [
        "Optimization of the management of tourist trips.",
        "Administrative role with the integration of management tools.",
      ],
      image: "/assets/images/Eddy.png",
      link: "https://swiftcart.databoost.us/"
    },
  ];

  return (
    <div id="projects" className="container my-5">
      <h2 className="text-center mb-4">My Projects</h2>
   
      <section id="services" className="services section">
        <div className="container">
          <div className="row gy-4">
            {projects.map((project, index) => (
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 * (index + 1)} key={index}>
                <div className={`service-item item-${index % 6 === 0 ? 'cyan' : index % 6 === 1 ? 'orange' : index % 6 === 2 ? 'teal' : index % 6 === 3 ? 'red' : index % 6 === 4 ? 'indigo' : 'pink'} position-relative`}>
                  <div className="github-icon">
                    <a href={project.link === "github" ? "https://github.com" : project.link} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </div>


                  <a href={project.link} className="stretched-link text-white">
                    <h3>{project.name}</h3>
                  </a>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    <small>{project.technologies}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsCarousel;