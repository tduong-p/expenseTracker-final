import { createContext, useState } from "react";

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
    if (window.localStorage.getItem("###whfvhgsvfhsdvf83r3ijsdjfkshjfkhkshdfkjsfu23rh###") === null) {
        window.localStorage.setItem('###whfvhgsvfhsdvf83r3ijsdjfkshjfkhkshdfkjsfu23rh###', 0);};

    var data = window.localStorage.getItem("###whfvhgsvfhsdvf83r3ijsdjfkshjfkhkshdfkjsfu23rh###");
        console.log(data);
    const [budgetState, setBudgetState] = useState(data);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [ rentQuant, setRentQuant ] = useState(0);
    const [ foodQuant, setFoodQuant ] = useState(0);
    const [ gamingQuant, setGamingQuant ] = useState(0);
    const [ hobbyQuant, setHobbyQuant ] = useState(0);

    return (
      <BudgetContext.Provider value={{budgetState,setBudgetState,totalExpenses,setTotalExpenses,remaining,setRemaining, rentQuant,setRentQuant,foodQuant,setFoodQuant,gamingQuant,setGamingQuant,hobbyQuant,setHobbyQuant}}>
        {children}
      </BudgetContext.Provider>
    );
  };