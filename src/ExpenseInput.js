import React from 'react';
import Expense from './expense';
import './income.css';

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
    componentDidMount = () => {
        this.handleSubmit(null);
    }
    componentDidUpdate = () => {
        this.props.action(this.state.expenseArr);
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.text} onChange={this.handleTextChange} required/>
                    <input type='number' min='.01' step='.01' value={this.state.money} onChange={this.handleMoneyChange} required />
                    <input type='submit' value='submit' />
                </form>
                <Expense list={this.state.expenseArr} action={()=>this.setState({expenseArr: [...this.state.expenseArr]})}/>
            </div>
        )
    }
}
export default ExpenseInput;