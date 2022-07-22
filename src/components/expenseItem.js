import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { BudgetContext } from "../context/BudgetContext";
import bootstrap from 'bootstrap';

function ExpenseItem(props) {
  const { dispatch } = useContext(AppContext);

  const { rentQuant, setRentQuant } = useContext(BudgetContext);
  const { foodQuant, setFoodQuant } = useContext(BudgetContext);
  const { gamingQuant, setGamingQuant } = useContext(BudgetContext);
  const { hobbyQuant, setHobbyQuant } = useContext(BudgetContext);

  const handleDeleteExpense = () => {
    window.localStorage.removeItem(props.name);
    var temp = props.cost;



    
    if (props.tag === "rent") {
      setRentQuant(parseInt(rentQuant) - parseInt(temp));
    } else if (props.tag === "food") {
      setFoodQuant(parseInt(foodQuant) - parseInt(temp));
    } else if (props.tag === "gaming") {
      setGamingQuant(parseInt(gamingQuant) - parseInt(temp));
    } else if (props.tag === "hobby") {
      setHobbyQuant(parseInt(hobbyQuant) - parseInt(temp));
    } else {};

    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          £{props.cost}
        </span>
        <span class="badge rounded-pill text-bg-secondary">{props.tag}</span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
}

export default ExpenseItem;
