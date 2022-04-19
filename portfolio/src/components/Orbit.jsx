import React from "react";

export const Orbit = ({baseimg, knowns, topmargin, leftmargin, size, know, margintext, id}) =>{
    console.log('existo y tengo estos knowns', knowns)
    console.log(`../icons/Knowledge/${knowns[0].name}`)
    return(
        <div style={{width: `${size}vw`,height: `${size}vw`, marginTop:`${topmargin}%`, marginLeft: `${leftmargin}%`}} className="giro" id={id}>
            <ul className="Knowns" style={{transform: `translateX(${margintext}vw)`, position: `absolute`}}>
                <li style={{listStyle: "none"}}>{baseimg}:</li>
            {
                know.map((knowned) =>
                 <li >{knowned}</li>
                )
            }
            </ul>
  
            <p>{baseimg}</p>
            {
             knowns?.map((known) =>
             <div className="Aux" style={{borderRadius: '50%',border: '0.2vw dashed white',width: `${known.distance * 2}vw` ,height: `${known.distance * 2}vw`, zIndex: `-2`}}>
                 <div className="Orbitline" style={{animation: `round_round ${known.time}s linear infinite`}}>
                     <hr className="LineaOrbital" style={{width: `${known.distance}vw`, transform: `translateX(${known.distance / 2}vw)`, border: `0.1vw dashed white`}}/>
                </div>
                 <div className="Orbitobj" style={{animation: `round_round ${known.time}s linear infinite`}}>
                     <div style={{transform:`translateX(${known.distance}vw)`}} className="Suborbit">
                     <img style={{animation: `round_roundfix ${known.time}s linear infinite`}} src={require(`../icons/Knowledge/${known.name}`)} alt="conocimiento" className="Orbiticon"/>
                     </div>
                 </div>
             </div>     
             )
            }
        </div>  
    )
}