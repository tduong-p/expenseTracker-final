import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./expenseItem";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

function ExpenseList() {
  const { expenses } = useContext(AppContext);
  const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

  var Local_Expenses = [];

  for (let i = 0; i < localStorage.length; i++) {
    var Local_Expense = {};
    let key = localStorage.key(i);
    if ( key != "###whfvhgsvfhsdvf83r3ijsdjfkshjfkhkshdfkjsfu23rh###") {
      Local_Expense.id = uuidv4();
      Local_Expense.cost = (JSON.parse(window.localStorage.getItem(key))).cost;
      Local_Expense.name = key;
      Local_Expense.tag = (JSON.parse(window.localStorage.getItem(key))).tag;
      Local_Expenses.push(Local_Expense);
    }
  }

  return (
    <div>
      <br></br>
      <h4>Expenses</h4>
      <ul className="list-group">
        {Local_Expenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
            tag={expense.tag}
          />
        ))}

        {/* {filteredExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))} */}
      </ul>
    </div>
  );
}

export default ExpenseList;
