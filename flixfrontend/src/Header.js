import React, {useState, useEffect} from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search" ;
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header() {
    const[show,handleShow]=useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(false);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`header ${show && "nav__black"}`}> 
          <Link to ="/">
            <img 
            className='header__logo' 
            src='https://i.ibb.co/rk2qtvW/coollogo-com-199382451.png'
            />
            </Link>
            
            


            <div
            className='header__search'>
                <input
                className="header__searchInput"
                type="text"/>
                <SearchIcon
                className="header__searchIcon"/>
            </div>
            
            <div className="header__user"> 
            <AccountCircleIcon className="header__userIcon"/>
            
            

            </div>
                
            

                
                
        </div>
        
    );
}

export default Header;
