import { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { ProductsContext } from '../../Context/ProductsContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef(null);
    const handleClickWindow = (event) => {
        if(dropDownRef.current && !dropDownRef.current.contains(event.target)){
            setIsOpen(false);
        }
    };
    const handleLinkClick = () => {
        setIsOpen(false);
    };
    useEffect(() => {
        document.addEventListener("click", handleClickWindow);
        return() => {
            document.removeEventListener("click", handleClickWindow);
        };
    }, []);

    const {getTotalCartItems} = useContext(ProductsContext);

    return(
        <div className="navbar">
            <div className="container">
                <div className="navbar__box">
                    <div className="navbar__logo">
                        <NavLink to="/">
                            <img src="/logo.png" alt="Logo" width='400' height='203'/>
                        </NavLink>
                    </div>
                    <ul className="navbar__links">
                        <li><NavLink className={({isActive}) => isActive ? "active" : null} to="/">Home</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "active" : null} to="/about">About Us</NavLink></li>
                        <li><NavLink className={({isActive}) => isActive ? "active" : null} to="/products">Products</NavLink></li>
                        <li ref={dropDownRef}>
                            <button type='button' onClick={() => setIsOpen(!isOpen)}>
                                Categories<i className="fa-solid fa-caret-down"></i>
                            </button>
                            {isOpen && (
                                <ul className='navbar__nested-links'>
                                    <li><NavLink className={({isActive}) => isActive ? "active" : null} to="/men" onClick={handleLinkClick}>Men</NavLink></li>
                                    <li><NavLink className={({isActive}) => isActive ? "active" : null} to="/women" onClick={handleLinkClick}>Women</NavLink></li>
                                    <li><NavLink className={({isActive}) => isActive ? "active" : null} to="/boys" onClick={handleLinkClick}>Boys</NavLink></li>
                                    <li><NavLink className={({isActive}) => isActive ? "active" : null} to="/girls" onClick={handleLinkClick}>Girls</NavLink></li>
                                </ul>
                            )}
                        </li>
                        <li><NavLink className={({isActive}) => isActive ? "active" : null} to="/contact">Contact Us</NavLink></li>
                    </ul>
                    <div className="navbar__actions">
                        {/* <NavLink className={({isActive}) => isActive ? "navbar__wishlist active" : "navbar__wishlist"} to='/wishlist' ><span className="navbar__quantity">0</span><i className="fa-regular fa-heart"></i></NavLink> */}
                        <NavLink className={({isActive}) => isActive ? "navbar__cart active" : "navbar__cart"}  to='/cart' ><span className="navbar__quantity">{getTotalCartItems()}</span><i className="fa-solid fa-cart-shopping"></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};
