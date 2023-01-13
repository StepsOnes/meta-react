import {useEffect} from "react";
import WOW from 'wowjs';
import Navbar from "../../loyouts/Navbar/Navbar";
import Header from "../Header/Header";
import WaveNft from "../WaweNft/WaveNft";
import Artist from "../Artist/Artist";
import Story from "../Story/Story";
import Guitar from "../Guitar/guitar";
import RoadMap from "../RoadMap/RoadMap";
import Partners from "../Partners/Partners";
import Team from "../Team/Team";
import Contacts from "../Contacts/Contacts";
import Footer from "../../loyouts/Footer/Footer";

function App() {
    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])

  return (
    <div className="wrapper">
        <Navbar />

        <Header />

        <main>
            <WaveNft />
            <Artist />
            <Story />
            <Guitar />
            <RoadMap />
            <Partners />
            <Team />
            <Contacts />
        </main>

        <Footer />
    </div>
  );
}

export default App;
