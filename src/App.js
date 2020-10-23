import React, {useEffect, useState} from 'react';
import IncomeInput from './IncomeInput';
import ExpenseInput from './ExpenseInput';
import './App.css';

function App() {
  let [total, setTotal] = useState();
  let [incomes, setIncomes] = useState();
  let [expenses, setExpenses] = useState();
  let [months, setMonths] = useState(1);

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
        <div className='custom-time'>
          <h1>Total cash after <input type='number' onChange={event =>setMonths(event.target.value)} min='1' value={months}/> months</h1>
          <h1 className={((total >= 0) ? 'positive' : 'negative')}>${(total * months).toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
