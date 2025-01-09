import ImageSlider from "../../components/imageSlider/ImageSlider";
import {
    appealItemContent, 
    featureData,
    fundRaisingEvents, 
    latestDonationData,
    upcomingProgramData,
    latestNewsData,
    videoEventsData
} from "../../../../app/data";
import "./home.scss";
import Progressbar from "../../components/progressBar/Progressbar";
import { useRef } from "react";
import UpcomingEvent from "../../components/upcomingEvent/UpcomingEvent";
import LatestDonations from "../../components/latestDonations/LatestDonations";
import Appeal from "../../components/appeal/Appeal";
import Featured from "../../components/featured/Featured";
import FundRaisingEvents from "../../components/fundRaisingEvents/FundRaisingEvents";
import LatestNews from "../../components/latestNews/LatestNews";
import VideoEvent from "../../components/videoEvent/VideoEvent";


const Home = ()=>{


    
    return (
        <div className="home">
             <ImageSlider />
             <Appeal appealItemContent={appealItemContent} />
             <VideoEvent videoEventData={videoEventsData[0]}  />
             <Featured featureData={featureData} />
             <FundRaisingEvents  fundRaisingEvents={fundRaisingEvents} />
             <LatestDonations latestDonationData={latestDonationData} />
             <UpcomingEvent upcomingProgramData={upcomingProgramData}  />
             <LatestNews latestNewsData={latestNewsData} />

        </div>
    );
}

export default Home;