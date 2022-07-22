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
        <div className="container-fluid">
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
          <div className="row">
            <div className="offset-1 col-10">
              <ExpenseList />
            </div>
          </div>
        </div>
        <AddExpense />
        <br></br>
        <div className="row">
          <div className="offset-1 col-7">
            <AddBudget />
          </div>
          <div className="col-3">
            <PieChart />
          </div>
        </div>

        <br></br>

        <br></br>
      </AppProvider>
    </BudgetProvider>
  );
}

export default Main;
