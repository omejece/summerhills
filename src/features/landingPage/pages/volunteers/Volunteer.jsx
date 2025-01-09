import "./volunteer.scss";
import { volunteerData } from "../../../../app/data";

const Volunteer = (props)=>{

    return (
        <div className="volunteer">
            
            <div 
              className="faceImage"
              style={{
                 backgroundImage: `url(${volunteerData.frontImage})`
              }}  
            >
                <h1> Volunteer </h1>

            </div>


        </div>
    )
}


export default Volunteer;