import React, { useState } from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import MedItem from './UI/MedItem';


export default function MainPage({ medicines }) {
  const [input, setInput] = useState('');
  const [meds, setMeds] = useState(medicines);
  const [arrow, setArrow] = useState(false);


  // const [arrow, setArrow] = useState(false);
  // const [arrow, setArrow] = useState(false);


  const clickHandler = () => {
    setArrow(!arrow);
  };
  // const clickHandler = () => {
  //   setArrow(!arrow);
  // };
  // const clickHandler = () => {
  //   setArrow(!arrow);
  // };



  const searchData = async (search) => {
    const response = await axios.get(`/api/views/search?input=${search}`);
    setMeds(response.data);
  };

  return (
    <main role="main">
      <Row>
        <Col xs={4} className="rounded-pill border border-secondary-subtle mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Поиск"
            value={input}
            onChange={(e) => {
              console.log(e)
              setInput(e.target.value)}}
            onKeyUp={(e) => e.key === 'Enter' && searchData(input)}
          />
        </Col>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary" onClick={clickHandler} value={arrow} name="disc">
            Filter by discount
          </Button>
          <Button variant="secondary">Filter by ammount</Button>
          <Button variant="primary">Sort by price</Button>
        </ButtonGroup>
      </Row>
      <Row>
        {meds?.map((med) => (
          <Col key={med.id} xs={12} sm={6} md={4} lg={3}>
            <MedItem med={med}/>
          </Col>
        ))}
      </Row>
    </main>
  );
}
