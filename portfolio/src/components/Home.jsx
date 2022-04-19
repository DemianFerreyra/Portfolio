//Componente home
import { Orbit } from './Orbit';
import { front, back, generals } from '../knowledge/orbitobjects';
import { Project } from './Project';
import {proyectos} from '../knowledge/proyects';
import React, {useState} from "react";


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
          <div className="Intro">
            <p className="tagleft">{`<h1>`}</p>
             <h1 className="Title"><span style={{color: "red"}}>Hi! </span>im Demian</h1>
             <p className="tagright">{`<h1>`}</p>
          </div>    
          <div className='Aboutme'>
           <p>Desarrollador web full stack. Graduado de la academia <a href="https://www.soyhenry.com/" style={{color:"white"}}>SoyHenry</a>.Tengo conocimientos en:</p>
          </div>
          <div className="Knowledge">
           {
           orbits?.map((orbit) => 
             <Orbit baseimg = {orbit.baseimg} knowns = {orbit.images} topmargin = {orbit.topmargin} leftmargin = {orbit.leftmargin} size = {orbit.size} know = {orbit.know} margintext = {orbit.margintext} id = {orbit.id}/>
           )
          }
          </div>
          <div className="Projects">
          <button className="leftb2" onClick={next} style={{left:"0", transform: `translateY(20vw)`}}>&larr;</button> 
          <button className="rightb2" onClick={prev} style={{right:"0", transform: `translateY(20vw)`}}>&rarr;</button>   
           {
           projects.map((project, index) => 
             <div className={slideIndex === index + 1 ? "Projecto active-anim" : "Projecto"}>
               <Project name = {project.name} desc = {project.desc} link = {project.link} images = {project.images} />
             </div>
           )
          }
          </div>
        </div>
    )
}

