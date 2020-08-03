import React from 'react';
import Logo from '../../assets/img/isflix.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <img className="Logo" src={Logo} alt="IsFlix Logo" />
      <p>
        Todos os direitos reservados!
      </p>
    </FooterBase>
  );
}

export default Footer;
