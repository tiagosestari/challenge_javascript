import React from 'react';


const ListaParcelas = (props) => {

    const {installments} = props;

    const listaDeParcelas = installments.map((installment) => {

        return (
            <p>
                {installment.formatedValue} {installment.payd ? "Paga" : "Pendente"} {installment.dueDate} 
           </p> 
        )
    });

  return (
   <div>
    <p>Valor Status Vencimento</p>
     {listaDeParcelas}
     
   </div>
  );
}

export default ListaParcelas;