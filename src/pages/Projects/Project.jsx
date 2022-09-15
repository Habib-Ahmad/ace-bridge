import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Button, Tab, Tabs } from '@mui/material';
import Navbar from '../../components/Navbar';
import SectionHeading from '../../components/SectionHeading';
import PaymentCard from '../../components/PaymentCard';
import TabPanel from '../../components/TabPanel';
import facilities from '../../assets/facilities.png';
import house from '../../assets/house.svg';
import bed from '../../assets/bed.svg';
import sofa from '../../assets/sofa.svg';
import flag from '../../assets/flag.svg';

const Project = () => {
	const [value, setValue] = useState(0);
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

	const navigate = useNavigate();
	const location = useLocation();

	const formatter = Intl.NumberFormat('en', { notation: 'compact' });

	const date = new Date();
	const year = date.getFullYear();

	useEffect(() => {
		setProject((prev) => {
			if (location.state) {
				return location.state;
			}
			return prev;
		});
	}, [location.state]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="project">
			<Navbar transparent />

			<header style={{ backgroundImage: `url(${project.coverImage})` }}>
				<div className="heading">
					<p className="type">{project.category}</p>
					<h1>{project.title}</h1>
					<p className="description">{project.description}</p>
				</div>
			</header>

			<div className="specifications">
				<div className="spec-wrapper color1">
					<img src={house} alt="" />
					<div>
						<p className="spec-name">House type</p>
						<div className="spec">{project.type}</div>
					</div>
				</div>
				<div className="spec-wrapper color2">
					<img src={bed} alt="" />
					<div>
						<p className="spec-name">Rooms</p>
						<div className="spec">{project.livingRooms} living rooms</div>
					</div>
				</div>
				<div className="spec-wrapper color3">
					<img src={sofa} alt="" />
					<div>
						<p className="spec-name">Living rooms</p>
						<div className="spec">{project.bedRooms} bedrooms</div>
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

			<img className="second-img" src={project.coverImage} alt="" />

			<div className="content-wrapper">
				<div className="payment-plans">
					<SectionHeading tag="Price" heading="Our payment plans" />

					<div className="card-wrapper">
						<PaymentCard
							text="Fully Finished"
							price={String(formatter.format(project.finishedPrice))}
						/>
						<div style={{ width: '60px', height: '60px' }} />
						<PaymentCard
							text="Semi Finished"
							price={String(formatter.format(project.unFinishedPrice))}
						/>
					</div>
				</div>

				<div className="facilities">
					<SectionHeading tag="Facilities" heading="Our Facilities" />

					<div className="img-wrapper">
						<img src={facilities} alt="" />
					</div>
				</div>

				<div className="progress">
					<SectionHeading tag="Progress" heading="Our Site Progress" />

					<div className="tab-wrapper">
						<Tabs
							value={value}
							onChange={handleChange}
							variant="scrollable"
							scrollButtons="auto"
							textColor="primary"
						>
							<Tab label="Floor Plans" />
							<Tab label="Progress Images" />
							<Tab label="Progress Video" />
							<Tab label="Home Availability" />
						</Tabs>
					</div>

					<TabPanel value={value} index={0}>
						<div className="img-grid">
							{project.floorPlan.map((img, index) => (
								<img key={index} src={img} alt="" />
							))}
						</div>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<div className="img-grid">
							{project.progressImages.map((img, index) => (
								<img key={index} src={img} alt="" />
							))}
						</div>
					</TabPanel>
					<TabPanel value={value} index={2}></TabPanel>
					<TabPanel value={value} index={3}>
						<div className="card-wrapper">
							<div className="availability">
								<span></span>
								<p className="heading">Sold and Available</p>
								<p className="total">Total Units</p>
								<p className="amount">{project.totalUnits}</p>
							</div>
							<div style={{ width: '60px', height: '60px' }} />
							<div className="availability">
								<span></span>
								<p className="heading">Sold and Available</p>
								<p className="total">Total Available Units</p>
								<p className="amount">{project.availableUnits}</p>
								{project.availableUnits > 0 && (
									<Button
										variant="contained"
										onClick={() => navigate('/contact-us')}
									>
										Buy now
									</Button>
								)}
							</div>
						</div>
					</TabPanel>
				</div>
			</div>
		</div>
	);
};

export default Project;
