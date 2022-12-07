import React from "react";
import Expenses from "./components/Expenses/Expenses";
import './App.css'

export default function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 18) },
    { title: "2nd Car Insurance", amount: 24.67, date: new Date(2021, 2, 2) },
    { title: "Carmore Insurance", amount: 294.7, date: new Date(2021, 4, 1) },
    { title: "Carrier Insurance", amount: 2.6, date: new Date(2021, 3, 2) },
  ];

  return (
    <Expenses items={ expenses } />
  );
}
