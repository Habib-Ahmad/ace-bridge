import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
	return (
		<div className="testimonials">
			<h6>Acebridge</h6>
			<h2>Check what our clients are saying</h2>

			<div className="cards-wrapper">
				{testimonials.map((test) => (
					<TestimonialCard key={test.id} {...test} />
				))}
			</div>
		</div>
	);
};

export default Testimonials;

const testimonials = new Array(10).fill('').map((test, index) => ({
	id: index,
	text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio.',
	name: 'John Doe',
}));
