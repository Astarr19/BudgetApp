import React from 'react';

function Expense(props) {
    let expenseArr = props.list
    const expenseList = expenseArr.map((el, index)=>{
        return <li key={index}>{el.text}<mark>${el.money}</mark><button onClick={()=>remove([index])}>X</button></li>
    })
    const remove = (index) => {
        expenseArr.splice(index, 1);
        props.action();
    }
    return (
        <div>
            <ul>{expenseList}</ul>
            {expenseList.length === 0 && <h1>Add your expenses above!</h1>}
        </div>
    )
}

export default Expense;