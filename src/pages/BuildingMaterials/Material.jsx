import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';
import back from '../../assets/back-btn.svg';

const Material = () => {
	const { title, price, unit, img } = useLocation().state;
	const navigate = useNavigate();

	return (
		<div className="property">
			<div className="property-header">
				<div className="left">
					<img src={back} alt="back" onClick={() => navigate(-1)} />
					<div className="title-wrapper">
						<div className="title">{title}</div>
					</div>
				</div>

				<div className="right">
					<div className="price">
						₦{price.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
					</div>
					<div className="listing">per {unit}</div>
				</div>
			</div>

			<div className="material-content">
				<div className="img-wrapper">
					<img src={img} alt={title} />
				</div>
				<Button
					variant="outlined"
					size="large"
					sx={{ marginLeft: '20%', width: '200px' }}
				>
					Buy
				</Button>
			</div>
		</div>
	);
};

export default Material;
