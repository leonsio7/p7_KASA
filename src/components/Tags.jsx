import "../styles/tags.scss";

function Tags({ tags }) {
  return (
    <div className="tagList">
      {tags.map((tag, index) => (
        <span key={index} className="span">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
