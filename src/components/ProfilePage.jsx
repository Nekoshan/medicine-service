import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ProfilePage({ user }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='container' >
    <ListGroup>
      <ListGroup.Item>Имя</ListGroup.Item>
      <ListGroup.Item>Email</ListGroup.Item>
      <Button variant="primary" onClick={handleShow}>
        Редактировать
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Внесите изменения</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Имя</Form.Label>
              <Form.Control type="text" rows={3} placeholder="введите имя"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Почта</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Сохранить изменения
          </Button>
        </Modal.Footer>
      </Modal>
    </ListGroup>
    </div>
  );
}
