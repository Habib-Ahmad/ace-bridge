import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

const PaymentCard = ({ price, text }) => {
	const navigate = useNavigate();
	const bool = Number(price) === 0 ? false : true;
	return (
		<div className="payment-card">
			<div className="heading">Payment over project duration</div>
			<p className="text">{text}</p>
			<p className="price">₦{price}</p>

			<div className="item-list">
				<p className="item">Make initial payment</p>
				<p className="item">Pay the rest within the project duration</p>
				<p className="item">Schedule how and when to pay</p>
				<p className="item">AceBridge welcome package</p>
			</div>

			{bool && (
				<Button
					onClick={() => navigate('/contact-us')}
					variant="contained"
					size="large"
				>
					Buy now
				</Button>
			)}
		</div>
	);
};

export default PaymentCard;
