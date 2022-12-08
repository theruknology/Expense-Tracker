import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import "./App.css";

const DUMMY_EXPENSES = [
  { id:1, title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 18) },
  { id:2, title: "2nd Car Insurance", amount: 24.67, date: new Date(2021, 2, 2) },
  { id:3, title: "Carmore Insurance", amount: 294.7, date: new Date(2021, 4, 1) },
  { id:4, title: "Carrier Insurance", amount: 2.6, date: new Date(2021, 3, 2) },
];

export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="app-container">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
