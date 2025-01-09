import "./programs.scss";
import { programsData } from "../../../../app/data";

const Programs = (props)=>{

    return (
        <div className="programs">
            
            <div 
              className="faceImage"
              style={{
                 backgroundImage: `url(${programsData.frontImage})`
              }}  
            >
                <h1>Program</h1>

            </div>


        </div>
    )
}


export default Programs;