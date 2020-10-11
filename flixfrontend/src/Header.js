import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search" ;
import {Link} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header() {
    

    return (
        <div className='header'> 
          <Link to ="/">
            <img 
            className='header__logo' 
            src='https://i.ibb.co/SVfxNXT/logo-removebg-preview.png'
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
