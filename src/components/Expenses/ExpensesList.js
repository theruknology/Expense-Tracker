import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  if (props.items.length === 0) {
    return <p className="error-message">No Expenses Found</p>;
  }

  return (
    <ul className="expenses">
      {props.items.map((itms) => (
        <ExpenseItem
          key={itms.id}
          title={itms.title}
          amount={itms.amount}
          date={itms.date}
        />
      ))}
    </ul>
  );
}
