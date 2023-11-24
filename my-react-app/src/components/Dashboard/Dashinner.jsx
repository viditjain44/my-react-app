import React from "react";
import './Dashinner.css';
import bitcoinfirstImage from '../images/bitcoinfirst.jpg';
import bitcoinsecondImage from '../images/bitcoinsecond.jpg';
import bitcointhirdImage from '../images/bitcointhird.jpg';
import bitcointhirdinsideImage from '../images/bitcointhirdinside.jpg';
import bitcoinfourthImage from '../images/bitcoinfourth.jpg';
import infosysImage from '../images/infosys.png';
import itcImage from '../images/itc.png';
import SbiImage from '../images/Sbi.jpg';
import yesbankImage from '../images/yesbank.png';

let values={
    name:"Joe doe"
}

function Dashinner(){
    return(
         
       <div className="rightportion">
        <div className="dashb">
            <div className="dashimg">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M23.3375 2.5H20.9625C18.2375 2.5 16.8 3.9375 16.8 6.6625V9.0375C16.8 11.7625 18.2375 13.2 20.9625 13.2H23.3375C26.0625 13.2 27.5 11.7625 27.5 9.0375V6.6625C27.5 3.9375 26.0625 2.5 23.3375 2.5Z" fill="white"/>
  <path d="M9.05 16.7875H6.675C3.9375 16.7875 2.5 18.225 2.5 20.95V23.325C2.5 26.0625 3.9375 27.5 6.6625 27.5H9.0375C11.7625 27.5 13.2 26.0625 13.2 23.3375V20.9625C13.2125 18.225 11.775 16.7875 9.05 16.7875Z" fill="white"/>
  <path d="M7.8625 13.225C10.8241 13.225 13.225 10.8241 13.225 7.8625C13.225 4.90087 10.8241 2.5 7.8625 2.5C4.90087 2.5 2.5 4.90087 2.5 7.8625C2.5 10.8241 4.90087 13.225 7.8625 13.225Z" fill="white"/>
  <path d="M22.1375 27.5C25.0991 27.5 27.5 25.0991 27.5 22.1375C27.5 19.1759 25.0991 16.775 22.1375 16.775C19.1759 16.775 16.775 19.1759 16.775 22.1375C16.775 25.0991 19.1759 27.5 22.1375 27.5Z" fill="white"/>
</svg>
            </div>
            <div id="dashtxt">
            Dashboard
            </div>
            <div className="notificationimg">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="42" viewBox="0 0 35 42" fill="none">
  <path d="M17.4472 37.5725C12.8241 37.5725 8.20107 36.8541 3.81611 35.4172C2.14943 34.8541 0.879583 33.7085 0.324024 32.2133C-0.251378 30.7182 -0.0529635 29.0677 0.859742 27.592L3.1415 23.8833C3.6177 23.1066 4.05421 21.5532 4.05421 20.6406V15.0289C4.05421 7.80568 10.0662 1.92221 17.4472 1.92221C24.8282 1.92221 30.8401 7.80568 30.8401 15.0289V20.6406C30.8401 21.5338 31.2766 23.1066 31.7528 23.9027L34.0148 27.592C34.8679 28.99 35.0267 30.6794 34.4513 32.2133C33.8759 33.7473 32.6259 34.9123 31.0584 35.4172C26.6933 36.8541 22.0702 37.5725 17.4472 37.5725ZM17.4472 4.83482C11.713 4.83482 7.03042 9.3979 7.03042 15.0289V20.6406C7.03042 22.058 6.43518 24.1551 5.70105 25.3784L3.41928 29.0871C2.98277 29.8056 2.86372 30.5628 3.12166 31.2036C3.35976 31.8638 3.955 32.3687 4.7685 32.6405C13.0622 35.3589 21.852 35.3589 30.1457 32.6405C30.86 32.4075 31.4155 31.8832 31.6735 31.1842C31.9314 30.4852 31.8719 29.7279 31.475 29.0871L29.1933 25.3784C28.4393 24.1163 27.8639 22.0386 27.8639 20.6211V15.0289C27.8639 9.3979 23.2012 4.83482 17.4472 4.83482Z" fill="white"/>
  <path d="M21.1374 5.3592C20.9985 5.3592 20.8596 5.33978 20.7207 5.30094C20.1453 5.14561 19.5898 5.0291 19.054 4.95143C17.3675 4.73784 15.7405 4.85434 14.2127 5.30094C13.6572 5.4757 13.0619 5.30094 12.685 4.89318C12.308 4.48541 12.1889 3.90289 12.4072 3.37862C13.2207 1.3398 15.2048 0 17.4667 0C19.7287 0 21.7128 1.32038 22.5263 3.37862C22.7247 3.90289 22.6255 4.48541 22.2485 4.89318C21.9509 5.20386 21.5342 5.3592 21.1374 5.3592Z" fill="white"/>
  <path d="M17.447 41.9999C15.4827 41.9999 13.5779 41.2232 12.189 39.864C10.8001 38.5048 10.0065 36.6407 10.0065 34.7184H12.9827C12.9827 35.864 13.4589 36.9902 14.2922 37.8057C15.1256 38.6213 16.2764 39.0873 17.447 39.0873C19.9073 39.0873 21.9113 37.1261 21.9113 34.7184H24.8875C24.8875 38.7378 21.5542 41.9999 17.447 41.9999Z" fill="white"/>
  <path d="M13.0088 8.15529C13.0088 11.0963 10.6246 13.4805 7.68355 13.4805C4.74252 13.4805 2.35834 11.0963 2.35834 8.15529C2.35834 5.21426 4.74252 2.83008 7.68355 2.83008C10.6246 2.83008 13.0088 5.21426 13.0088 8.15529Z" fill="#F46D22" stroke="white"/>
</svg>
            </div>
            <div className="accountimg">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
  <path d="M50.4166 27.5C50.4166 14.8729 40.1271 4.58334 27.5 4.58334C14.8729 4.58334 4.58331 14.8729 4.58331 27.5C4.58331 34.1458 7.4479 40.1271 11.9854 44.3208C11.9854 44.3438 11.9854 44.3438 11.9625 44.3667C12.1916 44.5958 12.4666 44.7792 12.6958 44.9854C12.8333 45.1 12.9479 45.2146 13.0854 45.3063C13.4979 45.65 13.9562 45.9708 14.3916 46.2917C14.5521 46.4063 14.6896 46.4979 14.85 46.6125C15.2854 46.9104 15.7437 47.1854 16.225 47.4375C16.3854 47.5292 16.5687 47.6438 16.7291 47.7354C17.1875 47.9875 17.6687 48.2167 18.1729 48.4229C18.3562 48.5146 18.5396 48.6063 18.7229 48.675C19.2271 48.8813 19.7312 49.0646 20.2354 49.225C20.4187 49.2938 20.6021 49.3625 20.7854 49.4083C21.3354 49.5688 21.8854 49.7063 22.4354 49.8438C22.5958 49.8896 22.7562 49.9354 22.9396 49.9583C23.5812 50.0958 24.2229 50.1875 24.8875 50.2563C24.9791 50.2563 25.0708 50.2792 25.1625 50.3021C25.9416 50.3708 26.7208 50.4167 27.5 50.4167C28.2791 50.4167 29.0583 50.3708 29.8146 50.3021C29.9062 50.3021 29.9979 50.2792 30.0896 50.2563C30.7541 50.1875 31.3958 50.0958 32.0375 49.9583C32.1979 49.9354 32.3583 49.8667 32.5416 49.8438C33.0916 49.7063 33.6646 49.5917 34.1916 49.4083C34.375 49.3396 34.5583 49.2708 34.7416 49.225C35.2458 49.0417 35.7729 48.8813 36.2541 48.675C36.4375 48.6063 36.6208 48.5146 36.8041 48.4229C37.2854 48.2167 37.7666 47.9875 38.2479 47.7354C38.4312 47.6438 38.5916 47.5292 38.7521 47.4375C39.2104 47.1625 39.6687 46.9104 40.1271 46.6125C40.2875 46.5208 40.425 46.4063 40.5854 46.2917C41.0437 45.9708 41.4791 45.65 41.8916 45.3063C42.0291 45.1917 42.1437 45.0771 42.2812 44.9854C42.5333 44.7792 42.7854 44.5729 43.0146 44.3667C43.0146 44.3438 43.0146 44.3438 42.9916 44.3208C47.5521 40.1271 50.4166 34.1458 50.4166 27.5ZM38.8208 38.8896C32.6104 34.7188 22.4354 34.7188 16.1791 38.8896C15.1708 39.5542 14.3458 40.3333 13.6583 41.1813C10.175 37.6521 8.02081 32.8167 8.02081 27.5C8.02081 16.7521 16.7521 8.02084 27.5 8.02084C38.2479 8.02084 46.9791 16.7521 46.9791 27.5C46.9791 32.8167 44.825 37.6521 41.3416 41.1813C40.6771 40.3333 39.8291 39.5542 38.8208 38.8896Z" fill="white"/>
  <path d="M27.5 15.8813C22.7563 15.8813 18.9062 19.7313 18.9062 24.475C18.9062 29.1271 22.55 32.9083 27.3854 33.0458C27.4542 33.0458 27.5458 33.0458 27.5917 33.0458C27.6375 33.0458 27.7062 33.0458 27.7521 33.0458C27.775 33.0458 27.7979 33.0458 27.7979 33.0458C32.4271 32.8854 36.0708 29.1271 36.0938 24.475C36.0938 19.7313 32.2438 15.8813 27.5 15.8813Z" fill="white"/>
</svg>
            </div>
            <div id="name">
                {values.name}
            </div>
        </div> 
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