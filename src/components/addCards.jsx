import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import { addRipple, addTether, removeRipple, removeTether } from '../actions';

class Cards extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron>
                <row>
                    <Button color="primary" onClick={this.props.addTether}>Add Tether</Button> { }
                    <Button color="danger" onClick={this.props.removeTether}>Remove Tether</Button>
                </row><br/><br/>
                <row>
                    <Button color="primary" onClick={this.props.addRipple}>Add Ripple</Button> { }
                    <Button color="danger" onClick={this.props.removeRipple}>Remove Ripple</Button>
                </row>
            </Jumbotron>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTether: () => {
            dispatch(addTether())
        },
        removeTether: () => {
            dispatch(removeTether())
        },
        addRipple: () => {
            dispatch(addRipple())
        },
        removeRipple: () => {
            dispatch(removeRipple())
        }
    }
};

const mapStateToProps = state => {
    
}
  
const AddCards = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cards)

export default AddCards;
