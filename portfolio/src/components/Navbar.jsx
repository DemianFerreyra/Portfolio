//Componente Navbar
import React from "react";

export const Navbar = () =>{
  const scroll = () =>{
    window.scrollTo({
      top: `5000vw`,
      behavior: "smooth"
    });
  } 
    return(
        <div className="Navbar">
          <ul>
              <button className = "switch" id = "switch">
                <span><img src = {require(`../icons/sun.svg`).default} alt="ligth"/></span>
                <span><img src = {require(`../icons/moon.svg`).default} alt="dark"/></span>
              </button>
          <li><button onClick={() => scroll()}>Inicio</button></li>
          <li><button onClick={() => scroll()}>Sobre mi</button></li>
          <li><button onClick={() => scroll()}>Proyectos</button></li>
          <li><button onClick={() => scroll()}>Contacto</button></li>
          <button className = "switch" id = "switch">
                <span>eng</span>
                <span>esp</span>
              </button>
          </ul>
        </div>
    )
}