import React from 'react';
import './homeImageTop.css';
import { Link } from 'react-router-dom';

const HomeImageTop = () => {
    return ( 
        <div className="homeImageTopFirstDiv">    
         <div className="homeImageTopDiv">
            <div className="homeImageTopDivInner">
                <h2 className="homeImageTopH21">
                    Serving You 
                </h2>
                <h2 className="homeImageTopH2">since 1989</h2>
                <h4 className="homeImageTopH4">
                    Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.
                </h4>
                <button className="homeImageTopButton">
                    <Link to="/shop"
                     style={{textDecoration:"none",color:"whitesmoke"}}
                    >
                        Shop Merch                    
                    </Link>
                </button>
            </div>
            </div>
            </div>
     );
}
 
export default HomeImageTop;