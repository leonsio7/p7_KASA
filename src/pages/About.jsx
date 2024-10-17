import '../styles/about.css'
import Banner from "../components/Banner"
import Collaps from "../components/collaps"
import photo from '../assets/Image_source_2.png'
function About() {
    return (
       <section className='about-page'>
       <Banner img={photo} titre=""/>
       
        <div className="accordion">
          <Collaps id="item1" 
          title="Fiabilité"  
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
          <Collaps id="item2" 
          title="Respect"  
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." 
          />
          <Collaps id="item3" 
          title="Service"  
          description="La qualité du service est au cœur de notre engagement chez Kasa. 
          Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
          />
          <Collaps id="item4" 
          title="Sécurité"  
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
          chaque logement correspond aux critères de sécurité établis par nos services."
          />
         
        </div>
      </section>
    );
  }
  
  export default About;