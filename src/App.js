import React, {useReducer, useState} from 'react';
import IncomeInput from './IncomeInput';
import ExpenseInput from './ExpenseInput';
import Chart from './chart';
import './App.css';

function App() {
  
  let [incomes, setIncomes] = useState({});
  let [expenses, setExpenses] = useState({});
  let [month, setMonth] = useState("January");
  let [prevCheck, setPrev] = useState(false);
  let [nextCheck, setNext] = useState(true);
  let [hidden, setHidden] = useState("hide");

  const reducer = (state, action) => {
    return {...state, [month]: (incomes[month] - expenses[month]).toFixed(2)}
  }
  let [total, dispatch] = useReducer(reducer, {});

  const monthReducer = (state, action) => {
    let arr = Object.values(total);
    let sum = 0;
    arr.forEach(el=>{
      sum += parseFloat(el);
    })
    return sum.toFixed(2);
  }
  let [monthSum, monthDispatch] = useReducer(monthReducer, 0);


  const getIncomes = (array) => {
    let sum = 0;
    array.forEach(el=>{
      sum += parseFloat(el.money);
    });
    setIncomes({...incomes, [month]: sum.toFixed(2)});
    dispatch();
    monthDispatch();
  }

  const getExpenses = (array) => {
    let sum = 0;
    array.forEach(el=>{
      sum += parseFloat(el.money);
    });
    setExpenses({...expenses, [month]: sum.toFixed(2)});
    dispatch();
    monthDispatch();
  }

  const nextMonth = () => {
    switch (month) {
      case "January" :
        setPrev(true);
        return "February";
      case "February" :
        return "March";
      case "March" :
        return "April";
      case "April" :
        return "May";
      case "May" :
        return "June";
      case "June" :
        return "July";
      case "July" :
        return "August";
      case "August" :
        return "September";
      case "September" :
        return "October";
      case "October" :
        return "November";
      case "November" :
        setNext(false)
        return "December";
      default:
        break;
    }
  }

  const lastMonth = () => {
    switch (month) {
      case "December" :
        setNext(true);
        return "November";
      case "November" :
        return "October";
      case "October" :
        return "September";
      case "September" :
        return "August";
      case "August" :
        return "July";
      case "July" :
        return "June";
      case "June" :
        return "May";
      case "May" :
        return "April";
      case "April" :
        return "March";
      case "March" :
        return "February";
      case "February" :
        setPrev(false)
        return "January";
      default:
        break;
    }
  }

  const toggleChart = () => setHidden((hidden === "hide") ? "show" : "hide");

  
  return (
    <div className='container'>
      <div className="monthDisplay">
        <button disabled={!prevCheck} onClick={()=>setMonth(lastMonth)}>Last Month</button>
        <h1>{month}</h1>
        <button disabled={!nextCheck} onClick={()=>setMonth(nextMonth)}>Next Month</button>
      </div>
      <div className='incomeExpense'>
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
        <div className='yearly'>
          <h1>Yearly Gain/Loss</h1>
          <h1 className={((monthSum >= 0) ? 'positive' : 'negative')}>${monthSum}</h1>
        </div>
      </div>
      <div id="chart" className={hidden}>
        <button onClick={toggleChart}>{(hidden === "hide") ? "Show" : "Hide"} Chart</button>
        <Chart data={total}/>
      </div>
    </div>
  );
}

export default App;
