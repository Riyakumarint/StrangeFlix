import React from 'react';
import './Header.css'
import SearchIcon from "@material-ui/icons/Search" ;
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom'
import {useStateValue} from "./StateProvider"
import { auth } from "./firebase";
function Header() {

    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'> 
          <Link to ="/">
            <img 
            className='header__logo' 
            src='https://i.pinimg.com/originals/da/09/10/da091005bafa21afc8935ec024a0701b.jpg'
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

            <div className="header__nav">
                <Link to ={!user &&  '/login'}>
                <div onClick={handleAuthentication}
                className="header__option">
                    <span 
                    className="header__optionlineOne">
                        Hello {!user ? 'Guest':user.email}
                    </span>
                    
                    <span 
                    className="header__optionlineTwo">
                        {user ? 'Sign Out' : 'Sign In' }
                    </span>   
                </div>
                </Link>

                <Link to = '/orders'>
                <div className="header__option">
                <span className="header__optionlineOne">
                        Returns
                </span>
                
                <span className="header__optionlineTwo">
                        & Orders
                </span>
                </div>
                </Link>

                <div className="header__option">
                <span className="header__optionlineOne">
                        Your
                </span>
                <span className="header__optionlineTwo">
                        Prime
                </span>
                </div>

                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon className='header__ShoppingBasketIcon'/>
                    <span className="header__optionlineTwo header__basketCount">
                        {basket?.length}
                    </span>
                </div>
                </Link>

            </div>
        </div>
    );
}

export default Header;
