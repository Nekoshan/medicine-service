import React, { useState } from 'react';
import axios from 'axios';
import { Form, InputGroup } from 'react-bootstrap';

export default function CardMed() {
  const [input, setInput] = useState({name:'', price:"", amount:""})



  const addHandler = async (e) => {
    e.preventDefault()
    const res = await axios.post(`/api/add`, input);
    setInput({name:'', price:"", amount:""})
  };

  const changeHandler = async (e)=>{
    setInput((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <Form>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">название</InputGroup.Text>
        <Form.Control value={input.name} onChange={changeHandler} name="name" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">цена</InputGroup.Text>
        <Form.Control
        value={input.price}
        onChange={changeHandler}
          name="price"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup size="lg">
        <InputGroup.Text id="inputGroup-sizing-lg">количество</InputGroup.Text>
        <Form.Control value={input.amount} onChange={changeHandler} name="amount" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <button type="submit" onClick={(e) => addHandler(e)}>
        Добавить
      </button>
    </Form>
  );
}
