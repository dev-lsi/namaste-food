import React from 'react';
import { logoURL } from "../../utils/constants";
import { Link } from 'react-router-dom';

const Header=()=>{
const loginButtonName="Login";

function changeName(){

    console.log("changeName called!");
    const btn=document.querySelector('.login-button');
    btn.innerHTML="Logout";
    
}

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logoURL} alt='logo'/>
            </div>
            <ul className='nav-ul'>
                <li><Link link to={'/'}>Home</Link></li>
                <li><Link link to={'/about'}>About</Link></li>
                <li><Link link to={'/contacts'}>Contacts</Link></li>
            </ul>
            <div className='cart'>
                Cart
            </div>
            <button onClick={changeName} className="login-button" >{loginButtonName}</button>
        </div>
    )
}

export default Header;