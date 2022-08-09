import { useLocation, useNavigate } from 'react-router';
import { ReactPhotoCollage } from 'react-photo-collage';
import back from '../../assets/back-btn.svg';
import amenity from '../../assets/amenity.svg';
import bed from '../../assets/bedroom.svg';
import shower from '../../assets/bathroom.svg';
import car from '../../assets/parking.svg';
import { Button } from '@mui/material';

const Property = () => {
	const {
		id,
		listing,
		amenities,
		description,
		title,
		price,
		location,
		bathrooms,
		bedrooms,
		parking,
	} = useLocation().state;
	const navigate = useNavigate();

	const setting = {
		width: '80vw',
		height: ['30vh', '20vh'],
		layout: [2, 3],
		photos: [
			{
				source:
					'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/torquay-exterior-luxury-house-for-sale-1597322103.jpg',
			},
			{
				source:
					'https://images.privateproperty.com.ng/uploaded/6c/6e/2e/6c6e2e73-d609-42f3-abec-1d69d5057c98.jpg',
			},
			{
				source:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCW8TpwA39966ATvmOBQxp7fdcN2Sxbvhmn4DOyOoG58uU07bC0Oun-tu6IvECHrGpgE&usqp=CAU',
			},
			{
				source:
					'https://www.thinkmint.ng/reallifemagazine/wp-content/uploads/2021/03/b.jpg',
			},
			{
				source:
					'https://images.nigeriapropertycentre.com/properties/images/921023/0607b56747b797-4-bed-terrace-apartments-with-1-bq-each-terraced-duplexes-for-sale-lekki-phase-1-lekki-lagos.jpeg',
			},
			{
				source: 'https://carrillionng.com.ng/wp-content/uploads/2018/09/E.jpg',
			},
		],
		showNumOfRemainingPhotos: true,
	};

	return (
		<div className="property">
			<div className="property-header">
				<div className="left">
					<img src={back} alt="back" onClick={() => navigate(-1)} />
					<div className="title-wrapper">
						<div className="title">{title}</div>
						<div className="location">{location}</div>
					</div>
				</div>

				<div className="right">
					<div className="listing">For {listing}</div>
					<div className="price">
						₦{price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					</div>
				</div>
			</div>

			<div className="images">
				<h3>Photos</h3>
				<div className="collage-wrapper">
					<ReactPhotoCollage {...setting} />
				</div>
			</div>

			<h3>Property details</h3>
			<div className="details-wrapper">
				<div className="id-wrapper">
					<p className="id">Property ID: {id}</p>
					<div className="specs">
						<div className="spec">
							<div className="icon-wrapper">
								<img src={bed} alt="bedrooms" />
								<p className="spec-item">{bedrooms}</p>
							</div>
							<p>Bedrooms</p>
						</div>

						<div className="spec">
							<div className="icon-wrapper">
								<img src={shower} alt="bathrooms" />
								<p className="spec-item">{bathrooms}</p>
							</div>
							<p>Bathrooms</p>
						</div>

						<div className="spec">
							<div className="icon-wrapper">
								<img src={car} alt="parking space" />
								<p className="spec-item">{parking}</p>
							</div>
							<p>Parking lot</p>
						</div>
					</div>
				</div>

				<div className="description-wrapper">
					<div className="amenities-wrapper">
						<h3>Amenities</h3>
						<div className="amenities">
							{amenities.map((item) => (
								<div key={item} className="amenity">
									<img src={amenity} alt="amenity" />
									<p>{item}</p>
								</div>
							))}
						</div>
					</div>

					<div className="description">
						<h3>Description</h3>
						<p>{description}</p>
					</div>
				</div>

				<div className="btn-wrapper">
					<Button variant="outlined">Request Inspection</Button>
				</div>
			</div>
		</div>
	);
};

export default Property;
