import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const initialState = {
    cart: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];

            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                );
            }
            return {
                ...state,
                cart: newCart,
            };
        case 'SET_CART':
            return {
                ...state,
                cart: action.cart,
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Optional: persist cart in localStorage
    useEffect(() => {
        const storedCart = localStorage.getItem('amazon_cart');
        if (storedCart) {
            dispatch({ type: 'SET_CART', cart: JSON.parse(storedCart) });
        }
    }, []);

    useEffect(() => {
        if (state.cart.length > 0) {
            localStorage.setItem('amazon_cart', JSON.stringify(state.cart));
        }
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ cart: state.cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
