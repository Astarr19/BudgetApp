import React, {useEffect, useState} from 'react';
import IncomeInput from './IncomeInput';
import ExpenseInput from './ExpenseInput';
import Chart from './chart';
import './App.css';

function App() {
  let [total, setTotal] = useState({});
  let [incomes, setIncomes] = useState({});
  let [expenses, setExpenses] = useState({});
  let [month, setMonth] = useState("January");

  const objProps = (month, attribute) =>{
    let value = {};
    Object.defineProperty(value, month, attribute);
    return value;
  }

  const getIncomes = (array) => {
    let sum = 0;
    array.forEach(el=>{
      sum += parseFloat(el.money);
    });
    setIncomes(objProps(month, {value: sum.toFixed(2)}));
  }

  const getExpenses = (array) => {
    let sum = 0;
    array.forEach(el=>{
      sum += parseFloat(el.money);
    });
    setExpenses(objProps(month, {value: sum.toFixed(2)}));
  }

  useEffect(()=>{
    setTotal(objProps(month, {value: (incomes[month] - expenses[month]).toFixed(2)}));
  }, [incomes, expenses, month])
  
  return (
    <div className='container'>
      <div className='incomeExpense'>
        <form>
          <select value={month} onChange={(e)=>setMonth(e.target.value)}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </form>
        <div className='income'>
          <h1>Incomes</h1>
          <IncomeInput action={getIncomes} month={month}/>
          <h1 className='positive'>${incomes[month]}</h1>
        </div>
        <div className='expense'>
          <h1>Expenses</h1>
          <ExpenseInput action={getExpenses} month={month}/>
          <h1 className='negative'>${expenses[month]}</h1>
        </div>
      </div>
      <div className='total'>
        <div className='monthly'>
          <h1>Monthly Gain/Loss</h1>
          <h1 className={((total[month] >= 0) ? 'positive' : 'negative')}>${total[month]}</h1>
        </div>
      </div>
      <Chart data={total}/>
    </div>
  );
}

export default App;
