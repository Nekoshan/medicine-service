import axios from 'axios';
import React, { useState } from 'react';

export default function Test() {
  const [inputs, setInputs] = useState({
    test1: '',
    test2: '',
    test3: '',
  });
  const changeHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    console.log(e.target.name, e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // const data = Object.fromEntries(new FormData(e.target));
    axios('url', inputs);
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="test1" onChange={changeHandler} />
      <input type="text" name="test2" onChange={changeHandler} />
      <input type="text" name="test3" onChange={changeHandler} />
      <button type="submit">send</button>
    </form>
  );
}
