import photo from '../assets/Image_source_1.png';
import Banner from "../components/Banner";
import logements from "../data/logements.json";
import Card from '../components/Card';
import "../styles/gallery.scss"


function Home() {
    return (
       <main>
        <Banner img={photo} titre="Chez vous, partout et ailleurs"/>
        <section className='gallery'>

         
         
            {logements.map((item) => (
               <Card key={item.id}cover={item.cover} title={item.title} id={item.id} />
            ))}
            
         
        
        </section>
       </main>
    );
  }
  
  export default Home;
  