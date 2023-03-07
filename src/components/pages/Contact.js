import React, {useState} from 'react';
// import '../style.css'

import "../styles/contactForm.css";
import { validateEmail } from '../utils/helpers';

 function Form() {

  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    //Get the name from the form
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type we set the state of name, email or message
    if (inputType === 'name'){
      setName(inputValue)
    } else if (inputType === 'email'){
      setEmail(inputValue)
    } else {
      setMessage(inputValue);
    }

  };
  

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)){
      setErrorMessage('Email is invalid');
      return;
    }
    alert(`Hello ${name}`)

    //Set these fields back to empty if all validations work
    setName('');
    setEmail('');
    setMessage('');

  };

  
  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <div className='row'>
      <form>
        <div className='col-12 col-md-10 mb-3 p-3 bg-dark'>
        Name:
        <input
        className='form-input'
        value={name}
        name="name"
        onChange={handleInputChange}
        type="text"
        placeholder="name"
        
        />
        </div>
        <div className='col-12 col-md-10 mb-3 p-3 bg-dark'>
        Email:
        <input 
        className='form-input'
        value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="email"
        />
</div>
    <div className='col-12 col-md-10 mb-3 p-3 bg-dark'>
        Message:
        <textarea
        className='form-textarea'
        value={message}
        name="message"
        onChange={handleInputChange}
        
        placeholder="message"
        rows={5}
        cols="50"
        />
        </div>
        <button type="button" class="btn btn-danger btn-lg" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
          </div>
      )}

    </div>
    </div>
  );
}

export default Form;
