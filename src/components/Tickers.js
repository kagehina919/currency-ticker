import React, { Component } from 'react';
import './Tickers.css';
import AddCards from './addCards';
import Cryptocurrency from './cryptocurrency.js';
import { connect } from 'react-redux';
import { toggleView } from '../actions';
import { Button } from 'reactstrap';

class Tickers extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const wanted = this.props.wanted;
        const allData = this.props.data;
        const result = allData.filter(currency => wanted.includes(currency.id));
        var tickers = result.map((currency) =>
        <Cryptocurrency data={currency} key={currency.id} />
        );
        
        if(this.props.showCards === false) { tickers = '' }
        return (
            <div className="tickers-container"><br/><br/>
            <Button color="success" onClick={this.props.showHide}>
                <strong>Toggle Cards View</strong>
            </Button><br/><br/>
                <row>
                    <ul className="tickers">
                        {tickers}
                    </ul>
                </row><br/><br/><br/>
                <AddCards/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        wanted: state.wanted,
        data: state.data,
        showCards: state.showCards
      }
}

const mapDispatchToProps = dispatch => {
    return {
        showHide: () => {
            dispatch(toggleView())
        }
    }
}
 
const ConnectedTickers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tickers)

export default ConnectedTickers;
