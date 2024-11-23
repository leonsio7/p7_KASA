import { useState } from 'react';
import '../styles/collaps.scss';
import img from '../assets/arrow_collapse.png';

function Collaps({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsContainer">
      <h2 onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`arrow ${isOpen ? 'open' : ''}`}><img src={img} alt='imgage de fleche' /></span> 
      </h2>
      {isOpen && (
        <div className="collapsContent">
          {Array.isArray(content) 
            ? content.map((item, index) => <p key={index}>{item}</p>) 
            : <p>{content}</p>
          }
        </div>
      )}
    </div>
  );
}

export default Collaps;