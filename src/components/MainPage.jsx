import React, { useState } from 'react';
import { Row, Col, FormControl, ButtonGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import MedItem from './UI/MedItem';
import '../../public/style.css';

export default function MainPage({ medicines }) {
  const [input, setInput] = useState('');
  const [meds, setMeds] = useState(medicines);
  const [arrow, setArrow] = useState(false);

  const clickHandler = () => {
    setArrow(!arrow);
  };

  const searchData = async (search) => {
    const response = await axios.get(`/api/views/search?input=${search}`);
    setMeds(response.data);
  };

  return (
    <main role="main">
      <ul className="entries-list no-bullets no-padding">
        <Col xs={4} className="rounded-pill border border-secondary-subtle mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Поиск"
            value={(e) => e.target.value}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && searchData(input)}
          />
        </Col>
        <Col>
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="secondary"
              onClick={clickHandler}
              value={arrow}
              name="disc"
              className={`button-hover ${arrow ? 'active' : ''}`}
            >
              Filter by discount
            </Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>
        </Col>
        <Row>
          {meds?.map((med) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <MedItem key={med.id} med={med} />
            </Col>
          ))}
        </Row>
      </ul>
    </main>
  );
}
