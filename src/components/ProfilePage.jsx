import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ProfilePage({ user }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newUser, setNewUser] = useState(user);

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `/api/profile/${user.id}`,
      Object.fromEntries(new FormData(e.target)),
    );
    console.log(response);
    setNewUser(response.data);
  };

  return (
    <div className="container">
      <ListGroup>
        <ListGroup.Item>{newUser.name}</ListGroup.Item>
        <ListGroup.Item>{newUser.email}</ListGroup.Item>
        <Button variant="primary" onClick={handleShow}>
          Редактировать
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Внесите изменения</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Имя</Form.Label>
                <Form.Control name="name" type="text" rows={3} placeholder="введите имя" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Почта</Form.Label>
                <Form.Control name="email" type="email" placeholder="name@example.com" autoFocus />
              </Form.Group>
              <Button type="submit" variant="primary" onClick={handleClose}>
                Сохранить изменения
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </ListGroup>
    </div>
  );
}
