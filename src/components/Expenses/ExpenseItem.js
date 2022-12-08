import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <li className="expense-item">
      <ExpenseDate date={ props.date }/>
      <div className="expense-item-des">
        <h2>{ props.title }</h2>
        <p className="expense-item-amount">${ props.amount }</p>
      </div>
    </li>
  );
};

export default ExpenseItem;