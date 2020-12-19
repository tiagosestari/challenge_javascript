import React from 'react';
import './ResumoPrincipal.css';

const ResumoPrincipal = (props) => {

    //Os dados financeiros serão recebidos como props
    const {amountTaken, amountPaid} = props;

  return (
   <div className="containerResumoPrincipal">

     <div className="resumoItem">O valor total emprestado é: R$ {amountTaken ? amountTaken : 0} </div>
     <div className="resumoItem">O valor total já pago é: R$ {amountPaid ? amountPaid : 0} </div>
     <div className="resumoItem">Valor restante: R$ {amountTaken ? amountTaken - amountPaid : "indisponível"}</div>

   </div>
  );
}

export default ResumoPrincipal;