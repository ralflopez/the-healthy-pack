import { combineReducers } from 'redux';
import * as actions from './actions';

const cart_init = []

const cart = (state = cart_init, action) => {
    switch(action.type) {

        case actions.ADD_TO_CART:
            const index = state.indexOf(action.payload.item_name);
            if(index < 0) {
                //item doesnt exist in cart
                const newItem = {
                    name: action.payload.name,
                    amount: action.payload.amount,
                    quantity: action.payload.quantity
                }
                return [...state, newItem];
            } else {
                //item does exist
                let newState = [...state];
                newState[index].amount += 1; 

                return [newState];
            }

        case actions.REMOVE_FROM_CART:
            return [...state];

        default: return [...state];
    }
}

const reducer = combineReducers({
    cart
});

export default reducer;