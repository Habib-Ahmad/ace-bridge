import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import SectionHeading from './SectionHeading';

const Availablility = ({ project }) => {
	const navigate = useNavigate();

	return (
		<div className="availablility-wrapper">
			<SectionHeading tag="Availablitity" heading="Home Availablitity" />

			<div className="card-wrapper">
				<div className="availability">
					<span></span>
					<p className="heading">Sold and Available</p>
					<p className="total">Total Units</p>
					<p className="amount">{project.totalUnits}</p>
				</div>
				<div style={{ width: '60px', height: '60px' }} />
				<div className="availability">
					<span></span>
					<p className="heading">Sold and Available</p>
					<p className="total">Total Available Units</p>
					<p className="amount">{project.availableUnits}</p>
					{project.availableUnits > 0 && (
						<Button variant="contained" onClick={() => navigate('/contact-us')}>
							Buy now
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Availablility;
