import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaLoadingBlock = () => {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="140" r="140" />
            <rect x="0" y="300" rx="3" ry="3" width="280" height="25" />
            <rect x="0" y="340" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="436" rx="3" ry="3" width="70" height="24" />
            <rect x="164" y="436" rx="15" ry="15" width="116" height="24" />
        </ContentLoader>
    );
};

export default PizzaLoadingBlock;
