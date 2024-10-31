import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Slide from "../components/Slide";
import Tags from "../components/Tags";
import Star from "../components/Star";
import Host from "../components/Host";



function Location() {
  const { id } = useParams();
  const Location = logements.find((log) => log.id === id)
    return (
      <>
      <Slide pictures={Location.pictures}/>
      <div>
        <section>
        <h1>{Location.title}</h1>
        <p>{Location.location}</p>
        <Tags tags={Location.tags} />
        </section>
        <section>
          <Star />
          <Host />
        </section>
       
      </div>
     
      </>
    );
  }
  
  export default Location;