import React, { Component } from "react";
import { getExchangeRates } from '../GetExchangeRate';
import './style.css';

class Converter extends Component {

    state = {
        currencies: [],
        base: 'DKK',
        convertTo: 'EUR',
        amount: 1,
        result: '',
        date: '',
    }

    componentDidMount() {
        getExchangeRates()
            .then(data => {
                console.log(data)
                this.setState({ currencies: Object.keys(data.rates) });
                console.log(this.state.currencies)
            })
            .catch(err => {
                console.log(err);
                this.setState({ requestStatus: "error" });
            });
    }

    handleSelect = e => {
        this.setState(
            {
                [e.target.name]: e.target.value,
                result: null
            },
            this.calculate
        );
    };

    handleInput = e => {
        this.setState(
            {
                amount: e.target.value,
                result: null,
                date: null
            },
            this.calculate
        );
    };


    calculate = () => {
        const amount = this.state.amount;
        if (amount === isNaN) {
            return;
        } else {
            fetch(`https://data.fixer.io/api/latest?access_key=eff15d471c7ba065a8cb7ebc4672cb30&base=${this.state.base}`)
                .then(res => res.json())
                .then(data => {
                    const date = data.date;
                    const result = (data.rates[this.state.convertTo] * amount).toFixed(2);
                    this.setState({
                        result,
                        date
                    });
                });
        }
    };


    render() {
        // const { currencies, base, convertTo, amount, result, date } = this.state;
        const { currencies, amount, result, convertTo, base, date } = this.state;
        return (
            <div className='container'>
                <div className="result">
                    <h3> <b className='base'> {amount} {base}</b> is equivalent to </h3>
                    <h2>
                        <b className='convert-to'>{result} {convertTo}</b>
                    </h2>
                    <h4> As of <i className='date'> {date} </i></h4>
                </div>
                <div className='currency-1 currency'>
                    <form className='exchange-form'>
                        <input
                            className='input-field'
                            type='number'
                            value={amount}
                            onChange={this.handleInput} />
                        <select className='select-options' name="base"
                            value={base}
                            onChange={this.handleSelect}> {currencies.map(currency => (
                                <option className='select-options' key={currency} value={currency}>{currency}</option>
                            ))} </select>
                    </form>
                </div>
                <div className='currency-2 currency'>
                    <form>
                        <input
                            className='input-field'
                            disabled={true}
                            value={
                                amount === ""
                                    ? "0"
                                    : result === null
                                        ? "Calculating..."
                                        : result
                            } />
                        <select name="convertTo"
                            value={convertTo}
                            onChange={this.handleSelect}> {currencies.map(currency => (
                                <option className='select-options' key={currency} value={currency}>{currency}</option>
                            ))} </select>
                    </form>
                </div>

            </div>
        )
    }
}

export default Converter;
