import 'chart.js/auto';
import { useContext } from 'react';
import { Pie } from "react-chartjs-2";
import {BudgetContext} from "../context/BudgetContext"

function PieChart() {
const { rentQuant, setRentQuant } = useContext(BudgetContext);
const { foodQuant, setFoodQuant } = useContext(BudgetContext);
const { gamingQuant, setGamingQuant } = useContext(BudgetContext);
const { hobbyQuant, setHobbyQuant } = useContext(BudgetContext);

    const ChartData = {
        labels: ['Rent', 'Food', 'Gaming', 'Hobby'],
        datasets: [
          {
            label: '# of Votes',
            data: [rentQuant, foodQuant, gamingQuant, hobbyQuant],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

  return (

    <Pie
      data={ChartData}
    />
  );
};

export default PieChart;
