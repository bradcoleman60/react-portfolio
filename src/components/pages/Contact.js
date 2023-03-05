import React, {useState} from 'react';
// import '../style.css'
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
    <div>
      <form>
        <input
        value={name}
        name="name"
        onChange={handleInputChange}
        type="text"
        placeholder="name"
        />
        <input 
        value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="email"
        />
        
        <input
        value={message}
        name="message"
        onChange={handleInputChange}
        type="text"
        placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
          </div>
      )}

    </div>
  );
}

export default Form;
