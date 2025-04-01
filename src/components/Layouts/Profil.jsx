import React from "react";

const Profil = () => {
  return (
    <section className="container py-5">
      <div className="row g-4">
        {/* Profile Section */}
        <article className="col-12 col-lg-6">
          <div className="card shadow-lg h-100">
            <div className="card-body">
              <h1 className="card-title text-primary mb-4">Profile</h1>
              <div className="mb-3">
                <strong className="text-secondary">Full Name</strong>
                <p className="text-dark">ANDRIANOMENJANAHARY Eddy Saive Ibrahim</p>
              </div>
              <hr />
              <div className="mb-3">
                <strong className="text-secondary">Email</strong>
                <p className="text-dark">laplumenoire001@gmail.com</p>
              </div>
              <hr />
              <div className="mb-3">
                <strong className="text-secondary">Phone</strong>
                <p className="text-dark">+261 038 10 200 34</p>
              </div>
              <hr />
              <div className="mb-3">
                <strong className="text-secondary">State</strong>
                <p className="text-dark">Madagascar</p>
              </div>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
};

export default Profil;
