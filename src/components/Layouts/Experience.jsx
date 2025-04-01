import React from "react";

const Experience = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center text-uppercase mb-4">Experience</h1>
        
        {/* Experience INSTAT Madagascar */}
        <div className="mb-5">
          <h2 className="text-primary">INSTAT Madagascar</h2>
          <div className="mt-3">
            <h5>Data Request Platform</h5>
            <ul className="list-unstyled ms-3">
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Developed a system to process client and admin data requests
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Designed user-friendly interfaces and ensured functionality for both roles
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h5>Data Visualization Platform</h5>
            <ul className="list-unstyled ms-3">
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Designed a platform for visualizing data on foreign trade and enterprises
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Delivered clear, interactive user interfaces with accessible statistics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
