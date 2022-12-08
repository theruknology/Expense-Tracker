import React, { useState } from 'react'
import './ExpenseFilter.css'

export default function ExpenseFilter(props) {

  const yearSelectHandler = event => {
    props.onFilter(event.target.value);
  }
  
  return (
    <form className='filter-container'>
      <h3>Filter by year</h3>
      <select name='year' onChange={ yearSelectHandler } value={props.selected}>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
      </select>
    </form>
  )
}
