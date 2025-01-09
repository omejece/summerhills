import "./medicalMission.scss";
import { medicalMissionData } from "../../../../app/data";

const MedicalMission = (props)=>{

    return (
        <div className="medicalMission">
            
            <div 
              className="faceImage"
              style={{
                 backgroundImage: `url(${medicalMissionData.frontImage})`
              }}  
            >
                <h1> Medical Outreach</h1>

            </div>

            <div className="medicalMissionContent">

                <div className="briefOverview">
                    <img src={medicalMissionData.frontImage} alt="" />
                    <div className="briefContent">
                        <h1>OUR MEDICAL MISSION</h1>
                        <p>{medicalMissionData.brief}</p>
                    </div>
                 </div>

            </div>


        </div>
    )
}


export default MedicalMission;