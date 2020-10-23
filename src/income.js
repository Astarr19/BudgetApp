import React from 'react';
import './App.css';

function Income(props) {
    let incomeArr = props.list
    const incomeList = incomeArr.map((el, index)=>{
        return (
            <li key={index} className='list-item'>
                <p>{el.text}</p>
                <p>${el.money}</p>
                <button className='delete' onClick={()=>remove([index])} >X</button>
            </li>
        )
    })
    const remove = (index) => {
        incomeArr.splice(index, 1);
        props.action();
    }
    return (
        <div>
            <ul className='list-container'>{incomeList}</ul>
            {incomeList.length === 0 && <h1>Add your incomes above!</h1>}
        </div>
    )
}

export default Income;