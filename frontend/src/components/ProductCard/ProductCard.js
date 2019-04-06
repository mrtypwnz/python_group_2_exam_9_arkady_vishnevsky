import React from 'react';
import Card from "../UI/Card/Card";

const ProductCard = props => {
    const {name, id, photo, description, price} = props.product;

    const link = {
        text: 'more',
        url: '/products/' + id
    };

    return <Card header={name} photos={photo} link={link} className='h-100' description={description} price={price}/>;
};


export default ProductCard;