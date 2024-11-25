import { useParams, useNavigate } from "react-router-dom";
import logements from "../data/logements.json";
import Slide from "../components/Slide";
import Tags from "../components/Tags";
import Star from "../components/Star";
import Host from "../components/Host";
import Collaps from "../components/collaps";
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
  }, [id, Location]);

  if (!Location) return null;

  return (
    <>
      <Slide pictures={Location.pictures} />

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
        <Collaps title="Description" content={Location.description} />
        <Collaps title="Équipements" content={Location.equipments} />
      </div>
    </>
  );
}

export default Location;
