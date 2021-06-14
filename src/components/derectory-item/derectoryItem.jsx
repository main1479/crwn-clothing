import React from 'react';
import { Link } from 'react-router-dom';
import './derectoryItem.scss';


const DerectoryItem = ({ title, image, size, id}) => {
	// console.log(props);
	return (
		<Link to={`/shop/${title}`} className={`derectory__item ${size} derectory__item-${id}`}>
			<div className="derectory__item-content">
				<h2 className="heading title">{title.toUpperCase()}</h2>
				<h3 className="heading heading--sub">Shop Now</h3>
			</div>
			<figure className="derectory__item-img">
				<img src={image} alt={title} className="img" />
			</figure>
		</Link>
	);
};

export default DerectoryItem;
