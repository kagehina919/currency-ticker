import React, { Component } from 'react';
import './Tickers.css';
import Cryptocurrency from './cryptocurrency.js';
import axios from 'axios';

class Tickers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
               
            ]
        };
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
    }

    fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/")
            .then(response => {
                var wanted = ["bitcoin", "ethereum", "litecoin", "tether", "ripple"];
                var result = response.data.filter(currency => wanted.includes(currency.id));
                this.setState({ data: result});
            })
            .catch(err => console.log(err));
    }

    render() {
        var tickers = this.state.data.map((currency) =>
        <Cryptocurrency data={currency} key={currency.id} />
        );
        return (
            <div className="tickers-container">
                <ul className="tickers">{tickers}</ul>
                <p>Information updated every minute courtesy of coinmarketcap.com</p>
            </div>
        );
    }
}

export default Tickers;
