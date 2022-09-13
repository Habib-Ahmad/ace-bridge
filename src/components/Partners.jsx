import polaris from '../assets/partners/polaris.svg';
import braverock from '../assets/partners/braverock.png';
import technique from '../assets/partners/technique-urban.png';
import switchbox from '../assets/partners/switchbox.png';
import algorizmi from '../assets/partners/algorizmi.png';
import SectionHeading from './SectionHeading';

const Partners = () => {
	return (
		<div className="partners">
			<SectionHeading tag="Partners" heading="Our Partners" />

			<div className="logo-wrapper" data-aos="fade">
				<img src={polaris} alt="polaris" />
				<img src={braverock} alt="braverock" />
				<img src={algorizmi} alt="algorizmi" />
				<img src={technique} alt="technique urban" />
				<img src={switchbox} alt="switchbox" />
				<img src={polaris} alt="polaris" />
				<img src={braverock} alt="braverock" />
				<img src={algorizmi} alt="algorizmi" />
				<img src={technique} alt="technique urban" />
				<img src={switchbox} alt="switchbox" />
			</div>
		</div>
	);
};

export default Partners;
