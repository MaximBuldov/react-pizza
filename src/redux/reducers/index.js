import pizzas from "./pizzas";
import filters from "./filters";
import cart from "./cart";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart
})

export default rootReducer;