import axios from 'axios';
import React from 'react';

export default function SignIn() {
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      axios.post('/api/auth/signin', Object.fromEntries(new FormData(e.target))).then(() => {
        window.location.href = '/profile';
      });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h2>Login</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
