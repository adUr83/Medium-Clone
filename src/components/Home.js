import React from 'react'
import "./Home.css"
import Med from "../assets/med.jpeg"
import Med1 from "../assets/med-1.jpeg"
import Med2 from "../assets/med-2.jpeg"
import Med3 from "../assets/med-3.jpeg"
import Med4 from "../assets/med-4.jpeg"
import Log from "../assets/logo.svg"
import Tvt from "../assets/twt-1.jpeg"
import Tvt1 from "../assets/twt-2.png"

export default function Home() {

   

    return (
        <div>
   
   <div class="flex-container">
   <div className="flex-1">
   
  <div className="card-1">
      <img src={Med} alt=""/>
      <h4>Denisa Black <span>in</span> Mac O`clock</h4>
      <h2>6 Free MacOS Apps I never Close</h2>
      <p className=""><a href="https://towardsdatascience.com/10-useful-jupyter-notebook-extensions-for-a-data-scientist-bd4cb472c25e?source=grid_home---------0---------------------3097d230_b502_4e2a_a153_5b9b92feaa6a-------12" className="" rel="noopener">These Jupyter Notebook Extensions make Data Scientist life easier.</a></p>
      <div className="date-2">
      <p className="date-4">Mar 9</p>
      <div>.</div>
      <span className=" date-4">8 min read</span>
      </div>
  </div>
<div className="border-right">
  <div className="flex-right" >
      <div>
      <h4>Denisa Black <span>in</span> Mac O`clock</h4>
      <h2>This Is What My Friends Who Have More Freedom than Me Do with Their Money</h2>
      <div className="date-2">
      <p className="date-3">Mar 9</p>
      <div>.</div>
      <span className=" date-4">8 min read</span>
      </div>
      </div>
  
  <img src={Med1} alt=""/>
  </div>
  <div className="flex-right-2" >
      <div>
      <h4>Denisa Black <span>in</span> Mac O`clock</h4>
      <h2>This Is What My Friends Who Have More Freedom than Me Do with Their Money</h2>
      <div className="date-2">
      <p className="date-3">Mar 9</p>
      <div>.</div>
      <span className=" date-4">8 min read</span>
      </div>
    
      </div>
  
  <img src={Med2} alt=""/>
  </div>
  <div className="flex-right-3" >
      <div>
      <h4>Denisa Black <span>in</span> Mac O`clock</h4>
      <h2>This Is What My Friends Who Have More Freedom than Me Do with Their Money</h2>
      <div className="date-2">
      <p className="date-3">Mar 9</p>
      <div>.</div>
      <span className=" date-5">8 min read</span>
      </div>
    
      </div>
  
  <img src={Med3} alt=""/>
  </div>
  <div className="flex-right-4" >
      <div>
      <h4>Denisa Black <span>in</span> Mac O`clock</h4>
      <h2>This Is What My Friends Who Have More Freedom than Me Do with Their Money</h2>
      <div className="date-2">
      <p className="date-3">Mar 9</p>
      <div>.</div>
      <span className=" date-6">8 min read</span>
      </div>
    
      </div>
  
  <img src={Med4} alt=""/>
  </div>
  </div>
  </div>

<div className="flex-2">
<div className="twiter">
<i class="fab fa-twitter"></i>
<img src={Log} alt=""/>
<p>Discover Medium writers you already follow on Twitter.</p>
<button> <i class="fab fa-twitter"></i>Connect to Twitter</button>
<span> <a href="">Maybe later</a> </span>


    </div> 
    <div className="follow">
        <h2>creators to follow </h2>
    </div>
    <div className="card-2">
    <img src={Tvt} alt=""/>
        <div className="card-1-body">
        <h5 className="card-1-title">Darius Foroux</h5>
        <p>Lorem ipsum dolor .</p>
     
        </div>
    <button>Follow</button>
    </div>
    <div className="card-2">
    <img src={Tvt1} alt=""/>
        <div className="card-1-body">
        <h5 className="card-1-title">M.G. Seigler</h5>
        <p>Lorem ipsum dolor sit</p>
     
        </div>
    <button>Follow</button>
    </div>
    <div className="follow-1">
        <h2>creators to follow </h2>
        <div className="card-container">
        <div className="card-3">

<div className="card-1-body">
<h5 className="card-1-title">Coronavirus</h5>


</div>
<button>Follow</button>
</div>
<div className="card-3">

<div className="card-1-body">
<h5 className="card-1-title">Software Engineering</h5>


</div>
<button>Follow</button>

</div>
        </div>
      
    </div>
</div>
</div>
  
        </div>
    )
}
