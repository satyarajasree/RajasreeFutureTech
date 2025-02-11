import React, { useState } from "react";

const Base = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <header
        id="header"
        className="header d-flex align-items-center sticky-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto"
          >
            <h1 className="sitename">Rajasree FutureTech</h1>
          </a>

          {/* Navbar for Desktop */}
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="#hero" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
            </ul>
            <i
              className="mobile-nav-toggle d-xl-none bi bi-list"
              onClick={toggleMobileMenu}
            ></i>
          </nav>

          {/* Get Started Button */}
          <a className="btn-getstarted" href="index.html#about">
            Get Started
          </a>
        </div>
      </header>

      {/* Mobile Popup (Modal) for Mobile View */}
      {showMobileMenu && (
        <div
          className="mobile-menu-popup"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="popup-content"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              width: "80%",
              maxWidth: "300px",
            }}
          >
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "10px 20px",
                border: "none",
                backgroundColor: "#f44336",
                color: "#fff",
                fontSize: "16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={toggleMobileMenu}
            >
              X
            </button>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#hero" onClick={toggleMobileMenu}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  onClick={toggleMobileMenu}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#services"
                  onClick={toggleMobileMenu}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team" onClick={toggleMobileMenu}>
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  onClick={toggleMobileMenu}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#careers"
                  onClick={toggleMobileMenu}
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Base;
