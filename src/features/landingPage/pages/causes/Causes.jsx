import "./causes.scss";
import { 
    causesData,
    appealItemContent,
    featureData,
    upcomingProgramData,
    fundRaisingEvents,
    videoEventsData
 } from "../../../../app/data";
import Appeal from "../../components/appeal/Appeal";
import Featured from "../../components/featured/Featured";
import UpcomingEvent from "../../components/upcomingEvent/UpcomingEvent";
import FundRaisingEvents from "../../components/fundRaisingEvents/FundRaisingEvents";
import VideoEvent from "../../components/videoEvent/VideoEvent";


const Causes = (props)=>{
    return (
        <div className="causes">
            <div 
              className="faceImage"
              style={{
                 backgroundImage: `url(${causesData.frontImage})`
              }}  
            >
                <h1> Causes</h1>

            </div>

          {
            /*
              <Featured featureData={featureData} />
                
            */
          }  
          <Appeal appealItemContent={appealItemContent} /> 

            {
                videoEventsData.map((data,index)=>{
                     return (
                        <VideoEvent videoEventData={data} />
                     )
                })
            }

            <FundRaisingEvents  fundRaisingEvents={fundRaisingEvents} />
            <UpcomingEvent upcomingProgramData={upcomingProgramData}  />
        </div>
    )
}

export default Causes;