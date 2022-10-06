import PaymentCard from './PaymentCard';
import SectionHeading from './SectionHeading';

const PaymentPlans = ({ project }) => {
	return (
		<div className="payment-plans">
			<SectionHeading tag="Price" heading="Our payment plans" />

			<div className="card-wrapper">
				<PaymentCard text="Fully Finished" price={project.finishedPrice} />
				<div style={{ width: '60px', height: '60px' }} />
				<PaymentCard text="Semi Finished" price={project.unFinishedPrice} />
			</div>
		</div>
	);
};

export default PaymentPlans;
