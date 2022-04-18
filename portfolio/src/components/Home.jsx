//Componente home
import { Orbit } from './Orbit';
import { front, back, generals } from '../knowledge/orbitobjects';
import React from "react";

export const Home = () =>{
    const orbits = [front, back, generals]
    console.log('cantidad de objetos orbita', orbits)
    console.log('knowns', orbits[0].images)
    return(
        <div>
          <div className="Intro">
            <p className="tagleft">{`<h1>`}</p>
             <h1 className="Title"><span style={{color: "red"}}>Hi! </span>im Demian</h1>
             <p className="tagright">{`<h1>`}</p>
          </div>    
          <div className='Aboutme'>
           <p>Desarrollador web full stack. Graduado de la academia <a href="https://www.soyhenry.com/">SoyHenry</a>.Tengo conocimientos en:</p>
          </div>
          <div className="Knowledge">
           {
           orbits?.map((orbit) => 
             <Orbit baseimg = {orbit.baseimg} knowns = {orbit.images} topmargin = {orbit.topmargin} leftmargin = {orbit.leftmargin} size = {orbit.size} know = {orbit.know} margintext = {orbit.margintext} id = {orbit.id}/>
           )
          }
          </div>
        </div>
    )
}