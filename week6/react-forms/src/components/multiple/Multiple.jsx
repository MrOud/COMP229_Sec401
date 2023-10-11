import { useState } from "react";
import { useForm } from 'react-hook-form'
import "./multiple.css";

export default function Multiple() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    check1: false,
    check2: false
  });

  const handleChange = (event) => {
    console.log(event)
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCheck = (event) => {
    console.log(prevFormData)
    const {name, checked } = event.target
    setFormData((prevFormData) => ({...prevFormData, [name]: !checked}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}, Check1: ${formData.check1}, Check2: ${formData.check2}`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      <label className="multiple__text" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className="multiple__input"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

    <input
        type="checkbox"
        id="check1"
        className="multiple__input"
        name="check1"
        checked={formData.check1}
        onChange={handleChange}
      />
      <label className="multiple__input" htmlFor="check1">
        Check1
      </label>

      <input
        type="checkbox"
        id="check2"
        className="multiple__input"
        name="check2"
        checked={formData.check2}
        onChange={handleCheck}
      />
      <label className="multiple__input" htmlFor="check2">
        Check2
      </label>

      <label className="multiple__text" htmlFor="email">
        Email:
      </label>
      <input
        type="email"
        id="email"
        className="multiple__input"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label className="multiple__text" htmlFor="message">
        Message:
      </label>
      <textarea
        id="message"
        className="multiple__textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <button className="multiple__button" type="submit">
        Submit
      </button>
    </form>
  );
}
