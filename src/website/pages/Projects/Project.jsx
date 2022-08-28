import { useState } from 'react';
import { Button, Tab, Tabs } from '@mui/material';
import Navbar from '../../components/Navbar';
import SectionHeading from '../../components/SectionHeading';
import PaymentCard from '../../components/PaymentCard';
import LinearProgressWithLabel from '../../components/LinearProgressWithLabel';
import TabPanel from '../../components/TabPanel';
import hero2 from '../../assets/hero2.png';
import hero3 from '../../assets/hero3.png';
import facilities from '../../assets/facilities.png';
import floorPlan from '../../assets/floor-plan.png';
import progress from '../../assets/progress.png';
import house from '../../assets/house.svg';
import bed from '../../assets/bed.svg';
import sofa from '../../assets/sofa.svg';
import flag from '../../assets/flag.svg';

const Project = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className="project">
			<Navbar transparent />

			<header style={{ backgroundImage: `url(${hero2})` }}>
				<div className="heading">
					<p className="type">Premium Residents</p>
					<h1>AceBridge Redsidence - Bolori</h1>
					<p className="description">
						Seven units of luxury finished Five Bedroom fully detached duplexes.
					</p>
				</div>
			</header>

			<div className="specifications">
				<div className="spec-wrapper color1">
					<img src={house} alt="" />
					<div>
						<p className="spec-name">House type</p>
						<div className="spec">Terrace Duplexes</div>
					</div>
				</div>
				<div className="spec-wrapper color2">
					<img src={bed} alt="" />
					<div>
						<p className="spec-name">Rooms</p>
						<div className="spec">5 bedrooms with BQ and all en-suite</div>
					</div>
				</div>
				<div className="spec-wrapper color3">
					<img src={sofa} alt="" />
					<div>
						<p className="spec-name">Living rooms</p>
						<div className="spec">Two living rooms</div>
					</div>
				</div>
				<div className="spec-wrapper color4">
					<img src={flag} alt="" />
					<div>
						<p className="spec-name">To be completed</p>
						<div className="spec">May 2023</div>
					</div>
				</div>
			</div>

			<img className="second-img" src={hero3} alt="" />

			<div className="content-wrapper">
				<div className="payment-plans">
					<SectionHeading tag="Price" heading="Our payment plans" />

					<div className="card-wrapper">
						<PaymentCard text="Fully Finished" price="130" />
						<div style={{ width: '60px', height: '60px' }} />
						<PaymentCard text="Semi Finished" price="100" />
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
							<Tab label="Progress Overview" />
							<Tab label="Home Availability" />
						</Tabs>
					</div>

					<TabPanel value={value} index={0}>
						<div className="img-grid">
							<img src={floorPlan} alt="" />
							<img src={floorPlan} alt="" />
							<img src={floorPlan} alt="" />
							<img src={floorPlan} alt="" />
							<img src={floorPlan} alt="" />
							<img src={floorPlan} alt="" />
						</div>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<div className="img-grid">
							<img src={progress} alt="" />
							<img src={progress} alt="" />
							<img src={progress} alt="" />
							<img src={progress} alt="" />
							<img src={progress} alt="" />
							<img src={progress} alt="" />
						</div>
					</TabPanel>
					<TabPanel value={value} index={2}></TabPanel>
					<TabPanel value={value} index={3}>
						<div className="progress-bars">
							<LinearProgressWithLabel
								variant="determinate"
								value={75}
								color="primary"
							/>
							<LinearProgressWithLabel
								variant="determinate"
								value={65}
								color="secondary"
							/>
							<LinearProgressWithLabel
								variant="determinate"
								value={55}
								color="error"
							/>
						</div>
					</TabPanel>
					<TabPanel value={value} index={4}>
						<div className="card-wrapper">
							<div className="availability">
								<span></span>
								<p className="heading">Sold and Available</p>
								<p className="total">Total Units</p>
								<p className="amount">4</p>
								<Button variant="contained">Selling Fast</Button>
							</div>
							<div style={{ width: '60px', height: '60px' }} />
							<div className="availability">
								<span></span>
								<p className="heading">Sold and Available</p>
								<p className="total">Total Available Units</p>
								<p className="amount">4</p>
								<Button variant="contained">Buy now</Button>
							</div>
						</div>
					</TabPanel>
				</div>
			</div>
		</div>
	);
};

export default Project;
