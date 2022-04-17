import React from "react";

export const Orbit = ({baseimg, knowns, topmargin, leftmargin}) =>{
    console.log('existo y tengo estos knowns', knowns)
    console.log(`../icons/Knowledge/${knowns[0].name}`)
    return(
        <div style={{marginTop:`${topmargin}%`, marginLeft: `${leftmargin}%`}} className="giro">
            <img src={baseimg} alt="base" className="Centerimage"/>
            {
             knowns?.map((known) =>
                 <div className="Orbitobj" style={{animation: `round_round ${known.time}s linear infinite`}}>
                     <div style={{transform:`translateX(${known.distance}vw)`}} className="Suborbit">
                     <img src={require(`../icons/Knowledge/${known.name}`)} alt="conocimiento" className="Orbiticon"/>
                     </div>
                 </div>
             )
            }
        </div>  
    )
    
}
