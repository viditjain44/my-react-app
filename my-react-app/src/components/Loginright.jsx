import React  from 'react';
import './Loginright.css';
//  import {dashboard.jsx} from "react-router";
 import  from 'react-router-dom'; 

     function Loginright(){
  return(
    <div className='rightpor'>
    <h4 className='likhna1'><p>Create a Account</p>
    </h4>
    <form>
        <label>
            <input className='name' type="text" placeholder='full name'  />
        </label>
        <label>
            <input className='mobilenumber' type="number" placeholder='Mobile Number'  />
        </label>
        <label>
            <input className='password' type="password" placeholder='password'  />
        </label>
        <label>
            <input className='confirmpassword' type="password" placeholder='confirm password'  />
        </label>
        <br />
        <button className='buton'><link to="/dashboard.jsx"/>    Register   <link/> </button>
    </form>

    </div>

  );
};
export default Loginright;
