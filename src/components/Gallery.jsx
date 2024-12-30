import { useState } from "react";
import "../styles/gallery.scss";
import previous from "../assets/previous.svg";
import next from "../assets/next.svg";

function Gallery({ pictures }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="Slide">
      <img src={pictures[index]} alt="logement" />
      {pictures.length > 1 && (
        <button
          className="Slide__button Slide__button--previous"
          onClick={() =>
            index === 0 ? setIndex(pictures.length - 1) : setIndex(index - 1)
          }
        >
          <img src={previous} alt="backFlash" />
        </button>
      )}

      {pictures.length > 1 && (
        <button
          className="Slide__button Slide__button--next"
          onClick={() =>
            index + 1 === pictures.length ? setIndex(0) : setIndex(index + 1)
          }
        >
          <img src={next} alt="nextFlash" />
        </button>
      )}

      <div className="Slide__indicator">
        {index + 1} / {pictures.length}
      </div>
    </div>
  );
}

export default Gallery ;
