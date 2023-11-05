import React, { useState } from 'react';
import axios from 'axios';
import { Form, InputGroup } from 'react-bootstrap';

export default function CardMed() {
  const [input, setInput] = useState({ name: '', price: '', amount: '', img: '', discount:'' });

  const addHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post(`/api/addCard`, input);
    setInput({ name: '', price: '', amount: '', img: '' });
    if(res.status === 200) {
      window.location = '/';
    }
  };

  const changeHandler = async (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Form>
      <br />
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Название</InputGroup.Text>
        <Form.Control
          value={input.name}
          onChange={changeHandler}
          name="name"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Цена</InputGroup.Text>
        <Form.Control
          value={input.price}
          onChange={changeHandler}
          name="price"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Количество</InputGroup.Text>
        <Form.Control
          value={input.amount}
          onChange={changeHandler}
          name="amount"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <br />

      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">Изображение</InputGroup.Text>
        <Form.Control
          value={input.img}
          onChange={changeHandler}
          name="img"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <br />

      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Скидка</InputGroup.Text>
        <Form.Control
          value={input.discount}
          onChange={changeHandler}
          name="discount"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>

      <button type="submit" onClick={(e) => addHandler(e)}>
        Добавить
      </button>
    </Form>
  );
}
