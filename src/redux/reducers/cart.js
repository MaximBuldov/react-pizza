const initialState = {
    items: {},
    totalPrice: 0,
    itemCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':
            const createID = `${action.payload.id}_${action.payload.type}_${action.payload.size}`;
            return {
                ...state,
                items: {
                    ...state.items,
                    [createID] : !state.items[createID]
                        ? [action.payload]
                        : [...state.items[createID], action.payload]
                },
                itemCount : state.itemCount + 1,
                totalPrice : state.totalPrice + action.payload.price
            }
        case 'CHANGE_PRODUCT_COUNT':
            if (action.payload.sign === 'minus') {
                if (action.payload.count !== 1) {
                    state.items[action.payload.id].pop();
                } else {
                    delete state.items[action.payload.id];
                }
            } else if(action.payload.sign === 'plus') {
                state.items[action.payload.id].push(state.items[action.payload.id][0]);
            }
            return {
                ...state,
                items: {
                    ...state.items,
                },
                itemCount : action.payload.sign === 'minus' ? state.itemCount - 1: state.itemCount + 1,
                totalPrice : action.payload.sign === 'minus' ? state.totalPrice - action.payload.price: state.totalPrice + action.payload.price
            }
        case 'DELETE_SINGLE_ITEM':
            delete state.items[action.payload.id];
            return {
                ...state,
                items: {
                    ...state.items,
                },
                itemCount : state.itemCount - action.payload.count,
                totalPrice : state.totalPrice - action.payload.totalPrice
            }
        case 'CLEAR_CART':
            return {
                ...state,
                items: {},
                itemCount: 0,
                totalPrice: 0
            }

        default:
            return state
    }
}

export default cart;