import React, { Component } from 'react';
import DerectoryItem from '../derectory-item/derectoryItem';

import './directory.scss';

class Directory extends Component {
	state = {
		sections: [
			{
				title: 'hats',
				imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
				id: 1,
				size: 'small',
			},
			{
				title: 'jackets',
				imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
				id: 2,
				size: 'small',
			},
			{
				title: 'sneakers',
				imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
				id: 3,
				size: 'medium',
			},
			{
				title: 'womens',
				imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
				size: 'large',
				id: 4,
			},
			{
				title: 'mens',
				imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
				size: 'large',
				id: 5,
			},
		],
	};
	render() {
		return (
			<div className="container">
				<div className="derectory">
					{this.state.sections.map(({ id, title, imageUrl, size }) => (
						<DerectoryItem key={id} title={title} image={imageUrl} size={size} id={id}/>
					))}
				</div>
			</div>
		);
	}
}

export default Directory;
