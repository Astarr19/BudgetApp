import React from 'react';
import Expense from './expense';
import './App.css';

class ExpenseInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            expenseArr: [],
            text: 'Rent',
            money: 250
        }

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleMoneyChange = this.handleMoneyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMoneyChange(event) {
        this.setState({money: event.target.value});
    }
    handleTextChange(event) {
        this.setState({text: event.target.value});
    }
    handleSubmit = (e) => {
        if (e !== null) {
            e.preventDefault();
        }
        this.setState({expenseArr: [...this.state.expenseArr, {text: this.state.text, money: parseFloat(this.state.money).toFixed(2)}]},()=>{
            this.props.action(this.state.expenseArr);
            this.setState({text: '', money: ''})
        })
    }
    handleDelete = () => {
        this.setState({expenseArr: [...this.state.expenseArr]});
        this.props.action(this.state.expenseArr);
    }
    componentDidMount = () => {
        this.handleSubmit(null);
    }
    
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for='expText'>Name of Expense</label>
                    <input type='text' id='expText' value={this.state.text} onChange={this.handleTextChange} required/>
                    <label for="expMoney">Money Spent</label>
                    <input type='number' id='expMoney' min='.01' step='.01' value={this.state.money} onChange={this.handleMoneyChange} required />
                    <input type='submit' value='Add to List' />
                </form>
                <Expense list={this.state.expenseArr} action={this.handleDelete}/>
            </div>
        )
    }
}
export default ExpenseInput;