import React from 'react';

const Slider = ({ project }) => {
	return (
		<div className="slider">
			<img src={project.coverImage} alt="" />
		</div>
	);
};

export default Slider;
