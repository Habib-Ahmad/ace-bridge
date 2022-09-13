import ContactForm from '../components/ContactForm';
import address from '../assets/address.svg';
import emailIcon from '../assets/email.svg';
import phone from '../assets/phone.svg';

const ContactUs = () => {
	const location = 'https://maps.app.goo.gl/tNckdmHtqot7jT197';
	const email = 'acebridgeltd@gmail.com';
	const mobile = '0909 943 4444';

	return (
		<div className="contact-us">
			<div className="form-wrapper" data-aos="fade-up" data-aos-delay="200">
				<h3>Get in Touch</h3>
				<p>
					In case of any inquiries or questions you can fill out the form below
					and one of our representatives will contact you as sson as possible.
				</p>
				<ContactForm />
			</div>

			<div className="details" data-aos="fade-up" data-aos-delay="300">
				<h3>Lets get your dream house</h3>
				<p>
					Give us a call or drop by anytime, we endevour to answear all
					enquieries witin 24 hours on Business Days, we will be happy to answer
					your questions
				</p>
				<div className="detail">
					<img src={address} alt="" />
					<address>
						<h4>Address</h4>
						<a href={location}>
							Plot 122Y Morija Close off Ademola Adetokunbo Crescent Wuse 2
							Abuja
						</a>
					</address>
				</div>
				<div className="detail">
					<img src={emailIcon} alt="" />
					<div>
						<h4>E-mail</h4>
						<a href={'mailto:' + email}>{email}</a>
					</div>
				</div>
				<div className="detail">
					<img src={phone} alt="" />
					<div>
						<h4>Phone</h4>
						<a href={'tel:' + mobile}>{mobile}</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
