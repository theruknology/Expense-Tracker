import React from 'react'
import './ExpenseItem.css';

export default function ExpenseDate( props ) {
  const month = props.date.toLocaleString('en-US', {month:'long'});
  const day = props.date.toLocaleString('en-US', {day:'2-digit'});
  const year = props.date.getFullYear();

  return (
    <div className="expense-item-date">
      <p>{ month }</p>
      <p>{ day }</p>
      <p>{ year }</p>
    </div>

  )
}
