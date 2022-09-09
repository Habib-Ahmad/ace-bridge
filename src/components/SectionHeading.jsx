const SectionHeading = ({ tag, heading }) => {
	return (
		<div style={{ marginBottom: '40px' }} className="section-heading">
			<h6>{tag}</h6>
			<h2>{heading}</h2>
		</div>
	);
};

export default SectionHeading;
