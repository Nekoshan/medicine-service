import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MedItem from './UI/MedItem';

export default function showCart({ medicines }) {
  const [medicine, setShop] = useState(medicines || []);

  useEffect(() =>{
     axios(`/shop/${user_id}`).then((data) => setShop(data));
  }, []);

  const deleteHandler = async (id) => {
    const response = await axios.delete(`/shop/${med_id}`);
    if (response.ok) {
      setShop((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (
    <>

      
      <div className="row mt-3">
        {medicine?.map((el) => <MedItem key={el.id} card={el} deleteHandler={deleteHandler} />)}
      </div>

    </>
  );
}
