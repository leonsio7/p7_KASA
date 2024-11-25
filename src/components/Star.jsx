import "../styles/star.scss";

function Star({ rating, maxRating = 5 }) {
  return (
    <div className="stars">
      {Array.from({ length: maxRating }, (_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? "filled" : "empty"}`}
        >
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default Star;
