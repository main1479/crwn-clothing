import React from 'react';
import SHOP_DATA from '../shop/shopData';

import Product from '../../components/products/product';

const Collections = (props) => {
	const routeName = props.location.pathname.slice(6);
	const collection = SHOP_DATA.filter((collection) => collection.routeName === routeName)[0];
	console.log(collection);
	return (
		<div className="container">
			<h1
				style={{ textAlign: 'center', fontSize: '5.5rem', marginBottom: '8rem' }}
				className="title"
			>
				{collection.title.toUpperCase()} COLLECTIONS
			</h1>

			<div className="collections" style={{display:'grid', gridTemplateColumns: `repeat(auto-fit, minmax(25rem, 1fr))`, gridGap: '2rem'}}>
				{collection.items.map((item) => (
					<Product
						key={item.id}
						title={item.name}
						price={item.price}
						image={item.imageUrl}
						id={item.id}
					/>
				))}
			</div>
		</div>
	);
};

export default Collections;
