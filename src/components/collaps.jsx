import { useState } from 'react';
import '../styles/collaps.scss';

function Collaps({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsContainer">
      <h2 onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`arrow ${isOpen ? 'open' : ''}`}>&#9662;</span> {/* ▼ flash symbol */}
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