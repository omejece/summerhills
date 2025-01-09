import "./ourteam.scss";
import { ourTeamData } from "../../../../app/data";

const OurTeam = (props)=>{

    return (
        <div className="ourteam">
            
            <div 
              className="faceImage"
              style={{
                 backgroundImage: `url(${ourTeamData.frontImage})`
              }}  
            >
                <h1>Our Team</h1>

            </div>

            <div className="ourTeamContent">
                <h1>Our Team</h1>
                <div className="ourTeamBody">
                    {
                        ourTeamData.teams.map((data,index)=>{
                            return (
                                <div className="teamItem">
                                    <div className="imageContainer">
                                        <img src={data.image} alt="" />
                                    </div>
                                    <div className="profileBody">
                                        <span>{data.name}</span>
                                        <span>{data.profile}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>

        </div>
    )
}


export default OurTeam;