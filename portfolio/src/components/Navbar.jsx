//Componente Navbar
import React from "react";

export const Navbar = () => {
  const scroll = (el) => {
    const elemento = document.getElementById(el);
    window.scrollTo({
      top: elemento.offsetTop - 100,
      behavior: "smooth",
    });
  };
  return (
    <div className="Navbar">
      <ul>
        <li>
          <a onClick={() => scroll("beginning")}>Beginning</a>
        </li>
        <li>
          <a onClick={() => scroll("aboutme")}>About me</a>
        </li>
        <li>
          <a onClick={() => scroll("projects")}>Projects</a>
        </li>
        <li>
          <a onClick={() => scroll("contact")}>Contact</a>
        </li>
      </ul>
    </div>
  );
};
