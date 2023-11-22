import React from 'react';
import './Dashboard.css';
// import { Link } from 'react-router-dom'; 
import Group1Image from './images/Group1.jpg';
import Dashinner from './Dashinner'
function Dashboard(){
    return (
      <>
      <div style={{display:'flex'}} >

        <div className='leftportion'>
           
            <div className='start'> <img  className='equi' img src={Group1Image} alt="Group 1" /><h2 className='txt'> Equinex</h2></div>
          <h4 className='overview'>Overview</h4>   
          {/* <Link to="/dashinner"> */}
          <button className='dashboard' ><h2 >Dashboard </h2></button>
          {/* </Link> */}

          <button className='portfolio'> <h2>Portfolio </h2></button>
          <hr className='lftruler'>
          </hr>
          <button className='logout'> <h2>logout</h2></button>
        </div>
        <div>
<Dashinner/>
</div>
      </div>
</>
      );
    }
export  default Dashboard;