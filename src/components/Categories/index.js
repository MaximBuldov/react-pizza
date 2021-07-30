import React, {memo} from 'react';

const Categories = memo(({items = [], onClick, activeCategory} ) => {

    const categories = items.map((cat, index) => (
        <li
            className={activeCategory === index ? 'active' : '' }
            onClick={() => onClick(index)}
            key={`${cat}_${index}`}
        >
            {cat}
        </li>
    ));
    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onClick(null)}
                    className={activeCategory === null ? 'active' : ''}
                >All</li>
                {categories}
            </ul>
        </div>
    );
})

export default Categories;
