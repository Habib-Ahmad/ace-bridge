import { Button } from '@mui/material';

const PaymentCard = ({ price, text }) => {
	return (
		<div className="payment-card">
			<div className="heading">Payment over project duration</div>
			<p className="text">{text}</p>
			<p className="price">₦{price}</p>
			<p className="million">Million</p>

			<div className="item-list">
				<p className="item">Make initial payment</p>
				<p className="item">Pay the rest within the project duration</p>
				<p className="item">Schedule how and when to pay</p>
				<p className="item">AceBridge welcome package</p>
			</div>

			<Button variant="contained" size="large">
				Buy now
			</Button>
		</div>
	);
};

export default PaymentCard;
