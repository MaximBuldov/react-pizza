import React, {useState} from 'react';

const Categories = ({items = [], onClick} ) => {
    const [activeItem, setActiveItem] = useState(null);

    const onSelectCat = index => {
        setActiveItem(index)
    }

    const categories = items.map((cat, index) => (
        <li
            className={activeItem === index ? 'active' : '' }
            onClick={() => onSelectCat(index)}
            key={`${cat}_${index}`}
        >
            {cat}
        </li>
    ));
    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onSelectCat(null)}
                    className={activeItem === null ? 'active' : ''}
                >All</li>
                {categories}
            </ul>
        </div>
    );
};

export default Categories;
