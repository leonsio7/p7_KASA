function Tags(tags) {
    return (
       <div className="tag">
        tags.map{(tag) => <span className="span">{tag}</span>}
       </div>
    );
  }
  
  export default Tags;