import React from 'react';


const ResumoPrincipal = (props) => {

    const {amountTaken, amountPaid} = props;

  return (
   <div>

     <p>O valor total emprestado é: R$ {amountTaken ? amountTaken : 0} </p>
     <p>O valor total já pago é: R$ {amountPaid ? amountPaid : 0} </p>
     <p>Valor restante: R$ {amountTaken ? amountTaken - amountPaid : "indisponível"}</p>
     
   </div>
  );
}

export default ResumoPrincipal;