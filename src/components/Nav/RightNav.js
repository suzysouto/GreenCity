import React from 'react';
import styles from 'styled-components';

const UL = styles.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 20px;
        color: #37595F;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 100%;
    }

    a {
        text-decoration: none;
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
        margin-top: 10%;
        margin-left: 25%;

        &:hover {
            background: rgb(33, 105, 65);
            color: #fff;
        }
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #0D2538;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 150px;
        padding-top: 2.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: #fff;
            font-size: 20px;
        }
    }
`;

const RightNav = ({ open }) => {
    return (
        <UL open={open}>
            <a href="https:www.google.com.br" target="_blank" rel="noreferrer"><li>O Restaurante</li></a>
            <a href="https:www.google.com.br" target="_blank" rel="noreferrer"><li>Cardápio</li></a>
            <a href="https:www.google.com.br" target="_blank" rel="noreferrer"><li className="contato">Contato</li></a>
        </UL>
    )
}

export default RightNav;
