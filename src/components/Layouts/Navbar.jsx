import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
       
        {/* Navigation Items */}
        <div className="d-flex w-100 justify-content-end align-items-center">
          <ul className="navbar-nav d-flex flex-row gap-3">
            {/* Projects */}
            <li className="nav-item">
              <a className="nav-link text-dark" href="index.html">
                Projects
              </a>
            </li>
            {/* Contacts */}
            <li className="nav-item">
              <a className="nav-link text-dark" href="about.html">
                Contacts
              </a>
            </li>
           
            {/* Github */}
            <li className="nav-item">
              <a
                className="btn btn-dark rounded-5 d-flex align-items-center gap-2 px-3"
                href="https://github.com/Eddy007Saive"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
