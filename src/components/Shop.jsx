import React, {useState, useEffect} from 'react';
import axios from 'axios';
import MedItem from './UI/MedItem';
import ShopItem from './UI/ShopItem';

export default function Shop({ medicines, user }) {
  const [medicine, setShop] = useState(medicines || []);

  console.log(user)
  console.log(typeof medicines)

  useEffect(() =>{
     axios.get(`/api/shop`).then(({data}) =>setShop(data)); ;
  }, []);

  const deleteHandler = async (id) => {
    const response = await axios.delete(`/api/shop/${id}`);
    if (response.status === 200) {
      setShop((prev) => prev.filter((el) => el.id !== id));
    }
  };

  return (

    <div className="container">
     <div className="row">
      <div className="col-4">
        <h2>Корзина</h2>
        </div>
      </div>
    

    <div className="row mt-3">
        {medicine?.map((med) => <ShopItem key={med.id} med={med} user={user} deleteHandler={deleteHandler} />)}
      </div>
    </div>  
  );
}
