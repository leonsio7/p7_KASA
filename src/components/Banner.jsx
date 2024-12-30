import "../styles/banner.scss";
function Banner({ img, titre }) {
  return (
    <div className="banner">
      <img src={img} alt="montagne" />
      {titre !== "" && <h1>{titre}</h1>}
    </div>
  );
}

export default Banner;
