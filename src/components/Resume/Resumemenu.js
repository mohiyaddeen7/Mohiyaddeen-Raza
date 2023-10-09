import React from "react";

export default function Resumemenu() {
  return (
    <nav id="navbar" className="mx-10 p-10">
      <ul className="nav flex-column md:sticky static top-0 nav-underline justify-center">
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
