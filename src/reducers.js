import { 
    ADD_RIPPLE,
    REMOVE_RIPPLE,
    ADD_TETHER,
    REMOVE_TETHER,
    TOGGLE_VIEW, 
    DELETE_VIEW,
    RESET_VIEW} from './actions'

const initialState = {
    data: [
        {
            id: "bitcoin",
            name: "Bitcoin",
            symbol: "BTC",
            price_usd: "1",
            percent_change_1h: "0",
            percent_change_24h: "0",
            percent_change_7d: "0",
        },
        {
            id: "ethereum",
            name: "Ethereum",
            symbol: "ETH",
            price_usd: "1",
            percent_change_1h: "0",
            percent_change_24h: "0",
            percent_change_7d: "0",
        },
        {
            id: "litecoin",
            name: "Litecoin",
            symbol: "LTC",
            price_usd: "1",
            percent_change_1h: "0",
            percent_change_24h: "0",
            percent_change_7d: "0",
        },
        {
            id: "ripple",
            name: "Ripple",
            symbol: "RPL",
            price_usd: "8",
            percent_change_1h: "0",
            percent_change_24h: "0",
            percent_change_7d: "0",
        },
        {
            id: "tether",
            name: "Tether",
            symbol: "THR",
            price_usd: "4",
            percent_change_1h: "0",
            percent_change_24h: "0",
            percent_change_7d: "0",
        },
    ],
    wanted: ["bitcoin", "ethereum", "litecoin"],
    showCards: true
}

export default function cryptoApp(state = initialState, action) {
    let index;

    switch (action.type) {

        case ADD_RIPPLE:
            return {
                ...state,
                wanted: [...state.wanted, "ripple"]
            }

        case ADD_TETHER:
            return {
                ...state, //... is spread operator, doesnt change other values but only the value of the variable desired to change.
                wanted: [...state.wanted, "tether"]
            }
            
        case REMOVE_RIPPLE:

            index = state.wanted.indexOf("ripple");
            if (index > -1) {
                state.wanted.splice(index, 1);
            }
            return {
                ...state,
                wanted: [...state.wanted]
            }
        
        case REMOVE_TETHER:

            index = state.wanted.indexOf("tether");
            if (index > -1) {
                state.wanted.splice(index, 1);
            }

            return {
                ...state,
                wanted: [...state.wanted]
            }
        
        case TOGGLE_VIEW:

        return {
            ...state,
            showCards: !state.showCards
        }

        case DELETE_VIEW:

        return {
            ...state,
            wanted: []
        }

        case RESET_VIEW:

        return {
            ...state,
            wanted: ["bitcoin", "ethereum", "litecoin"]
        }

        default:
        
        return state
    }
} // make one reducer for all actions on a page.