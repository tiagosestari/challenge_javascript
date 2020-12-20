import React, {useEffect} from 'react';
import './ListaParcelas.css';
import {useState} from 'react';

const ListaParcelas = (props) => {
    //Os dados financeiros serão recebidos como props
    const {installments} = props;

    const [filtroPagas, setFiltroPagas] = useState('Todas');
    const [filteredInstallments, setFilteredInstallments] = useState(installments)

    //Filtrando a lista toda vez que o estado filtro lista for alterado
    useEffect(() => {
      if(filtroPagas === 'Pagas') {
        let novaLista = installments.filter((installment) => {return (installment.payd)})     
        setFilteredInstallments(novaLista)   
      } else if(filtroPagas === 'Em aberto') {
        let novaLista = installments.filter((installment) => {return (!installment.payd)})     
        setFilteredInstallments(novaLista)
      } else {
        let novaLista = installments.filter((installment) => {return (true)})     
        setFilteredInstallments(novaLista)
      }
    },[filtroPagas])
    

    //Mapeando o array de parcelas
    const listaDeParcelas = filteredInstallments.map((installment) => {

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

    <div>
      <select value={filtroPagas} onChange={(event) => {setFiltroPagas(event.target.value); console.log(filtroPagas)}}>
        <option>Pagas</option>
        <option>Em aberto</option>
        <option>Todas</option>
      </select>
    </div>

    <div className="listContainer"> {listaDeParcelas} </div>
     
   </div>
  );
}

export default ListaParcelas;