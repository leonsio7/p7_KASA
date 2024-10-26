import { useParams } from "react-router-dom";
import logements from "../data/logements.json"
function Location() {
  const { id } = useParams();
  const Location = logements.find((log) => log.id === id)
    return (
      <>
      <p>{Location.title}</p>
      <p>{id}</p>
      </>
    );
  }
  
  export default Location;