const cartInitalState = {
    getCartItems: {
        loading: false,
        error: false,
    },
    addCartItem: {
        loading: false,
        error: false,
    },
    updateCartItem: {
        loading: false,
        error: false,
    },
    removeCartItem: {
        loading: false,
        error: false,
    },
    data: [],
};

export const cartsReducer = (state = cartInitalState, { type, payload }) => {

    switch (type) {

        default: {
            return state
        }
    }


};