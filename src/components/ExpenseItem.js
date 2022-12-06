import "./ExpenseItem.css";
import React from "react";

const ExpenseItem = (props) => {

  return (
    <div className="expense-item">
      <h3 className="expense-item-date">{props.date.toISOString()}</h3>
      <div className="expense-item-des">
        <h2>{ props.title }</h2>
        <p>{ props.amount }</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
