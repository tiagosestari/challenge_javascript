import React from 'react';
import logo from '../../imgs/provi_logo_branco.PNG';
import './Footer.css';

const Footer = () => {

    

  return (
   <footer>
       <img className="logoFooter" src={logo} alt="Logo da Provi" />

       <div className="atendimento">
           <div className="atendimentoTitle">Atendimento</div>
           <div><a href="https://api.whatsapp.com/send?phone=5511957712414&text=Oi%2C%20Provi%21%20Pode%20me%20ajudar%20?">Whatsapp</a></div>
           <div>papo@provi.com.br</div>
       </div>
       <div className="endereco">Avenida Doutor Cardoso de Melo, 1340 - conjunto 11 - Vila Olímpia, São Paulo - SP, 04548-004</div>
   </footer>
  );
}

export default Footer;