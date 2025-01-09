import "./aboutus.scss";
import { 
    aboutUsData,
    appealItemContent,
    featureData,
    upcomingProgramData
 } from "../../../../app/data";
import Appeal from "../../components/appeal/Appeal";
import Featured from "../../components/featured/Featured";
import UpcomingEvent from "../../components/upcomingEvent/UpcomingEvent";


const AboutUs = (props)=>{
    return (
        <div className="aboutus">
            <div 
              className="faceImage"
              style={{
                 backgroundImage: `url(${aboutUsData.frontImage})`
              }}  
            >
                <h1> About Us</h1>

            </div>

            <div className="aboutContent">

                 <div className="briefOverview">
                    <img src={aboutUsData.frontImage} alt="" />
                    <div className="briefContent">
                        <h1>Summer Hills Foundation (SHF)</h1>
                        <p>{aboutUsData.brief}</p>
                    </div>
                 </div>

                 <div className="history">
                    <h1>History</h1>
                    <p>{aboutUsData.origin}</p>
                </div>
                
                <div className="visionAndMission">

                    <div className="vision">
                        <h1>Vision</h1>
                        <p>{aboutUsData.vision}</p>
                    </div>

                    <div className="misson">
                        <h1>Mission</h1>
                        <ul>
                            {
                                aboutUsData.missions.map((data,index)=>{
                                    return (
                                        <li key={index}>{data}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>


            </div>

            <UpcomingEvent upcomingProgramData={upcomingProgramData}  />

            <Appeal appealItemContent={appealItemContent} />
            <Featured featureData={featureData} />
        </div>
    )
}

export default AboutUs;