import React from 'react';
import './Dashboard.css';
// import { Link } from 'react-router-dom';
//  import Dashinner from './Dashinner';
import Group1Image from './images/Group1.jpg';


function Dashboard(){
    return (
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
      );
    }
export  default Dashboard;