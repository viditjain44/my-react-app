import React from "react";
import './Dashinner.css';
function Dashinner(){
    return(
         
       <div className="rightportion">
        <h2 className="dashb">Dashboard</h2> 
        <hr />
       <button className="crypto"> <b>Crypto</b></button>
       <h2 className="sensex">Sensex : <h2 className="svalue">64587.3<h1 className="profit">+22.15</h1></h2></h2>
       <h2 className="nifty">Nifty : <h2 className="svalue2">64587.3<h1 className="profit">-22.15</h1></h2> </h2>
       <button className="bitcoin"></button>
       <button className="bitcoin"></button><button className="bitcoin"></button><button className="bitcoin"></button>

        <div>
        <button id="Stocks">Stocks</button>
        </div>
        <div id='list'>
            <button id="inlist1">Top gainer</button>
            <button id="inlist2">Top Loser</button>
        </div>

       </div>
    );

}
export default Dashinner;