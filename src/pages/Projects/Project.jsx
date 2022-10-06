import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import Navbar from '../../components/Navbar';
import Specifications from '../../components/Specifications';
import Availablility from '../../components/Availablility';
import Progress from '../../components/Progress';
import PaymentPlans from '../../components/PaymentPlans';
import Facilities from '../../components/Facilities';
import ProjectHeader from '../../components/ProjectHeader';
import Slider from '../../components/Slider';

const Project = () => {
	const [project, setProject] = useState({
		title: '',
		category: '',
		type: '',
		location: '',
		completionYear: '',
		description: '',
		livingRooms: '',
		bedRooms: '',
		coverImage: '',
		status: '',
		finishedPrice: '',
		unFinishedPrice: '',
		totalUnits: '',
		availableUnits: '',
		floorPlan: [],
		progressImages: [],
	});

	const location = useLocation();

	useEffect(() => {
		setProject((prev) => {
			if (location.state) {
				return location.state;
			}
			return prev;
		});
	}, [location.state]);

	return (
		<div className="project">
			<Navbar transparent />

			<ProjectHeader project={project} />

			<Specifications project={project} />

			<Slider project={project} />

			<div className="content-wrapper">
				<PaymentPlans project={project} />

				<Facilities />

				<Availablility project={project} />

				{(!!project.floorPlan.length || !!project.progressImages.length) && (
					<Progress project={project} />
				)}
			</div>
		</div>
	);
};

export default Project;
