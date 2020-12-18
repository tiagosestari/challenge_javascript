import React, {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';

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

    
  return (
   <div>
       
    
   
   </div>
  );
}

export default Dash;