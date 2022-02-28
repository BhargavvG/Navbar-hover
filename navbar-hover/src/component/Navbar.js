import React from "react";
import DummyText from "./DummyText";
import HoverSection from "./HoverSection";
import "./navbar.css";
import navData from "./navData";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse ms-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {navData.map((item, i) => {
              return (
                <li className="nav-item me-2">
                  <a className="nav-link" href="#">
                    {item.title}
                  </a>
                  <div className="nav-hover-container">
                    <div className="nav-hover-section">
                      {/* <DummyText /> */}
                      <HoverSection type={item.type} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
