import "./gallery.scss";
import { 
    galleryData,
    appealItemContent,
    featureData,
    upcomingProgramData,
    fundRaisingEvents
 } from "../../../../app/data";
import Appeal from "../../components/appeal/Appeal";
import Featured from "../../components/featured/Featured";
import UpcomingEvent from "../../components/upcomingEvent/UpcomingEvent";
import FundRaisingEvents from "../../components/fundRaisingEvents/FundRaisingEvents";


const Gallery = (props)=>{
    return (
        <div className="gallery">
            <div 
              className="faceImage"
              style={{
                 backgroundImage: `url(${galleryData.frontImage})`
              }}  
            >
                <h1> Gallery</h1>

            </div>
            
            <div className="galleryContent">
                {
                    galleryData.content.map((data,index)=>{
                         return (
                            <div className="galleryItem">
                                 <img src={data.image}  alt=""/>
                                 <div className="galleryItemBody"></div>
                            </div>
                         )
                    })
                }
            </div>

        </div>
    )
}

export default Gallery;