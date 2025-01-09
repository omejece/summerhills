import "./subnavbar.scss";
import { menuData } from "../../../../app/data";
import { useEffect, useState } from "react";
import {useNavigate, useLocation} from "react-router-dom";

const Subnavbar = (props)=>{
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedIndex,setSelectedIndex] = useState(0);
    const [logoImage,setLogoImage] = useState("/assets/img/logo.JPG");

  

    useEffect(()=>{
    },[location]);
    
    return (
        <div className="subnavbar">
             <div className="logo">
                <img src={logoImage} alt="" />
             </div>
             <div className="menu">
                {
                    menuData.map((data,index)=>{
                        return(
                            <a 
                              href={data.path} 
                              className={location?.pathname == data.path ? "menuItem active" : "menuItem"}
                              key={index}
                            >{data.name}</a>
                        )
                    })
                }
                  
             </div>
        </div>
    );
}

export default Subnavbar;