//Componente Navbar
import React from "react";

export const Navbar = () =>{
    return(
        <div className="Navbar">
          <ul>
              <button className = "switch" id = "switch">
                <span><img src = {require(`../icons/sun.svg`).default} alt="ligth"/></span>
                <span><img src = {require(`../icons/moon.svg`).default} alt="dark"/></span>
              </button>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Sobre mi</a></li>
          <li><a href="#">Proyectos</a></li>
          <li><a href="#">Contacto</a></li>
          <button className = "switch" id = "switch">
                <span>eng</span>
                <span>esp</span>
              </button>
          </ul>
          <hr />
        </div>
    )
}