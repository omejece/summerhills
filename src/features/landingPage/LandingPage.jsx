import Footer from "./components/footer/Footer";
import MainContent from "./components/mainContent/MainContent";
import Navbar from "./components/navbar/Navbar";
import Subnavbar from "./components/subnavbar/Subnavbar";
import {
    aboutUsData
} from "../../app/data";

import "./landingPage.scss";


const LandingPage = ()=>{
    
     return (
        <div className="landingPage">
            <Navbar />
            <Subnavbar />
            <MainContent />
            <Footer aboutUsData={aboutUsData} />
        </div>
     )

}

export default LandingPage;