import React from 'react';
import './App.css';

function Expense(props) {
    let expenseArr = props.list;
    const expenseList = expenseArr.map((el, index)=>{
        return (
            <li key={index} className='list-item'>
                <p>{el.text}</p>
                <p>${el.money}</p>
                <button className='delete' onClick={()=>remove([index])} >X</button>
            </li>
        )
    })
    const remove = (index) => {
        expenseArr.splice(index, 1);
        props.action();
    }
    return (
        <div>
            <ul className='list-container'>{expenseList}</ul>
            {(expenseList && expenseList.length === 0) && <h1>Add your expenses above!</h1>}
        </div>
    )
}

export default Expense;