import React from 'react';
import Logo from '../../assets/img/isflix.png';
import './Menu.css';
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="IsFlix Logo" height="" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;