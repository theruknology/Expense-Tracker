import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterRequestHandler = (selection) => {
    setFilteredYear(selection);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  return (
    <div className="expenses">
      <div className="filter-options">
        <ExpenseFilter
          selected={filteredYear}
          onFilter={filterRequestHandler}
        />
      </div>
      <ExpensesList items={filteredExpenses} />
    </div>
  );
}