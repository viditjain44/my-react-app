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
        <div className="button"><button className="bitcoin"></button>
       <button className="bitcoin"></button><button className="bitcoin"></button><button className="bitcoin"></button>
       </div>

        <div>
        <button id="Stocks">Stocks</button>
        </div>
        <div id='list'>
            <button id="inlist1">Top gainer</button>
            <button id="inlist2">Top Loser</button>
            <div className="listheading">
                <div className="listhead" id="company">Company</div>
                <div className="listhead" id="latest">Latest</div>
                <div className="listhead" id="gain1">Gain(in $)</div>
                <div className="listhead" id="gain2">Gain%</div>
                <div className="listhead" id="Volume">Volume</div>

            </div>
            <div className="listitem">
                <button className="listbtn">
                <div className="companydata">TCS</div>
                <div className="latestdata">42.20</div>
                <div className="gain1data">1.37</div>
                <div className="gain2data">3.44</div>
                <div className="Volumedata">22,585.32</div>
                </button>
            </div>
            <div className="listitem">
                <button className="listbtn">
                <div className="companydata">NTPC</div>
                <div className="latestdata">3.01</div>
                <div className="gain1data">0.037</div>
                <div className="gain2data">1.23</div>
                <div className="Volumedata">157,678.17</div>
                </button>
            </div>
            <div className="listitem">
                <button className="listbtn">
                <div id="mahindra" className="companydata">Tech Mahindra</div>
                <div className="latestdata">14.42</div>
                <div className="gain1data">0.32</div>
                <div className="gain2data">2.24</div>
                <div className="Volumedata">9335.92</div>
                </button>
            </div>
            <div className="listitem">
                <button className="listbtn">
                <div id='tata' className="companydata">Tata Moters</div>
                <div className="latestdata">8.20</div>
                <div className="gain1data">0.13</div>
                <div className="gain2data">1.58</div>
                <div className="Volumedata">12847.87</div>
                </button>
            </div>
            <button id="bonds">Bonds</button>
        </div>
<div id="box"></div>
       </div>
    );

}
export default Dashinner;