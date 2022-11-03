import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/leaflet.css';
import ContactForm from '../components/ContactForm';
import address from '../assets/address.svg';
import emailIcon from '../assets/email.svg';
import phone from '../assets/phone.svg';

const ContactUs = () => {
	const location = 'https://maps.app.goo.gl/tNckdmHtqot7jT197';
	const email = 'info@acebridge.ng';
	const mobile = '0909 943 4444';

	return (
		<div className="contact-us">
			<div className="wrapper">
				<div className="form-wrapper" data-aos="fade-up" data-aos-delay="200">
					<h3>Get in Touch</h3>
					<p>
						In case of any inquiries or questions you can fill out the form
						below and one of our representatives will contact you as sson as
						possible.
					</p>
					<ContactForm />
				</div>

				<div className="details" data-aos="fade-up" data-aos-delay="300">
					<h3>Lets get your dream house</h3>
					<p>
						Give us a call or drop by anytime, we endevour to answer all
						enquieries witin 24 hours on Business Days, we will be happy to
						answer your questions
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

			<div id="map">
				<MapContainer
					center={[9.0787247, 7.4817249]}
					zoom={13}
					scrollWheelZoom={false}
					style={{ height: '100%', width: '100%' }}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker
						position={[9.0787247, 7.4817249]}
						icon={
							new Icon({
								iconUrl: markerIconPng,
								iconSize: [25, 41],
								iconAnchor: [12, 41],
							})
						}
					>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</MapContainer>
			</div>
		</div>
	);
};

export default ContactUs;
