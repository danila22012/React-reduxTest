import React from 'react';
import './style.scss';

const Header = ()=>{//react component(function)
    console.log('renderheader')


    
    return(
        <header className="header">
            <ul className="header__menu">
                <li><a className="header__link" href="/">Home</a></li>
                <li><a className="header__link" href="/favorite">favorite </a></li>
                <li><a className="header__link" href="/posts">posts</a></li>
                
              
            </ul>
        </header>
    )
}




export default Header;



