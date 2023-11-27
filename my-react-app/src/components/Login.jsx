import React, { useState } from 'react';
import'./Login.css'
import Group1Image from './images/Group1.jpg';
import badImage from './images/bad.png';

import Loginright from './Loginright';
// import user_icon from '../assets/person.png'
// import email_icon from '../assets/email.png'
// import password_icon from '../assets/password.png'
// const Loginsignup = () => {
//     const[action,setAction] = useState("Sign Up");



//   return (
//     <div classname='container'>
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>
//       <div className="inputs">
//         {action==="Login"?<div></div>: <div className="input">
//             <img src={user_icon} alt="" />
//             <input type="text" placeholder='Names'/>
//         </div>}
       
//         <div className="input">
//             <img src={email_icon} alt="" />
//             <input type="email" placeholder='Mobile Number'/>
//         </div>
//         <div className="input">
//             <img src={password_icon} alt="" />
//             <input type="password" placeholder='Password'/>
//         </div>
//         <div className="input">
//             <img src={password_icon} alt="" />
//             <input type="password" placeholder='Confirm Password'/>
//         </div>
//       </div>
//       {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password?<span>Click Here!</span></div>}
      
//       <div className="submit-container">
//         <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//         <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
//       </div>
//     </div>
//   )
// }
function Login(){
  return(
    <div style={{display:'flex'}} >
  <div className='ltportion'> 
  
  <h2 className='mytxt'>< img className="himage" src={Group1Image} alt="error" />  Equinex</h2>

  <img  className="badiimage" src={badImage} alt="error" />
   <Loginright/>
</div>
   </div>

  )
}
export default Login;
