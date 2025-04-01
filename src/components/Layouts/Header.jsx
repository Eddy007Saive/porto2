import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
const Header=()=>{
    return(
        <div className="header_section">
            <Navbar />
            <Banner />
        </div>
    )
}

export default Header;