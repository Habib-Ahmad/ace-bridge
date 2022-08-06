import quote from '../../assets/quote.svg';

const TestimonialCard = ({ text, name }) => {
	return (
		<div className="testimonial-card">
			<img src={quote} alt="testimonial" />
			<p className="text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
				mollitia, molestiae quas vel sint commodi repudiandae consequuntur
				voluptatum laborum numquam blanditiis harum quisquam eius sed odit
				fugiat iusto fuga praesentium optio.
			</p>
			<p className="name">- John Doe</p>
		</div>
	);
};

export default TestimonialCard;
