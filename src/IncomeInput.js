import React from 'react';
import Income from './income';
import './App.css'

class IncomeInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            incomeArr: [],
            text: 'Job',
            money: 324.59
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
    handleSubmit(event) {
        if (event !== null) {
            event.preventDefault();
        }
        this.setState({incomeArr: [...this.state.incomeArr, {text: this.state.text, money: parseFloat(this.state.money).toFixed(2)}]}, ()=>{
            this.props.action(this.state.incomeArr);
            this.setState({text: '', money: ''});
        });
    }

    componentDidMount= () =>{
        this.handleSubmit(null);
    }
    componentDidUpdate = () =>{
        this.props.action(this.state.incomeArr);
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for='incText'>Name of Income</label>
                    <input type='text' name='text' id='incText' value={this.state.text} onChange={this.handleTextChange} required/>
                    <label for='incMoney'>Money Earned</label>
                    <input type='number' name='number' id='incMoney' min='.01' step='.01' value={this.state.money} onChange={this.handleMoneyChange} required />
                    <input type='submit' value='Add to list' />
                </form>
                <Income list={this.state.incomeArr} action={()=>this.setState({incomeArr: [...this.state.incomeArr]})}/>
            </div>
        )
    }
}
export default IncomeInput;