import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup, SinglePizza, PizzaLoadingBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";


const categoryNames = ['Meet', 'Vegetarian', 'Grill', 'Hot', 'Closed'];
const sortNames = ['rating', 'price', 'name'];
const Home = () => {
    const dispatch = useDispatch();

    const pizzas = useSelector(({pizzas}) => pizzas.items);
    const isLoading = useSelector(({pizzas}) => pizzas.isLoading);
    const {category, sortBy} = useSelector(({filters}) => filters);
    const cartItems = useSelector(({cart}) => cart.items);
    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    },[category, sortBy, dispatch]);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [dispatch]);

    const onSelectSortType = useCallback((name) => {
        dispatch(setSortBy(name))
    }, [dispatch]);

    const onAddToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }

    const pizzaList = pizzas.map(pizza => (
        <SinglePizza
            addedPizzas={cartItems[pizza.id] && cartItems[pizza.id].length}
            onAddToCart={onAddToCart}
            key={pizza.id}
            {...pizza}/>
    ));

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categoryNames}
                    onClick={onSelectCategory}
                    activeCategory={category}
                />
                <SortPopup items={sortNames} onSelectSortType={onSelectSortType} activeSortBy={sortBy}/>
            </div>
            <h2 className="content__title">{category !== null ? categoryNames[category] : 'All'}</h2>
            <div className="content__items">
                {isLoading
                    ? pizzaList
                    : Array(12).fill(0).map((x, i) => (<PizzaLoadingBlock key={i}/>))
                }
            </div>
        </div>
    );
};

export default Home;
