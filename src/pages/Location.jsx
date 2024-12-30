import { useParams, useNavigate } from "react-router-dom";
import logements from "../data/logements.json";
import Gallery from "../components/Gallery";
import Tags from "../components/Tags";
import Star from "../components/Star";
import Host from "../components/Host";
import Collapse from "../components/Collapse";
import "../styles/location.scss";
import { useEffect } from "react";

function Location() {
  const { id } = useParams();
  const navigate = useNavigate();
  const Location = logements.find((log) => log.id === id);

  useEffect(() => {
    if (!Location) {
      navigate("/404");
    }
  }, [id, Location, navigate]);

  if (!Location) return null;

  return (
    <>
      <Gallery pictures={Location.pictures} />

      <div className="location__details">
        <section>
          <h1>{Location.title}</h1>
          <p>{Location.location}</p>
          <Tags tags={Location.tags} />
        </section>
        <section className="location__host">
          <Host host={Location.host} />
          <Star rating={Location.rating} />
        </section>
      </div>

      <div className="Location__collaps">
        <Collapse title="Description" content={Location.description} />
        <Collapse title="Équipements" content={Location.equipments} />
      </div>
    </>
  );
}

export default Location;
