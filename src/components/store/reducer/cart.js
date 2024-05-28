import { act } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QUANTITY, INCREASE_QUANTITY } from "../action/cart";

const initialState = [];

const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const existingItemIndex = state.findIndex(item => item.id === action.id);
            if (existingItemIndex !== -1) {
                return state.map(item =>
                    item.id === action.id
                        ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...state, { id: action.id, data: action.data, quantity: 1 }];
            }
        case REMOVE_FROM_CART:
            return state.filter(item => item.id !== action.id);
        case DECREASE_QUANTITY:
            const new_state = state.map((item) => {
                if (item.id == action.id) {
                    if (item.quantity == 1) { return null }
                    else return { ...item, quantity: item.quantity - 1 };
                } else return item
            })

            const ss = new_state.filter((item) => item != null);
            return ss;
        case INCREASE_QUANTITY:
            return state.map(item =>
                item.id === action.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        default:
            return state;
    }
};

export default reducerCart;
