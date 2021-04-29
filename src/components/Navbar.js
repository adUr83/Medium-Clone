import React from 'react'
import Nav from "../assets/m-logo.png"

import "./Navbar.css"

export default function Navbar() {

    var d = new Date();
    var currentHour = d.getHours();
    var msg;
  if(currentHour < 12)
    msg = 'Good Morning';
    else if(currentHour == 12)
   
	msg = 'Good Noon';
    else if (currentHour >= 12 && currentHour <= 17)
        msg = 'Good Afternoon';
    else if (currentHour >= 17 && currentHour <= 24)
        msg = 'Good Evening';

   
    

    

    return (
        <div >
            <nav id="navbar">
                <div className="nav">
                <img height="50"  src={Nav} alt="logo" />
                 <h2>{msg}</h2>
                </div>
           
                    <ul>
                        <li>
                        <form action="">
               <input type="search" placeholder="Search Medium"/>
               <i class="fa fa-search"></i>
              </form>
                        </li>
                        
                        <li><i class="far fa-bookmark"></i></li>
                        <li><i class="far fa-bell"></i></li>
                        <li>
                        <a href="#contact">Upgrade</a></li>
                    </ul>
                </nav> 
        </div>
    )
}
