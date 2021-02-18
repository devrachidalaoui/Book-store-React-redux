import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { connect } from 'react-redux'
import clearInputs from '../utils'

const Form = props => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    numberOfPages: '',
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Sending formData to the store after making sure that all fields are filled then you should clear all the input fields after sending data
  const { title, author, price, numberOfPages } = formData
  const handleSubmit = e => {
    e.preventDefault()
    if (title.trim() && author.trim() && price && numberOfPages) {
      props.onAddBook({ id: uuidv4(), ...formData })
      clearInputs()
      setFormData({
        title: '',
        author: '',
        price: '',
        numberOfPages: '',
      })
    } else {
      alert('Please fill in all fields.')
    }
  }

  return (
    <form className='add_book_form' onSubmit={e => handleSubmit(e)}>
      <div className='form-group'>
        <input
          className='form-field'
          type='text'
          placeholder='Title'
          name='title'
          onChange={e => handleChange(e)}
        />
      </div>
      <div className='form-group'>
        <input
          className='form-field'
          type='text'
          placeholder='Author'
          name='author'
          onChange={e => handleChange(e)}
        />
      </div>
      <div className='form-group'>
        <input
          className='form-field'
          type='number'
          step='0.01'
          placeholder='Price'
          name='price'
          onChange={e => handleChange(e)}
        />
      </div>
      <div className='form-group'>
        <input
          className='form-field'
          type='number'
          placeholder='Number of pages'
          name='numberOfPages'
          onChange={e => handleChange(e)}
        />
      </div>
      <div className='form-group submit'>
        <input type='submit' value='Save' className='save_btn' />
      </div>
    </form>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onAddBook: book =>
      dispatch({
        type: 'ADD_BOOK',
        payload: book,
      }),
    onRemoveBook: id => dispatch({ type: 'REMOVE_BOOK', payload: id }),
  }
}

export default connect(null, mapDispatchToProps)(Form)
