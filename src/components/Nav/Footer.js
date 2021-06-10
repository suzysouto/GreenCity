import React from 'react';
import styles from 'styled-components';
import logo from '../images/06-LOGO.png';

const Nav = styles.nav`
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-around;
    background-color: #B6CEB6;
    margin-bottom: 0;

    .logo {
        padding: 1%;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        & > a {            
            text-decoration: none;
            padding-top: 10%;
            padding: 20px;
            color: #37595F;
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 100%;           
        }
    }

    .rest_bottom {
        margin-left: 30%;
        width: 150px;
    }

    .card_bottom {
        margin-left: 40%;
    }

    .contato {
        background: #37595F;
        border-radius: 5px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 100%;
        display: flex;
        align-self: self-end;
        color: #FFFFFF;
        border-style: none;
        padding: 8px 20px;
        width: 110px;
        height: 35px;
        margin-left: 40%;
        margin-top: -5%;

        &:hover {
            background: rgb(33, 105, 65);
            color: #fff;
        }
    }
`;

const Footer = () => {
    return (
        <Nav>
            <div className="logo">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <ul>                    
                <a href="https:www.google.com.br" target="_blank" rel="noreferrer"><li className="rest_bottom">O Restaurante</li></a>
                <a href="https:www.google.com.br" target="_blank" rel="noreferrer"><li className="card_bottom">Cardápio</li></a>
                <a href="https:www.google.com.br" target="_blank" rel="noreferrer"><li className="contato">Contato</li></a>
            </ul>
        </Nav>
    )
}

export default Footer;