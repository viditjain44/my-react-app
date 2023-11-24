import React from 'react'
import Group1Image from './images/Group1.jpg';
import './LeftPortion.css';
import { Link } from 'react-router-dom';
import dashboardimg from './images/dashboard.png'

function LeftPortion(props) {
  return (
    <>
              <div className='leftportion'>
           
           <div className='start'> <img  className='equi' img src={Group1Image} alt="Group 1" /><h2 className='txt'> Equinex</h2></div>
         <h4 className='overview'>Overview</h4>   
         <Link to="/">
         <button className='dashboard' style={{backgroundColor:props.dashcolor}}>
            <div style={{display:'flex'}}>
              <img src={dashboardimg}/>
            <div id='dashtxt'> Dashboard </div>
            </div>
            </button>
         </Link>
          <Link to ="/portfolio">
         <button className='portfolio' style={{backgroundColor:props.portcolor}}>
         <div style={{display:'flex'}}>
              <img src={dashboardimg}/>
            <div id='porttxt'> Portfolio </div>
            </div>
         </button>
         </Link>
         <hr className='lftruler'>
         </hr>
         <button className='logout'> 
         <div style={{display:'flex'}}>
              <img src={dashboardimg}/>
            <div id='logouttxt'> Log Out </div>
            </div>
         </button>
       </div>
    </>
  )
}

export default LeftPortion
