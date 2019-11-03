import React from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom'

const Header = ()=>{//react component(function)
    console.log('renderheader')


    
    return(
        <header className="header">
            <ul className="header__menu">
                <li><NavLink className="header__link" exact to="/">Home</NavLink></li>
                <li><NavLink className="header__link" to="/favorite">favorite </NavLink></li>
                <li><NavLink className="header__link" to="/posts">posts</NavLink></li>

                
                
              
            </ul>
        </header>
    )
}




export default Header;



