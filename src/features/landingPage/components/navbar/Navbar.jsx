import "./navbar.scss";
import {siteContact} from "../../../../app/data.js";


const Navbar = (props)=>{
    return (
        <div className="navbar">
             <div className="contact">
                  <span>
                     MAIL: {siteContact.email}
                  </span>

                  <span>
                     PHONE: {siteContact.phone}
                  </span>
             </div>
             <div className="actions">
                  <a href="/">Donate Now</a>
             </div>
        </div>
    );
}

export default Navbar;