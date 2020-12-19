import React, {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';

//Importando outros componentes
import ResumoPrincipal from '../ResumoPrincipal';
import ListaParcelas from '../ListaParcelas';


const Dash = () => {
    const baseurl = 'http://www.mocky.io/v2/5c923b0932000029056bce39'
    const [findata, setFindata] = useState({});

    const getFindata = () => {
        axios.get(`${baseurl}`)
        .then(response => setFindata(response.data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getFindata();
        
    }, [])

    console.log(findata)

    
  return (
   <div>

    <ResumoPrincipal amountTaken={findata.amountTaken} amountPaid={findata.amountPayd} />
    {findata.installments ? <ListaParcelas installments={findata.installments} /> : <div></div>}

    
   
   </div>
  );
}

export default Dash;