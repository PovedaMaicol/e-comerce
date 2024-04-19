import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/formPrice.css';
import SelectCategory from './SelectCategory';


const FormPrice = ({setFormValue}) => {
    const { handleSubmit, register, reset} = useForm();
    const submit = (data) => {
    //
    console.log(data);
    setFormValue({
        from: data.from || 0,
        to: data.to || Infinity,
    });

    }




  return (
    <div className='formContainer'>
        <form className='form_form' onSubmit={handleSubmit(submit)}>
            <div className='form_filter'>
                <label htmlFor='from'>From</label>
                <input {...register('from')} id='from' type='text' />
            </div>
            <div className='form_filter'>
                <label htmlFor='to'>To</label>
                <input {...register('to')} id='to' type='text' />
            </div>
            <div className='container-fp'>
            <button>Filter Price</button>
            <SelectCategory/>
            </div>

        </form>
    </div>
  )
}
export default FormPrice;