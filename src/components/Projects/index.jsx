import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import { ReactPhotoCollage } from 'react-photo-collage';
import SectionHeader from '../SectionHeader';

const Projects = () => {
	const navigate = useNavigate();

	const setting = {
		width: '80vw',
		height: ['20vh', '20vh', '20vh'],
		layout: [1, 3, 2],
		photos: [
			{
				source:
					'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/torquay-exterior-luxury-house-for-sale-1597322103.jpg',
			},
			{
				source:
					'https://images.privateproperty.com.ng/uploaded/6c/6e/2e/6c6e2e73-d609-42f3-abec-1d69d5057c98.jpg',
			},
			{
				source:
					'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCW8TpwA39966ATvmOBQxp7fdcN2Sxbvhmn4DOyOoG58uU07bC0Oun-tu6IvECHrGpgE&usqp=CAU',
			},
			{
				source:
					'https://www.thinkmint.ng/reallifemagazine/wp-content/uploads/2021/03/b.jpg',
			},
			{
				source:
					'https://images.nigeriapropertycentre.com/properties/images/921023/0607b56747b797-4-bed-terrace-apartments-with-1-bq-each-terraced-duplexes-for-sale-lekki-phase-1-lekki-lagos.jpeg',
			},
			{
				source: 'https://carrillionng.com.ng/wp-content/uploads/2018/09/E.jpg',
			},
		],
		showNumOfRemainingPhotos: false,
	};

	return (
		<div id="projects" className="projects">
			<SectionHeader title="Projects completed" />

			<div className="collage-wrapper">
				<ReactPhotoCollage {...setting} />
			</div>

			<div className="button-wrapper">
				<Button
					variant="outlined"
					size="large"
					onClick={() => navigate('/properties')}
				>
					View Projects
				</Button>
			</div>
		</div>
	);
};

export default Projects;
