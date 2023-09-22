import React, { useState } from "react";
import "./Registration.css";

const Registration = (props) => {
  const [formData, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
  });

  const InputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...formData, [name]: value });
  };

  const Submit = (event) => {
    event.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    window.location.href = '/profile';
  };

  return (
    <div className="container">
      <h1>Регистрация пользователя</h1>
      <div className="input_container">
        <form onSubmit={Submit}>
          <input
            type="text"
            name="firstName"
            placeholder="Имя"
            value={formData.firstName}
            onChange={InputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            value={formData.lastName}
            onChange={InputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Почта"
            value={formData.email}
            onChange={InputChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Город"
            value={formData.city}
            onChange={InputChange}
            required
          />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
