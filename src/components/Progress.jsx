import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import SectionHeading from './SectionHeading';
import TabPanel from './TabPanel';

const Progress = ({ project }) => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
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
		</div>
	);
};

export default Progress;
