import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { BudgetContext } from "../context/BudgetContext";

function Spent() {
  const { totalExpenses, setTotalExpenses } = useContext(BudgetContext);
  var temp = 0;


  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key != "###whfvhgsvfhsdvf83r3ijsdjfkshjfkhkshdfkjsfu23rh###") {
      var cost_temp = JSON.parse(window.localStorage.getItem(key));
      var tag_temp = cost_temp.tag;
      cost_temp = cost_temp.cost;

      temp += cost_temp;
      console.log("a")
    }
  }


  setTotalExpenses(temp);

  return (
    <div className="alert alert-danger">
      <span>Spent so far: £{totalExpenses}</span>
    </div>
  );
}

export default Spent;
