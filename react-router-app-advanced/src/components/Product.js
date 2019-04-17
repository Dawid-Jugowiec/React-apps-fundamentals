import React from 'react';
import ProductListPage from '../pages/ProductListPage';

const Product = (props) => {
    return (<div>
        <article className="product">
            <h1>{props.id}</h1></article>
    </div>);
}

export default Product;