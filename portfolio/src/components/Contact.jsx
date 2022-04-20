//Componente Contact
import React from "react";
import { Link } from "react-router-dom";

export const Contact = () => {
 return(
    <div className="Lowbar">
        <p>Copyright © Demian Ferreyra</p>
        <a href="https://www.linkedin.com/in/demian-ferreyra-95296a227/">
         <img src={require(`../icons/linkedin.svg`).default} alt="socialmedia"/>
        </a>
        <a href="https://github.com/DemianFerreyra/DemianFerreyraREADME">
         <img src={require(`../icons/Knowledge/github.svg`).default} alt="socialmedia"/>
        </a>
  </div>
 )
};