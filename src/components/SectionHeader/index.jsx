import arrow from '../../assets/arrow.svg';

const SectionHeader = ({ title }) => {
	return (
		<div className="section-header">
			<div>
				<h6>Acebridge</h6>
				<h2>{title}</h2>
			</div>
			<img src={arrow} alt="" />
		</div>
	);
};

export default SectionHeader;
