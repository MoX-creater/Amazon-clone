import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { user, logout } = useAuth();
    const { cart } = useCart();
    const navigate = useNavigate();

    const handleAuthClick = () => {
        if (user) {
            logout();
        } else {
            navigate('/login');
        }
    };

    return (
        <header className="header">
            <Link to="/">
                <div className="header__logo">
                    <span className="amazon-logo">amazon</span>
                    <span className="amazon-domain">.in</span>
                </div>
            </Link>

            <div className="header__option header__option--location">
                <span className="header__optionLineOne">Hello</span>
                <span className="header__optionLineTwo">
                    <MapPin size={14} style={{ marginRight: '2px' }} />
                    Select address
                </span>
            </div>

            <div className="header__search">
                <select className="header__searchSelect">
                    <option>All</option>
                </select>
                <input className="header__searchInput" type="text" placeholder="Search Amazon.in" />
                <div className="header__searchIcon">
                    <Search size={22} />
                </div>
            </div>

            <div className="header__nav">
                <div className="header__option" onClick={handleAuthClick}>
                    <span className="header__optionLineOne">Hello, {user ? user.name : 'Sign in'}</span>
                    <span className="header__optionLineTwo">Account & Lists</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <Link to="/cart">
                    <div className="header__optionBasket">
                        <ShoppingCart size={28} />
                        <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;
