import { useNavigate } from 'react-router';
import bed from '../assets/bedroom.svg';
import shower from '../assets/bathroom.svg';
import car from '../assets/parking.svg';

const PropertyCard = ({
	id,
	listing,
	img,
	amenities,
	description,
	title,
	type,
	price,
	location,
	bathrooms,
	bedrooms,
	parking,
}) => {
	const navigate = useNavigate();
	const props = {
		id,
		listing,
		img,
		amenities,
		description,
		title,
		type,
		price,
		location,
		bathrooms,
		bedrooms,
		parking,
	};
	return (
		<div
			className="property-card"
			onClick={() => navigate(`/properties/${id}`, { state: props })}
		>
			<p className="tag">For {listing}</p>
			<div className="image-wrapper">
				<img src={img} alt="" />
				<p className="type">{type}</p>
			</div>

			<div className="body">
				<div className="details">
					<p className="title">{title}</p>
					<p className="price">
						₦{price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					</p>
				</div>
				<p className="location">{location}</p>

				<div className="specs">
					<div className="spec">
						<div className="icon-wrapper">
							<img src={bed} alt="" />
							<p className="spec-item">{bedrooms}</p>
						</div>
						<p>Bedrooms</p>
					</div>

					<div className="spec">
						<div className="icon-wrapper">
							<img src={shower} alt="" />
							<p className="spec-item">{bathrooms}</p>
						</div>
						<p>Bathrooms</p>
					</div>

					<div className="spec">
						<div className="icon-wrapper">
							<img src={car} alt="" />
							<p className="spec-item">{parking}</p>
						</div>
						<p>Parking lot</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
