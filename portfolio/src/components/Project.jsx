import React, {useState} from "react";
export const Project = ({ name, desc, link, images }) => {
  const [slideIndex, setSlideIndex] = useState(1)

  const next = () => {
   if(slideIndex !== images.length){setSlideIndex(slideIndex + 1)}
   else{setSlideIndex(1)}
   console.log('next', slideIndex)
  }
  const prev = () => {
    if(slideIndex !== 1){setSlideIndex(slideIndex - 1)}
    else{setSlideIndex(images.length)}
    console.log('prev', slideIndex)
  }

  return (
    <div className="Project">
      {{ link } ? (
        <h1 style={{fontSize: '3vw'}}>
          <a href={link} style={{color: "white"}}>{name}</a>
        </h1>
      ) : (
        <h1 style={{fontSize: '3vw'}}>{name}</h1>
      )}
      <div className="Projectshow">
      <button className="leftb" onClick={prev} style={{transform: 'translateX(0.5vw)'}}>&larr;</button>  
      <button className="rightb" onClick={next} style={{transform: 'translateX(36.5vw)'}}>&rarr;</button>
        <div className="ImagesSlide" style={{border: '1px solid white'}}>
          <ul className="Slide">
            {images.map((image, index) => (
                <div className={slideIndex === index + 1 ? "ShowImage active-anim" : "ShowImage"} >
                  <img src={require(`../knowledge/projects/${image}`)} alt="no encontramos" className="ShownImage"/>
                </div>           
            ))}
          </ul>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};
