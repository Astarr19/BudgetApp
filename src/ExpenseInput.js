import React, {useState, useEffect} from 'react';
import Expense from './expense';
import './App.css'

function ExpenseInput(props) {
    const [text, setText] = useState("Rent");
    const [money, setMoney] = useState(1468);
    const [expenses, setExpenses] = useState({
        "January":[],
        "February":[],
        "March":[],
        "April":[],
        "May":[],
        "June":[],
        "July":[],
        "August":[],
        "September":[],
        "October":[],
        "November":[],
        "December":[]
    });
    let {action, month} = props;

    const handleSubmit = (event) => {
        if (event !== null) {
            event.preventDefault();
        }
        setExpenses({...expenses, [props.month]:[...expenses[props.month], {text: text, money: money}]});
        setText('');
        setMoney('');
    }
    const handleDelete = () => {
        action(expenses[props.month]);
    }

    useEffect(()=>{
        action(expenses[month]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [expenses, month])

    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label for='incText'>Type of Expense</label>
                <input type='text' name='text' id='incText' value={text} onChange={e=>setText(e.target.value)} required/>                    
                <label for='incMoney'>Money Spent</label>
                <input type='number' name='number' id='incMoney' min='.01' step='.01' value={money} onChange={e=>setMoney(e.target.value)} required />
                <input type='submit' value='Add to list' />
            </form>
            <Expense list={expenses[month]} action={handleDelete} />
        </div>
    )
}
export default ExpenseInput;