import React, { useState } from 'react';
import { logoURL } from "../../utils/constants";
import { Link } from 'react-router-dom';
import ConnectionLamp from './ConnectionLamp';

const Header=()=>{

const [loginButtonText,setLoginButtonText]=useState("Login");

function changeLoginButtonText(){
    loginButtonText ==="Login" 
        ? setLoginButtonText("Logout")
        :setLoginButtonText("Login")
}

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logoURL} alt='logo'/>
            </div>
            <ConnectionLamp/>
            <ul className='nav-ul'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/contacts'}>Contacts</Link></li>
            </ul>
            <div className='cart'>
                Cart
            </div>
            <button onClick={changeLoginButtonText} className="login-button" >{loginButtonText}</button>
        </div>
    )
}

export default Header;