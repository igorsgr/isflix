import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../assets/img/isflix.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="IsFlix Logo"/>
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;