import { combineReducers } from 'redux';
import * as actions from './actions';

const cart_init = []

const cart = (state = cart_init, action) => {
    let index, newState;
    switch(action.type) {

        case actions.ADD_TO_CART:
            index = state.indexOf(action.payload.product._id);
            if(index < 0) {
                //item doesnt exist in cart
                const newItem = {
                    id: action.payload.product._id,
                    quantity: 1,
                    product: action.payload.product
                }
                return [...state, newItem];
            } else {
                //item does exist
                let newState = [...state];
                newState[index].amount += 1; 

                return [newState];
            }

        case actions.REMOVE_FROM_CART:
            index = state.indexOf(action.payload.id);
            newState = [...state];
            newState.splice(index, 1);
            return [...newState];

        case actions.SET_QUANTITY:
            index = state.findIndex(product => {
                console.log(product);
                return product.id === action.payload.id
            });
            newState = [...state];
            newState[index].quantity = action.payload.quantity;
            return [...newState];

        default: return [...state];
    }
}

const reducer = combineReducers({
    cart
});

export default reducer;