import React, {useEffect, useState} from 'react';
import IncomeInput from './IncomeInput';
import ExpenseInput from './ExpenseInput';
import Chart from './chart';
import './App.css';

function App() {
  let [total, setTotal] = useState();
  let [incomes, setIncomes] = useState();
  let [expenses, setExpenses] = useState();

  const calcTotal = () => {
    setTotal((incomes - expenses).toFixed(2));
  }

  const getIncomes = (array) => {
    let sum = 0;
    array.forEach(el=>{
      sum += parseFloat(el.money);
    });
    setIncomes(sum.toFixed(2));
  }

  const getExpenses = (array) => {
    let sum = 0;
    array.forEach(el=>{
      sum += parseFloat(el.money);
    });
    setExpenses(sum.toFixed(2));
  }
  useEffect(()=>{
    calcTotal();
  })
  
  return (
    <div className='container'>
      <div className='incomeExpense'>
        <div className='income'>
          <h1>Incomes</h1>
          <IncomeInput action={getIncomes}/>
          <h1 className='positive'>${incomes}</h1>
        </div>
        <div className='expense'>
          <h1>Expenses</h1>
          <ExpenseInput action={getExpenses}/>
          <h1 className='negative'>${expenses}</h1>
        </div>
      </div>
      <div className='total'>
        <div className='monthly'>
          <h1>Monthly Gain/Loss</h1>
          <h1 className={((total >= 0) ? 'positive' : 'negative')}>${total}</h1>
        </div>
      </div>
      <Chart />
    </div>
  );
}

export default App;
