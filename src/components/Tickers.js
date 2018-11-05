import React, { Component } from 'react';
import './Tickers.css';
import AddCards from './addCards';
import Cryptocurrency from './cryptocurrency.js';
import { connect } from 'react-redux'; //takes a component and connects it to redux
import { toggleView, deleteView, resetView } from '../actions';
import { Button } from 'reactstrap';

class Tickers extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const wanted = this.props.wanted;
        const allData = this.props.data;
        const result = allData.filter(currency => wanted.includes(currency.id)); //filters currencies we want.
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
                <AddCards/><br/>
                <Button color="warning" onClick={this.props.Delete}>
                    <strong>Delete</strong>
                </Button><br/><br/>
                <Button color="success" onClick={this.props.Reset}>
                    <strong>Reset</strong>
                </Button>
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
} // the state here is global state.

const mapDispatchToProps = dispatch => {
    return {
        showHide: () => {
            dispatch(toggleView())
        },
        Delete: () => {
            dispatch(deleteView())
        },
        Reset: () => {
            dispatch(resetView())
        }
    }
}
 
const ConnectedTickers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Tickers) // map between redux ka store and component.

export default ConnectedTickers;
// any component is rendered only when the thing it is subscribed to changes.