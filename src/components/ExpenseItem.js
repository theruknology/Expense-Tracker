import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={ props.date }/>
      <div className="expense-item-des">
        <h2>{ props.title }</h2>
        <p className="expense-item-amount">{ props.amount }</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
