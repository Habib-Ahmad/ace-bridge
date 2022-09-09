import cornerBorder from '../assets/corner-border.svg';
import SectionHeading from './SectionHeading';

const About = () => {
	return (
		<div id="about" className="about">
			<SectionHeading tag="About us" heading="Our company" />
			<div className="content">
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
						src="https://images.adsttc.com/media/images/5b96/a01b/f197/ccb0/1700/004d/newsletter/-_Featured_Image.jpg?1536598038"
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
