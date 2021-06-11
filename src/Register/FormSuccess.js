import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <img className='form-img' src='./logo192.png' alt='success' />
    </div>
  );
};

export default FormSuccess;