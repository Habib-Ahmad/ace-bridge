import { useNavigate } from 'react-router';

const MaterialCard = ({ id, img, title, pricePerUnit, unit }) => {
	const navigate = useNavigate();
	const props = { id, img, title, pricePerUnit, unit };
	pricePerUnit = pricePerUnit.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

	return (
		<div
			className="material-card"
			onClick={() => navigate(`/building-materials/${id}`, { state: props })}
		>
			<div className="image-wrapper">
				<img src={img} alt="" />
			</div>

			<div className="details">
				<p className="title">{title}</p>
				<div className="price-wrapper">
					<p className="price">₦{pricePerUnit}</p>
					<p className="unit">per {unit}</p>
				</div>
			</div>
		</div>
	);
};

export default MaterialCard;
