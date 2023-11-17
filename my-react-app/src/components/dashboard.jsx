import React from 'react';
import './Dashboard.css';
import Dashinner from 
import Group1Image from './images/Group1.jpg';


function Dashboard(){
    return (
        <div className='leftportion'>
           
            <div className='start'> <img  className='equi' img src={Group1Image} alt="Group 1" /><h2 className='txt'> Equinex</h2></div>
          <h4 className='overview'>Overview</h4>   
          <button className='dashboard' ><h2 >Dashboard </h2></button>
       

          <button className='portfolio'> <h2>Portfolio </h2></button>
          <hr className='lftruler'>
          </hr>
          <button className='logout'> <h2>logout</h2></button>
        </div>
      );
    }
export  default Dashboard;