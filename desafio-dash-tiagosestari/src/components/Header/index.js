import React from 'react';
import logo from '../../imgs/provi_logo.png';
import './Header.css';

const Header = () => {

    

  return (
   <header>
       <img src={logo} alt="Logo da Provi" />
       <div>Dashboard de Acompnhamento Financeiro</div>
   </header>
  );
}

export default Header;