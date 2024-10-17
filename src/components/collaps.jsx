function Collaps({id, title, description}) {
    return (
        <>
        <input type="checkbox" id={id} className="accordion-toggle" />
          <label htmlFor={id} className="accordion-header">{title}</label>
          <div className="accordion-body">
            <p>{description}</p>
          </div>
        </>
    );
  }
  
  export default Collaps;