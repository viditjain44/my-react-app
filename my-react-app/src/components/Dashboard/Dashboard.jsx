import React from 'react';
// import './Dashboard.css';

import LeftPortion from '../LeftPortion';
import Dashinner from './Dashinner';


function Dashboard(){
    return (
      <>
      <div style={{display:'flex'}} >

 <LeftPortion dashcolor="#0B7AFD" />
        <div>
<Dashinner/>
</div>
      </div>
</>
      );
    }
export  default Dashboard;