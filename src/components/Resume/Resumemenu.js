import React from "react";

export default function Resumemenu() {
  return (
    <nav className="mx-10 p-10 sticky top-40" id="resumeMenu">
      <ul
        className="nav flex-column nav-underline justify-center"
        id="resumeMenuContent"
      >
        <li className="nav-item">
          <a className="nav-link" href="#item1">
            Education
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#item2">
            Experience
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#item3">
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
}
