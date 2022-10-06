import house from '../assets/house.svg';
import bed from '../assets/bed.svg';
import sofa from '../assets/sofa.svg';
import flag from '../assets/flag.svg';

const Specifications = ({ project }) => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className="specifications">
			<div className="spec-wrapper color1">
				<img src={house} alt="" />
				<div>
					<p className="spec-name">House type</p>
					<div className="spec">{project.type}</div>
				</div>
			</div>
			<div className="spec-wrapper color2">
				<img src={sofa} alt="" />
				<div>
					<p className="spec-name">Living Rooms</p>
					<div className="spec">{project.livingRooms} living room(s)</div>
				</div>
			</div>
			<div className="spec-wrapper color3">
				<img src={bed} alt="" />
				<div>
					<p className="spec-name">Bedrooms</p>
					<div className="spec">{project.bedRooms} bedroom(s)</div>
				</div>
			</div>
			<div className="spec-wrapper color4">
				<img src={flag} alt="" />
				<div>
					<p className="spec-name">
						{project.completionYear > year ? 'To be completed' : 'Completed'}
					</p>
					<div className="spec">{project.completionYear}</div>
				</div>
			</div>
		</div>
	);
};

export default Specifications;
