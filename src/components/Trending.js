import React from 'react'
import "../components/Trending.css"
import Tvt from "../assets/twitterpic.jpeg"
import Tvt1 from "../assets/Twxo.jpeg"
import Tvt2 from "../assets/tvt-3.jpeg"
import Tvt3 from "../assets/level.png"
import Tvt4 from "../assets/tvt5.png"
import Tvt5 from "../assets/tvt-6.png"
export default function Trending() {
    return (
        <div className="container">
            <div className="main-card">

     
            <div className="cards">

            <div className="numbers">
              <div className="number">
              <span>01</span>
              </div>
           <div className="card-4">
               <div className="card-pic">
               <img src={Tvt} alt=""/>
           <h4>Anna Maltby <span>in</span> Elemental</h4>
               </div>
            
           <h2>A Simple Workout That Makes a Huge Difference</h2>
           <div className="date-2">
      <p className="date-3">Mar 9</p>
      <div>.</div>
      <span className=" date-4">8 min read</span>
      </div>


           </div>
           </div>
           <div className="numbers">
              <div className="number">
              <span>04</span>
              </div>
           <div className="card-4">
               <div className="card-pic">
               <img src={Tvt2} alt=""/>
           <h4>mr.smashy</h4>
               </div>
            
           <h2>Thoughts on Muscle Mass</h2>
           <div className="date-2">
      <p className="date-3">Mar 9</p>
      <div>.</div>
      <span className=" date-4">8 min read</span>
      </div>


           </div>
           </div>
         
           
            </div>
         
            <div className="cards">

<div className="numbers">
  <div className="number">
  <span>02</span>
  </div>
<div className="card-4">
   <div className="card-pic">
   <img src={Tvt1} alt=""/>
<h4>Kneesovertoesguy</h4>
   </div>

<h2>A Simple Workout That Makes a Huge Difference</h2>
<div className="date-2">
<p className="date-3">Mar 9</p>
<div>.</div>
<span className=" date-4">8 min read</span>
</div>


</div>
</div>
<div className="numbers">
  <div className="number">
  <span>05</span>
  </div>
<div className="card-4">
   <div className="card-pic">
   <img src={Tvt3} alt=""/>
<h4>LEVEL Editors <span>in</span> Level</h4>
   </div>

<h2>Revisiting the Raspberry Pi Zero WiFi Hacking Gadget</h2>
<div className="date-2">
<p className="date-3">Mar 9</p>
<div>.</div>
<span className=" date-4">8 min read</span>
</div>


</div>
</div>


</div>


<div className="cards">

<div className="numbers">
  <div className="number">
  <span>03</span>
  </div>
<div className="card-4">
   <div className="card-pic">
   <img src={Tvt4} alt=""/>
<h4>Lee Williscroft-Ferris</h4>
   </div>

<h2>Dear Dad – A Defiant Letter From A Rejected Son</h2>
<div className="date-2">
<p className="date-3">Mar 9</p>
<div>.</div>
<span className=" date-4">8 min read</span>
</div>


</div>
</div>
<div className="numbers">
  <div className="number">
  <span>06</span>
  </div>
<div className="card-4">
   <div className="card-pic">
   <img src={Tvt5} alt=""/>
<h4>Charles Stover</h4>
   </div>

<h2>Replacing let with const</h2>
<div className="date-2">
<p className="date-3">Mar 9</p>
<div>.</div>
<span className=" date-4">8 min read</span>
</div>


</div>
</div>


</div>
            </div>
        </div>
    )
}
