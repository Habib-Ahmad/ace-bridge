import SectionHeading from './SectionHeading';
import facilities from '../assets/facilities.png';

const Facilities = () => {
	return (
		<div className="facilities">
			<SectionHeading tag="Facilities" heading="Our Facilities" />

			<div className="img-wrapper">
				<img src={facilities} alt="" />
			</div>
		</div>
	);
};

export default Facilities;
