import "./donate.scss";
import { 
    donateData,
    donationAndPartnershipData 
} from "../../../../app/data";
import VideoEvent from "../../components/videoEvent/VideoEvent";

const Donate = (props)=>{

    return (
        <div className="donate">
            
            <div 
              className="faceImage"
              style={{
                 backgroundImage: `url(${donateData.frontImage})`
              }}  
            >
                <h1> Donate </h1>

            </div>

            <div className="donationnContent">

                    <div className="briefOverview">
                        <div className="videoContainer">
                            <video 
                                autoplay 
                                controls>
                                    <source src={donateData.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="briefContent">
                            <h1>DONATIONS AND PARTNERSHIPS</h1>
                            <p>{donateData.brief}</p>
                        </div>
                    </div>

            </div>


        </div>
    )
}


export default Donate;