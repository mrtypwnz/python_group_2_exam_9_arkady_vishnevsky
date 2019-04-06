import React from 'react';
import Card from "../UI/Card/Card";

const ProductCard = props => {
    const {name, id, photos, description, price} = props.product;

    const link = {
        text: 'Описание',
        url: '/products/' + id
    };

    return <Card header={name} photos={photos} link={link} className='h-100' description={description} price={price}/>;
};


export default ProductCard;