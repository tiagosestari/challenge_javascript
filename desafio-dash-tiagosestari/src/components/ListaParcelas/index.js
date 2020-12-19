import React from 'react';
import './ListaParcelas.css';


const ListaParcelas = (props) => {
    
    //Os dados financeiros serão recebidos como props
    const {installments} = props;

    //Mapeando o array de parcelas
    const listaDeParcelas = installments.map((installment) => {

        return (
            <div className="listItem">
              <div>{installment.formatedValue}              </div>
              <div>{installment.payd ? "Paga" : "Pendente"} </div>
              <div>{installment.dueDate}                    </div>
              <div><button onClick={() => {alert("Redirecionar para pagamento(idparcela)")}}>Pagar</button></div>
           </div> 
        )
    });

  return (
   <div className="containerListaDeParcelas">
    <div className="listHeader">
        <div>Valor </div>
        <div>Status </div> 
        <div>Venc. </div>
        <div>Pagar </div>
    </div>

    <div className="listContainer"> {listaDeParcelas} </div>
     
   </div>
  );
}

export default ListaParcelas;