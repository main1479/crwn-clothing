import React from 'react';
import { Link } from 'react-router-dom';

import Product from './../products/product';
import './collectionPreview.scss';

const CollectionPreview = ({ items, title, routeName }) => {
	return (
		<React.Fragment>
			<Link className="collection__title" to={`/shop/${routeName}`}>
				{title} <sup>🔗</sup>
			</Link>
			<div className="collection__items">
				{items
					.filter((item, i) => i < 4)
					.map((item) => (
						<Product
							key={item.id}
							title={item.name}
							price={item.price}
							image={item.imageUrl}
							id={item.id}
						/>
					))}
			</div>
		</React.Fragment>
	);
};

export default CollectionPreview;
