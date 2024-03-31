import React from 'react';
import { logoURL } from "../../utils/constants";

const Header=()=>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={logoURL} alt='logo'/>
            </div>
            <ul className='nav-ul'>
                <li>Home</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
            <div className='cart'>
                Cart
            </div>
        </div>
    )
}

export default Header;