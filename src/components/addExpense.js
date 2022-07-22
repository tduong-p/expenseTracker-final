import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { BudgetContext } from "../context/BudgetContext";
import { v4 as uuidv4 } from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/AddExpense.css";

function AddExpense(props) {
  const {totalExpenses, setTotalExpenses} = useContext(BudgetContext);
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [tag, setTag] = useState("");

  const { rentQuant, setRentQuant } = useContext(BudgetContext);
  const { foodQuant, setFoodQuant } = useContext(BudgetContext);
  const { gamingQuant, setGamingQuant } = useContext(BudgetContext);
  const { hobbyQuant, setHobbyQuant } = useContext(BudgetContext);

  useEffect(() => {
    
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key != "###whfvhgsvfhsdvf83r3ijsdjfkshjfkhkshdfkjsfu23rh###") {
        var cost_temp = JSON.parse(window.localStorage.getItem(key));
        var tag_temp = cost_temp.tag;
        cost_temp = cost_temp.cost;
  
        if (tag_temp === "rent") {
          setRentQuant(parseInt(rentQuant) + parseInt(cost_temp));
        } else if (tag_temp === "food") {
          setFoodQuant(parseInt(foodQuant) + parseInt(cost_temp));
        } else if (tag_temp === "gaming") {
          setGamingQuant(parseInt(gamingQuant) + parseInt(cost_temp));
        } else if (tag_temp === "hobby") {
          setHobbyQuant(parseInt(hobbyQuant) + parseInt(cost_temp));
        } else {};
  
      }
    }

  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });

    const data = {
      id: uuidv4(),
      cost: parseInt(cost),
      tag: tag,
    };




    window.localStorage.setItem(name, JSON.stringify(data));
    var temp = JSON.parse(window.localStorage.getItem(name));
    console.log(temp.tag);
    setTotalExpenses(totalExpenses + cost);

    var tag_temp = tag;
    var cost_temp = cost;

    var temp_rent;
    var temp_food;
    var temp_gaming;
    var temp_hobby;

    if (tag_temp === "rent") {
      setRentQuant(parseInt(rentQuant) + parseInt(cost_temp));
    } else if (tag_temp === "food") {
      setFoodQuant(parseInt(foodQuant) + parseInt(cost_temp));
    } else if (tag_temp === "gaming") {
      setGamingQuant(parseInt(gamingQuant) + parseInt(cost_temp));
    } else if (tag_temp === "hobby") {
      setHobbyQuant(parseInt(hobbyQuant) + parseInt(cost_temp));
    } else {};


    setName('');
    setCost('');
    setTag('');
  };

  return (
    <div className="container">
      <br></br>
      <h4>Add Expense</h4>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col">
            <label for="name">Name</label>
            <input
              required="required"
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
          </div>
          <div className="col">
            <label for="cost">Cost</label>
            <input
              required="required"
              type="number"
              className="form-control"
              id="cost"
              min="0"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            ></input>
          </div>
          <div className="col-1">
            <label for="tag">Tag</label>
            <br></br>
            <select 
            id="Tag"
            required="required"
            value={tag}
            onChange={(event) => setTag(event.target.value)}>
              <option value="none">None</option>
              <option value="rent">Rent</option>
              <option value="food">Food</option>
              <option value="gaming">Gaming</option>
              <option value="hobby">Hobby</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <br></br>
            <button className="btn btn-primary" type="submit" id="button">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddExpense;
