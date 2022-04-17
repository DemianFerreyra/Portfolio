//Componente home
import { Orbit } from './Orbit';
import { front } from '../knowledge/orbitobjects';
import React from "react";

export const Home = () =>{
    const orbits = [front]
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
           <p>Aca hablo de mi</p>
          </div>
          <div className="Knowledge">
           {
           orbits?.map((orbit) => 
             <Orbit baseimg = {orbit.baseimg} knowns = {orbit.images} topmargin = {orbit.topmargin} leftmargin = {orbit.leftmargin}/>
           )
          }
          </div>
        </div>
    )
}