import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


export default function NavTab(props) {
    const location = useLocation();

    const paths = location.pathname.split("/");

    const basePath = paths[1];

    // Declare a new state variable, which we'll call "count"
    const [isMoreClicked, setIsMoreClicked] = useState(false);
    console.log(isMoreClicked);
    console.log(basePath)
    const isLocked = basePath.includes("login") || basePath.includes("register") || basePath === ""
    return (
        <>
         {!isLocked && <div>
           {isMoreClicked && <div className="w3-sidebar w3-bar-block w3-border-right" id="mySidebar" style={{top: "75%", width:"50%", right:"0"}}>
               <button onClick={() => setIsMoreClicked(!isMoreClicked)} className="w3-bar-item w3-large">Close &times;</button>
               <a href="#" className="w3-bar-item w3-button">Settings</a>
               <a href="/" className="w3-bar-item w3-button">Logout</a>
           </div>}

           <div className="w3-bottom w3-black w3-bar">
               <div className={`w3-bar-item w3-center ${basePath.includes("events") && !isMoreClicked ? "w3-text-blue" : ""}`} style={{width:"25%"}}>
                   <Link to={isMoreClicked ? "#" : "/events/create"}>
                       <i className={`fa fa-plus-circle`}></i><br /><span className="w3-tiny">Create</span>
                   </Link>
               </div>
               <div className={`w3-bar-item w3-center ${basePath === "dashboard" && !isMoreClicked ? "w3-text-blue" : ""}`} style={{width:"25%"}}>
                   <Link to={isMoreClicked ? "#" : "/dashboard"}>
                       <i className={`fa fa-home`}></i><br /><span className="w3-tiny">Dashboard</span>
                   </Link>
               </div>
               <div className={`w3-bar-item w3-center ${basePath === "profile" && !isMoreClicked ? "w3-text-blue" : ""}`} style={{width:"25%"}}>
                   <Link to={isMoreClicked ? "#" : "/profile"}>
                       <i className={`fa fa-user`}></i><br /><span className="w3-tiny">Profile</span>
                   </Link>
               </div>
               <div className={`w3-bar-item w3-center ${isMoreClicked === true ? "w3-text-blue" : ""}`} style={{width:"25%"}}>
                   <div onClick={() => setIsMoreClicked(!isMoreClicked)}>
                       <i className="fa fa-ellipsis-h"></i><br /><span className="w3-tiny">More</span>
                   </div>
               </div>
           </div>

         </div>}
        </>
    )
}
