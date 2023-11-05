import axios from 'axios';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';

export default function MedItem({ med, user, deleteHandler }) {
  console.log(med);

  const addHandler = async (e) => {
    e.preventDefault();
    const body = { med_id: med.id, user_id: user.id };
    console.log(body);
    const response = await axios.post(`/api/shop`, body);
    if (response.status === 200) {
      alert('DONE');
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={med.img} />
      <Card.Body>
        <Card.Title>{med.name}</Card.Title>
        <Card.Text>{med.price}</Card.Text>
        <Card.Text>{med.amount}</Card.Text>
      </Card.Body>
      {console.log('user ------', user)}
      {console.log('meds ------', med)}
      {user && (
        <button onClick={addHandler} type="button" className="btn btn-warning col-5">
          Добавить
        </button>
      )}
      {user?.admin && (
        <button
          onClick={() => deleteHandler(med?.id)}
          type="button"
          className="btn btn-warning col-4"
        >
          Удалить
        </button>
      )}
    </Card>
  );
}
