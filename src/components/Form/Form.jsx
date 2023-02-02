import React from 'react'
import './assets/form.css'

const Form = ({weatherMethod}) => {
  return (
    <form className='weather__form' onSubmit={weatherMethod}>
      <input type="text" name='city' placeholder='Город' className='weather__input' />
      <button type='submit' className='weather__button'>Получить погоду</button>
    </form>
  )
}

export default Form