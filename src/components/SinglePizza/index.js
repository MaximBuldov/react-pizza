import React, {useState} from 'react';
import classNames from 'classnames';
import {string as tString, number as tNumber, arrayOf as tArrayOf} from 'prop-types';
import {Button} from "../index";

const SinglePizza = ({name, id, imageUrl, price, sizes, types, onAddToCart, addedPizzas}) => {
    const typeName = ['thin', 'classic'];
    const pizzaSizes = [26, 30, 40];
    const [activeType, setActiveType] = useState(types[0]);
    const onSelectType = (index) => {
        setActiveType(index);
    }
    const searchActiveSize = pizzaSizes.findIndex(el => el === sizes[0]);
    const [activeSize, setActiveSize] = useState(searchActiveSize);
    const onSelectSize = (index) => {
        setActiveSize(index);
    }
    const option = (arrName, arrValue, func, active, inch = '') => {
        return arrName.map((name, index) => (
            <li key={name}
                onClick={() => func(index)}
                className={classNames({
                    'active': active === index,
                    'disable': !arrValue.includes(index) && !arrValue.includes(name)
                })}>{name}{inch}</li>
        ))
    }
    const createObj = () => {
        const obj = {
            name,
            id,
            imageUrl,
            price,
            type: typeName[activeType],
            size: pizzaSizes[activeSize]
        }
        onAddToCart(obj);
    }
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt={name}
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {option(typeName, types, onSelectType, activeType)}
                </ul>
                <ul>
                    {option(pizzaSizes, sizes, onSelectSize, activeSize, ' Inch')}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">from ${price}</div>
                <Button onClick={createObj} className="button--add" outline>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Add</span>
                    {addedPizzas && <i>{addedPizzas}</i>}
                </Button>
            </div>
        </div>
    );
};

SinglePizza.propTypes = {
    name: tString,
    id: tNumber,
    imageUrl: tString,
    price: tNumber,
    rating: tNumber,
    sizes: tArrayOf(tNumber),
    types: tArrayOf(tNumber)
}


export default SinglePizza;
