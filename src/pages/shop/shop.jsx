import React, { Component } from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from './../../components/collection-preview/collectionPreview';

class ShopPage extends Component {
	state = {
		collections: SHOP_DATA,
	};
	render() {
		const { collections } = this.state;
		return (
			<section className="section-collections">
				<div className="container">
					{collections.map(({ id, title, items, routeName }) => (
						<React.Fragment key={id}>
							
							<CollectionPreview title={title} routeName={routeName} items={items} />
						</React.Fragment>
					))}
				</div>
			</section>
		);
	}
}

export default ShopPage;
