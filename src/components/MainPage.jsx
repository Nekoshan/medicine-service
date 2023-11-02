import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import MedItem from './UI/MedItem';

export default function MainPage({ medicines }) {
  const [input, setInput] = useState('');
  const [meds, setMeds] = useState(medicines);


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
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyUp={(e) => e.key === 'Enter' && searchData(input)}
          />
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
