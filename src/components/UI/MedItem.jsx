import React from 'react';
import Card from 'react-bootstrap/Card';


export default function MedItem({ med, deleteHandler }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={med.img} />
      <Card.Body>
        <Card.Title>{med.name}</Card.Title>
        <Card.Text>{med.price}</Card.Text>
        <Card.Text>{med.amount}</Card.Text>
      </Card.Body>
    </Card>
  );
}
