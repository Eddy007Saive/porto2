import React, { Fragment } from "react";
const Footer=()=>{
    return(
        <div className="footer_section">
        <div className="container">
           <div className="location_text">
              <ul>
                 <li>
                    <a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i></a>
                 </li>
                 <li>
                    <a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a>
                 </li>
                 <li>
                    <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                 </li>
              </ul>
           </div>
        </div>
     </div>
    )
}

export default Footer;