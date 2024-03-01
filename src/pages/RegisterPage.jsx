import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth';

const RegisterPage = () => {

  // se usa el useForm para leer el formulario

  const createUser = useAuth();
  const {handleSubmit, register, reset} = useForm();

  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users';
    createUser(url, data);
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: ''
    });
  }
  console.log(createUser)


  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor='name'>Name</label>
          <input {...register('firstName')} id='name' type='text'/>
        </div>
        <div>
          <label htmlFor='last'>Last name</label>
          <input {...register('lastName')} id='last' type='text'/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input {...register('email')} id='email' type='email'/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input {...register('password')} id='password' type='password'/>
        </div>
        <div>
          <label htmlFor='phone'>Phone</label>
          <input {...register('phone')} id='phone' type='number'/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage