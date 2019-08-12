import React from "react";

function MainNav() {
  return (
    
      <div id="cssmenu">
      <ul>
            <li className="active"><a href="/"><span>Pets</span></a></li>
            <li className="has-sub"><a href="/pets"><span>Pets</span></a>
                <ul>
                    <li><a href="/pets"><span>All Pets</span></a></li>
                    <li className="last"><a href="/pets/new"><span>Enter New</span></a></li>
                </ul>
            </li>
            <li className="last"><a href="#"><span>Contact</span></a></li>
        </ul>
        </div>
   
    
  	);
}

export default MainNav;