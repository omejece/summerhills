import { useEffect, useState } from "react";
import "./progressbar.scss";


const Progressbar = (props)=>{
    const [progressStyle,setProgressStyle] = useState({
        width: `${props.percentage}%`
    });

    const [backGround, setBackGround] = useState({
        backgroundColor: props.bgColor
    });

    useEffect(()=>{
        if(props.bgColor){
            setBackGround({
                backgroundColor: props.bgColor
            });
        }

        if(props.bgColor){
            setProgressStyle({
                width: `${props.percentage}%`,
                color: props.color
            })
        }
    },[props])

    return (
        <div className="progressbar" style={backGround}>
            <div 
               className="percentage"
               style={progressStyle}
            ></div>
        </div>
    );
}

export default Progressbar;


