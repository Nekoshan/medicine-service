import React from 'react'
import Card from 'react-bootstrap/Card';

export default function ShopItem({med, user, deleteHandler,}) {
    console.log('------------------------------->', med)
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={med?.Medicine?.img} />
    <Card.Body>
      <Card.Title>{med?.Medicine?.name}</Card.Title>
      <Card.Text>{med?.Medicine?.price}</Card.Text>
      <Card.Text>{med?.Medicine?.amount}</Card.Text>
    </Card.Body>
    {console.log('user ------', user)}
    {console.log('meds ------', med)}

          <button
            onClick={() => deleteHandler(med?.id)}
            type="button"
            className="btn btn-warning col-4"
          >
            Удалить
          </button>
        
    </Card>
  )
}
