import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const mapCurrencyToLabel = {
'$': 'Dollar',
'£': 'Pound',
'€': 'Euro',
'₹': 'Ruppee'
}

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value)
        d
    }
   
    return (
<select onChange={(e)=>{
  dispatch({
    type: 'CHG_CURRENCY',
    payload: e.target.value,
  });
}} class="btn btn-success form-select" aria-label="Default select example">
<option value="$">$ Dollar</option>
  <option value="£">£ Pound</option>
  <option value="€">€ Euro</option>
  <option value="₹">₹ Ruppee</option>
</select>

    );
};
export default Currency;