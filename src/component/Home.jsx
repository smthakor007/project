import React from "react";

export default function Home() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ===== Navbar ===== */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary fs-4" href="#">
            MyModernSite
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto fw-semibold gap-3">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section
        className="d-flex align-items-center text-white"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "56px",
        }}
      >
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-3">
            Build <span className="text-primary">Modern</span> Websites
          </h1>
          <p className="lead mb-4">
            Clean UI • Fast Performance • Fully Responsive Design
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary btn-lg px-5 shadow">
              Get Started
            </button>
            <button className="btn btn-outline-light btn-lg px-5">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">About Us</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            We design and develop modern, scalable and high-performance
            web applications using the latest technologies.
          </p>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Features</h2>

          <div className="row g-4">
            {[
              {
                title: "Fast Performance",
                icon: "⚡",
                desc: "Optimized code for blazing fast speed.",
              },
              {
                title: "Responsive Design",
                icon: "📱",
                desc: "Perfect UI on all screen sizes.",
              },
              {
                title: "Secure System",
                icon: "🔒",
                desc: "Best security standards & practices.",
              },
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="card h-100 border-0 shadow-sm text-center p-4 feature-box">
                  <div className="fs-1 mb-3">{item.icon}</div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section className="py-5 bg-light">
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2 className="text-center fw-bold mb-4">Contact Us</h2>

          <form className="shadow-sm p-4 bg-white rounded">
            <input className="form-control mb-3" placeholder="Your Name" />
            <input className="form-control mb-3" placeholder="Your Email" />
            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Message"
            ></textarea>
            <button className="btn btn-primary w-100 btn-lg">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-dark text-white text-center py-3">
        © {new Date().getFullYear()} MyModernSite • Designed with ❤️
      </footer>
    </div>
  );
}
