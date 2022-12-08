import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [ title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  }

  return (
    <div className="expense-item">
      <ExpenseDate date={ props.date }/>
      <div className="expense-item-des">
        <h2>{ title }</h2>
        <p className="expense-item-amount">${ props.amount }</p>
        <button className="expense-item-title-change" onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
};

export default ExpenseItem;