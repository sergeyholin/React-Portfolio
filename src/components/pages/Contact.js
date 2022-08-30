import React, { useState } from 'react';
import '../../assets/styles/Contact.css';

import { checkText, checkName, validateEmail } from '../../utils/helpers';

function Form() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setText(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Invalid email!');
      return;
    }
    if (!checkText(text)) {
      alert(`Invalid message!`);
      return;
    }
    if (!checkName(userName)) {
      alert(`Invalid name!`);
      return;
    }

    setUserName('');
    setText('');
    setEmail('');
    alert("Message sent!")
  };

  return (
    <div className='main2'>
      <form className="form">
      <div className="container">
      <div className="name">
      <input value={userName} name="userName" onChange={handleInputChange} type="text" placeholder="Name"/>
      </div>
      <div className="email">
      <input value={email} name="email" onChange={handleInputChange} type="email" placeholder="email"/>
      </div>
      <div className="text">
      <textarea value={text} name="text" onChange={handleInputChange} type="text" placeholder="Message"/>
      </div>
      <div className="button">
      <button type="button" onClick={handleFormSubmit}>Submit</button>
      </div>
      </div>
      </form>
    </div>
  );
}

export default Form;
