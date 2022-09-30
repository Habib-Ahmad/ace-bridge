import cornerBorder from '../assets/corner-border.svg';
import SectionHeading from './SectionHeading';

const About = () => {
	return (
		<div id="about" className="about">
			<SectionHeading tag="About us" heading="Our company" />
			<div className="content" data-aos="fade-up" data-aos-delay="200">
				<div className="box"></div>
				<p>
					Ace Bridge Ltd is a limited liability Company incorporated under the
					Allied Matters degree of 1990, and an active member of the Real Estate
					Developers Association of Nigeria REDAN, with registration number RC
					1259983 and has since been engaged in providing a spectrum of services
					in construction works and consultancy across various Building and
					Engineering fields with the ability to make a bench mark
				</p>
				<div className="img-wrapper">
					<img
						src="https://res.cloudinary.com/drmksud79/image/upload/v1664532841/acebridge/5_b7mie4.jpg"
						alt=""
						className="img"
					/>
					<div className="overlay"></div>
				</div>
				<img src={cornerBorder} alt="" className="border" />
			</div>
		</div>
	);
};

export default About;
