import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MedItem from './UI/MedItem';

export default function MainPage({ medicines }) {
  return (
    <main role="main">
      <ul className="entries-list no-bullets no-padding">
        <Row>
          {medicines?.map((med) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <MedItem key={med.id} med={med} />
            </Col>
          ))}
        </Row>
      </ul>
    </main>
  );
}
