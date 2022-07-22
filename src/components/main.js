import React from "react";
import Budget from "./budget";
import AddBudget, { UserContext } from "./addBudget";
import Remaining from "./remaining";
import Spent from "./spent";
import ExpenseList from "./expenseList";
import Header from "./header";
import AddExpense from "./addExpense";
import { AppProvider } from "../context/AppContext";
import bootstrap from "bootstrap";
import PieChart from "./chart";

import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/AditionalCSS.css";
import { BudgetProvider } from "../context/BudgetContext";

function Main() {
  return (
    <BudgetProvider>
      <AppProvider>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col">
              <Budget budget={Budget} />
            </div>
            <div className="col">
              <Remaining />
            </div>
            <div className="col">
              <Spent />
            </div>
          </div>
          <ExpenseList />
        </div>
        <AddExpense />
        <br></br>
        <AddBudget />
        <br></br>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <PieChart />
            </div>
          </div>
        </div>

        <br></br>
        <div className="container">
          <div className="row"></div>
        </div>
      </AppProvider>
    </BudgetProvider>
  );
}

export default Main;
