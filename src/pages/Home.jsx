import photo from '../assets/Image_source_1.png'
import Banner from "../components/Banner";
function Home() {
    return (
       <main>
        <Banner img={photo} titre="Chez vous, partout et ailleurs"/>
       </main>
    );
  }
  
  export default Home;
  