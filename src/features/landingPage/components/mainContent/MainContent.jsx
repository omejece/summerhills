import "./mainContent.scss";
import {Outlet} from "react-router-dom";


const MainContent = (props)=>{
    return (
        <div className="mainContent">
             <Outlet />
        </div>
    );
}

export default MainContent;