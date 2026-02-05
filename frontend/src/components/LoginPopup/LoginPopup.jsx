import { assets } from '../../assets/assets';
import './LoginPopup.css';
import React from 'react'

const LoginPopup = ({setShowLogin}) => {
    const[currState,setCurrState]=React.useState("Sign Up")
  return (
    <div className="login-popup">
        <div className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                 {currState==="Login"?<></>:<input placeholder="Enter Your Name"  type="text" /> }
                <input  placeholder="Enter Your Email" type="email" />
                <input  placeholder="Enter Your Password" type="password" />
            </div>
            <button >{currState==="Sign Up"?"Create Account":"Login"}</button>
            
            {
                currState==="Login"? <p>New User .. Create Acoount? <span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>:
                <>
                <div className="login-popup-condition">
                <input type="checkbox" />
                <p>By Clicking Here Your are Agreeing to All Terms and Conditions</p>
            </div>
                <p>Already have an Account? <span onClick={()=>setCurrState("Login")}>Login</span></p>
                </>
                
            }
            
            
        </div>
    </div>
  )
}

export default LoginPopup;