export const addPizzaToCart = (obj) => ({
    type: 'ADD_PIZZA_TO_CART',
    payload: obj
})

export const deleteSingleItem = (obj) => ({
    type: 'DELETE_SINGLE_ITEM',
    payload: obj
})
export const changeProductCount = (obj) => ({
    type: 'CHANGE_PRODUCT_COUNT',
    payload: obj
})


export const clearCart = () => ({
    type: 'CLEAR_CART',
})