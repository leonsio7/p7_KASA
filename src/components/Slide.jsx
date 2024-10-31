import { useState } from "react";
import "../styles/slide.scss";
import "../assets/arrow_left.png";
import "../assets/arrow_right.png";

function Slide({pictures} ) {

   const [index,setIndex] = useState(0)
    return (
        
       <div className="Slide">
      <img src={pictures[index]} alt="Slide" />
      <button 
      onClick={() => (index === 0 ? setIndex(pictures.length -1) : setIndex(index -1))}>
        {/* <img src={arrow_left} alt="backFlash" /> */} Back
      </button>
      
      <button
        onClick={() => setIndex((index + 1) % pictures.length)}>
            {/* <img src={arrow_right} alt="nextFlash" /> */} Next

        </button>
       </div>
    
    );
  }
  
  export default Slide;