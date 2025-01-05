import "./subnavbar.scss";
import { menuData } from "../../../../app/data";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

const Subnavbar = (props)=>{
    const navigate = useNavigate();
    const [selectedIndex,setSelectedIndex] = useState(0);
    const [logoImage,setLogoImage] = useState("/assets/img/logo.JPG");

    const selectMenu = (index,path)=>{
        setSelectedIndex(index);
        //navigate(path);
    }
    
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
                              href="#" 
                              className={selectedIndex == index ? "menuItem active" : "menuItem"}
                              key={index}
                              onClick={()=>selectMenu(index,data.path)}
                            >{data.name}</a>
                        )
                    })
                }
                  
             </div>
        </div>
    );
}

export default Subnavbar;