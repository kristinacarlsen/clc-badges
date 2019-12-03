import React, { Component } from 'react';
import '../assets/App.css';
import CLCLogo from '../images/CLCLogo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar">
                    <div className='logo'>
                    <img src={CLCLogo} alt='clc badges logo' /> 
                    </div>    

                    <ul className='nav-links'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/shop'>Shop</Link>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                        
                    </ul>
                </nav>
            
            </header>
        )
    }
}

export default Header;