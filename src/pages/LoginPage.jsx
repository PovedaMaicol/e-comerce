import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import './styles/loginPage.css'
const LoginPage = () => {

  const createToken = useAuth();
  const { handleSubmit, register, reset } = useForm();

  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
    createToken(url, data);
    reset({
      email: '',
      password: '',
    })
  }


  return (
    <div className='login_container'>
   
      <form className='login_form' onSubmit={handleSubmit(submit)}>
      <h3>Login</h3>
      <br/>
        <div>
          <label htmlFor='user'>Email</label>
          <input {...register('email')} id='user' type='email' />
        </div>
        <br/>
        <div>
          <label htmlFor='key'>Password</label>
          <input {...register('password')} id='key' type='password' />
        </div>
        <br/>
        <button>Submit</button>
      </form>
      <br/>
      <p>If you are not registered then you can <span><Link to='/register'>Register here</Link></span></p>
    </div>
  )
}

export default LoginPage