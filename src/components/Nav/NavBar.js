import React from 'react';
import styles from 'styled-components';
import Burger from './Burger';
import logo from '../images/06-LOGO.png';

const Nav = styles.nav`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-around;
    background-color: #B6CEB6;
    position: fixed;

    .logo {
        padding: 1%;
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Burger />
        </Nav>
    )
}

export default NavBar;
