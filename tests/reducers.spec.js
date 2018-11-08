import cryptoApp from '../src/reducers';
import { ADD_RIPPLE,
    REMOVE_RIPPLE,
    ADD_TETHER,
    REMOVE_TETHER,
    DELETE_VIEW,
    TOGGLE_VIEW,
    RESET_VIEW } from '../src/actions';

describe('cryptoApp reducer', () => {
    it('Adds Ripple card to cryptocurrency page', () => {
        const initialState = { wanted: ["bitcoin", "ethereum", "litecoin"] };
        const action = { type: ADD_RIPPLE };
        const finalState = { wanted: ["bitcoin", "ethereum", "litecoin", "ripple"] }
        const tester = cryptoApp(initialState, action)
        expect(finalState).toEqual(tester);
    });
    
    it('Adds Tether card to cryptocurrency page', () => {
        const initialState = { wanted: ["bitcoin", "ethereum", "litecoin"] };
        const action = { type: ADD_TETHER };
        const finalState = { wanted: ["bitcoin", "ethereum", "litecoin", "tether"] }
        const tester = cryptoApp(initialState, action)
        expect(finalState).toEqual(tester);
    });

    it('Removes Ripple card to cryptocurrency page', () => {
        const initialState = { wanted: ["bitcoin", "ethereum", "litecoin", "ripple"] };
        const action = { type: REMOVE_RIPPLE };
        const finalState = { wanted: ["bitcoin", "ethereum", "litecoin"] }
        const tester = cryptoApp(initialState, action)
        expect(finalState).toEqual(tester);
    });

    it('Removes Tether card to cryptocurrency page', () => {
        const initialState = { wanted: ["bitcoin", "ethereum", "litecoin", "tether"] };
        const action = { type: REMOVE_TETHER };
        const finalState = { wanted: ["bitcoin", "ethereum", "litecoin"] }
        const tester = cryptoApp(initialState, action)
        expect(finalState).toEqual(tester);
    });

    it('Deletes all cards from cryptocurrency page', () => {
        const initialState = { wanted: ["bitcoin", "ethereum", "litecoin"] };
        const action = { type: DELETE_VIEW };
        const finalState = { wanted: [] }
        const tester = cryptoApp(initialState, action)
        expect(finalState).toEqual(tester);
    });

    it('Sets the default view', () => {
        const initialState = { wanted: ["bitcoin", "ethereum", "litecoin"] };
        const action = { type: RESET_VIEW };
        const finalState = { wanted: ["bitcoin", "ethereum", "litecoin"] }
        const tester = cryptoApp(initialState, action)
        expect(finalState).toEqual(tester);
    });

    it('Toggles view', () => {
        const initialState = { showCards: true };
        const action = { type: TOGGLE_VIEW };
        const finalState = { showCards: false }
        const tester = cryptoApp(initialState, action)
        expect(finalState).toEqual(tester);
    });

    it('Toggles view', () => {
        const initialState = { showCards: false};
        const action = { type: TOGGLE_VIEW };
        const finalState = { showCards: true }
        const tester = cryptoApp(initialState, action)
        expect(finalState).toEqual(tester);
    });
});
