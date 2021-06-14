import React from 'react';
import { Link } from 'react-router-dom';
import './product.scss';

const Product = ({ title, price, image, id }) => {
	return (
		<div className="product">
			<figure className="product__img">
				<img src={image} alt={title} />
			</figure>
			<div className="product__details">
				<Link to={`/product/${id}`} className="product__title">{title}</Link>
				<h4 className="product__price">${price}</h4>
			</div>
			<button className="btn btn__primary">Add To Cart</button>
		</div>
	);
};

export default Product;
