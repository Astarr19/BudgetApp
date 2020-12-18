import React, {useState, useEffect} from 'react';
import Income from './income';
import './App.css'

function IncomeInput(props) {
    const [text, setText] = useState();
    const [money, setMoney] = useState();
    const [incomes, setIncomes] = useState({
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
        setIncomes({...incomes, [props.month]:[...incomes[props.month], {text: text, money: money}]});
        setText('');
        setMoney('');
    }
    const handleDelete = () => {
        action(incomes[props.month]);
    }

    useEffect(()=>{
        action(incomes[month]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [incomes, month])

    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label for='incText'>Type of Income</label>
                <input type='text' name='text' id='incText' value={text} onChange={e=>setText(e.target.value)} required/>                    
                <label for='incMoney'>Money Earned</label>
                <input type='number' name='number' id='incMoney' min='.01' step='.01' value={money} onChange={e=>setMoney(e.target.value)} required />
                <input type='submit' value='Add to list' />
            </form>
            <Income list={incomes[month]} action={handleDelete} />
        </div>
    )
}
export default IncomeInput;