import React, { useState } from "react";
import "@/assets/css/bootstrap.min.css";
import "../../assets/css/projects.css";
import { FaGithub } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";
import ipocrate from "../../assets/images/ipocrate.png"
import instat from "../../assets/images/INSTAT.png"
import SwiftCart from "../../assets/images/SwiftCart.png"
import databoost from  "../../assets/images/Databoost.png"

const ProjectsCarousel = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

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
      image: ipocrate,
      link: "https://github.com/Eddy007Saive/Gestion-Medicale",
      longDescription: "iPocrate is a comprehensive medical management platform designed to streamline healthcare workflows. The platform enables medical professionals to efficiently manage patient records, schedule consultations, issue prescriptions, and generate automated medical observations based on input data. The system includes robust validation checks for allergies and medical history, ensuring patient safety."
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
      link: "https://github.com/Eddy007Saive/Instats",
      longDescription: "Developed for the National Institute of Statistics of Madagascar (INSTAT), this platform facilitates data requests from researchers, businesses, and government entities. The system features a dual interface: a user-facing portal for submitting and tracking requests, and an administrative backend for INSTAT staff to process, approve, and deliver requested data sets."
    },
    {
      name: "Foreign Trade Data Visualization (INSTAT)",
      description:
        "A tool for visualizing data on foreign trade and companies in Madagascar.",
      technologies: "Symfony, JavaScript, Chart.js",
      highlights: [
        "Interactive display of statistical data.",
        "Update and optimization of existing features.",
      ],
      image: databoost,
      link: "github",
      longDescription: "This specialized visualization tool transforms complex foreign trade data into accessible, interactive charts and graphs. Built for INSTAT Madagascar, it helps analysts and policymakers understand trade patterns, economic trends, and corporate activities within the country. The application features responsive visualizations that adapt to different data sets and user queries."
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
      image: databoost,
      demo:true,
      link: "https://databoost.us/",
      longDescription: "Databoost.us is a cutting-edge platform that revolutionizes data request management. The system features an intuitive interface for customers to submit and track their data needs, while administrators benefit from comprehensive tools to process requests efficiently. Additionally, the platform includes specialized features for tourism sector data, helping agencies optimize trip planning based on statistical insights."
    },

    {
      name: "SwiftCart",
      description:
        "SwiftCart is an all-in-one store management platform that helps merchants track inventory, sales, and orders efficiently. With an intuitive interface, it streamlines product, customer, and transaction management while offering analytics for business optimization.",
      technologies: "Symfony, JavaScript, SASS, HTML",
      highlights: [
        "Optimization of the management of tourist trips.",
        "Administrative role with the integration of management tools.",
      ],
      image: SwiftCart,
      demo:true,
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

                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tech-stack">
                    <small>{project.technologies}</small>
                  </div>
                  
                  <button 
                    className="btn btn-details mt-3"
                    onClick={() => handleShow(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        {selectedProject && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-project-image mb-4">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.name} 
                  className="img-fluid rounded"
                />
              </div>
              
              <h5>Description</h5>
              <p>{selectedProject.longDescription}</p>
              
              <h5>Technologies</h5>
              <p>{selectedProject.technologies}</p>
              
              <h5>Key Highlights</h5>
              <ul>
                {selectedProject.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              
              <div className="text-end mt-4">
                <a 
                  href={selectedProject.link === "github" ? "https://github.com" : selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-dark me-2"
                >
                  <FaGithub className="me-2" /> View Repository
                </a>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ProjectsCarousel;