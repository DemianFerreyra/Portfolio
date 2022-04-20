//Componente home
import { Orbit } from './Orbit';
import { front, back, generals } from '../knowledge/orbitobjects';
import { Project } from './Project';
import {proyectos} from '../knowledge/proyects';
import React, {useState} from "react";
import { Contact } from './Contact';

export const Home = () =>{
    const orbits = [front, back, generals]
    const projects = proyectos

    const [slideIndex, setSlideIndex] = useState(1)

    const next = () => {
     if(slideIndex !== projects.length){setSlideIndex(slideIndex + 1)}
     else{setSlideIndex(1)}
     console.log('next', slideIndex)
    }
    const prev = () => {
      if(slideIndex !== 1){setSlideIndex(slideIndex - 1)}
      else{setSlideIndex(projects.length)}
      console.log('prev', slideIndex)
    }

    return(
        <div>
          <div className="Intro" id='beginning'>
            <p className="tagleft">{`<h1>`}</p>
             <h1 className="Title"><span style={{color: "red"}}>Hi! </span>im Demian</h1>
             <p className="tagright">{`<h1>`}</p>
          </div>    
          <div className='Aboutme' id='aboutme'>
           <p>Full stack web developer,graduated from <a href="https://www.soyhenry.com/" style={{color:"white"}}>SoyHenry</a> academy.I have knowledge on:</p>
          </div>
          <div className="Knowledge">
           {
           orbits?.map((orbit) => 
             <Orbit baseimg = {orbit.baseimg} knowns = {orbit.images} topmargin = {orbit.topmargin} leftmargin = {orbit.leftmargin} size = {orbit.size} know = {orbit.know} margintext = {orbit.margintext} id = {orbit.id}/>
           )
          }
          </div>
          <div className="Projects" id='projects'>
          <button className="leftb2" onClick={next}>&larr;</button> 
          <button className="rightb2" onClick={prev}>&rarr;</button>   
           {
           projects.map((project, index) => 
             <div className={slideIndex === index + 1 ? "Projecto active-project" : "Projecto"}>
               <Project name = {project.name} desc = {project.desc} link = {project.link} images = {project.images} />
             </div>
           )
          }
          </div>
          <div className='Contact' style={{bottom: "0", marginTop: "8vw"}} id= "contact">
            <h1 style={{fontSize: "3.5vw",marginTop: "15vw", marginBottom: "3vw"}}>Thanks for your visit! If you got interested, contact me</h1>
            <Contact/>
          </div>
        </div>
    )
}