import React from 'react';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profile">
                Личный кабинет
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Регистрация
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signin">
                Авторизация
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">
                Выход
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
