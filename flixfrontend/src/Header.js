import React from 'react';
import './Header.css'

import {Link} from 'react-router-dom'


function Header() {

    
    
    return (
        <div className='header'> 
          <Link to ="/">
            <img 
            className='header__logo' 
            src='https://i.pinimg.com/originals/da/09/10/da091005bafa21afc8935ec024a0701b.jpg'
            />
            </Link>
            
            
               

                
                
                
            </div>
        
    );
}

export default Header;
