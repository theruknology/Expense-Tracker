import React, { useState } from 'react'
import './NewExpense.css'

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense-inputs'>
        <div className='new-expense-control'>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={ titleChangeHandler }/>
        </div>
        <div className='new-expense-control'>
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={ amountChangeHandler} />
        </div>
        <div className='new-expense-control'>
          <label>Date</label>
          <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense-actions'>
        <button type='submit'>Add Expense</button>
        <button onClick={props.cancelHandler}>Cancel</button>
      </div>
    </form>
  )
}
