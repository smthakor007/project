import React from "react";
export default function Home() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
          <div className="container">
            <a className="navbar-brand fw-bold text-success fs-3" href="#">
              MyWebsite
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link text-success fw-semibold" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-success fw-semibold" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-success fw-semibold" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold">Welcome to My Website</h1>
         
          <a href="#about" className="btn btn-outline-light btn-lg">
            Learn More
          </a>
        </div>
      </section>

      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 text-success">About Us</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
                alt="About"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros,
                a bibendum justo nisi non nunc. Fusce quis lorem sapien.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                fermentum massa non est vehicula, eget volutpat ex tincidunt.
              </p>
              <a href="#contact" className="btn btn-success mt-3">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 text-success">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center p-4 bg-dark text-white">
        &copy; 2025 MyWebsite. All rights reserved.
      </footer>
    </>
  );
}