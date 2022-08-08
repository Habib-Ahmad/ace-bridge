import ContactForm from '../components/ContactForm';
import DoublePhoto from '../components/DoublePhoto';

const ContactUs = () => {
	return (
		<div className="contact-us content-wrapper">
			<div className="about-us">
				<div className="text-wrapper">
					<h1>Contact Us</h1>
					<p style={{ marginBottom: '10px' }}>
						In case of any inquiries or questions you can fill out the form
						below and one of our representatives will contact you soon.
					</p>
					<ContactForm />
				</div>

				<DoublePhoto />
			</div>
		</div>
	);
};

export default ContactUs;
