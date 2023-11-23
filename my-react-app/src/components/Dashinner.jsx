import React from "react";
import './Dashinner.css';
import bitcoinfirstImage from './images/bitcoinfirst.jpg';
import bitcoinsecondImage from './images/bitcoinsecond.jpg';
import bitcointhirdImage from './images/bitcointhird.jpg';
import bitcointhirdinsideImage from './images/bitcointhirdinside.jpg';
import bitcoinfourthImage from './images/bitcoinfourth.jpg';
import infosysImage from './images/infosys.png';
import itcImage from './images/itc.png';
import SbiImage from './images/Sbi.jpg';
import yesbankImage from './images/yesbank.png';
function Dashinner(){
    return(
         
       <div className="rightportion">
        <h2 className="dashb">Dashboard</h2> 
        <hr />
       <button className="crypto"> <b>Crypto</b></button>
       <h2 className="sensex">Sensex : <h2 className="svalue">64587.3<h1 className="profit">+22.15</h1></h2></h2>
       <h2 className="nifty">Nifty : <h2 className="svalue2">64587.3<h1 className="profit">-22.15</h1></h2> </h2>
        <div className="button"><button className="bitcoin"><img  className='bit1' img src={bitcoinfirstImage} alt="Group 1" /><h3 className="txt1">Bitcoin</h3> <h5 className="txt2">BTC</h5> <h2 className="txt3">$52,291</h2> <h5 className="txt4">+0.25%</h5></button>
       <button className="bitcoin2"><img  className='bit2' img src={bitcoinsecondImage} alt="Group 1" /><h3 className="txt1">Litecoin</h3> <h5 className="txt2">ITC</h5> <h2 className="txt3">$8,291</h2> <h5 className="txt4">+0.25%</h5></button>
       <button className="bitcoin3"><img  className='bit2' img src={bitcointhirdImage} alt="Group 1" /><img  className='helo' img src={bitcointhirdinsideImage} alt="Group 1" /><h3 className="txt1">Etherium</h3> <h5 className="txt2">ITC</h5> <h2 className="txt3">$8,291</h2> <h5 className="txt4">+0.25%</h5></button>
       <button className="bitcoin4"><img  className='bit2' img src={bitcoinfourthImage} alt="Group 1" /><h3 className="txt1">SOLANA</h3> <h5 className="txt2">ITC</h5> <h2 className="txt3">$8,291</h2> <h5 className="txt4">+0.25%</h5></button>
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
        </div><div className="lastportion">
        <button className="bitcoin5"><img  className='bit3' img src={SbiImage} alt="Group 1" /><h3 className="txt5">State Bank Of India</h3> <h5 className="txt2">SBI</h5> <h2 className="txt3">$8,291</h2> <h5 className="txt4"><pre>+1.25%
           <br /> (+31.20)</pre></h5></button>
        <button className="bitcoin6"><img  className='bit4' img src={infosysImage} alt="Group 1" /><h3 className="txt6">Infoys</h3> <h5 className="txt7">INFY</h5> <h2 className="txt10">1446.41</h2> <h5 className="txt8">+36.62 <br />(2.46%)</h5></button>
        <button className="bitcoin7"><img  className='bit2' img src={itcImage} alt="Group 1" /><h3 className="txt9">Indian  Tobacco <br />Company</h3> <h5 className="txt11">ITC</h5> <h2 className="txt12">$8,291</h2> <h5 className="txta">-0.31 <br />(-1.03)</h5></button>
        <button className="bitcoin5"><img  className='bit5' img src={yesbankImage} alt="Group 1" /><h3 className="txt13">Yes Bank</h3> <h5 className="txt14">YESB</h5> <h2 className="txt3">20.25</h2> <h5 className="txta">-2.1 <br />(2.11)</h5></button>
        </div>
<div id="box"></div>
       </div>
    );

}
export default Dashinner;