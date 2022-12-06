import React from "react";
import ExpenseItem from "./components/ExpenseItem";

export default function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 18) },
    { title: "2nd Car Insurance", amount: 24.67, date: new Date(2021, 2, 2) },
    { title: "Carmore Insurance", amount: 294.7, date: new Date(2021, 4, 1) },
    { title: "Carrier Insurance", amount: 2.6, date: new Date(2021, 3, 2) },
  ];

  return (
    <>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
    </>
  );
}
