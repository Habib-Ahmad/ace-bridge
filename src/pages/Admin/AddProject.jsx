import { useState } from 'react';
import { useNavigate } from 'react-router';
import uuid from 'react-uuid';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Button, CircularProgress } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ProjectDetails from '../../components/AddProject/ProjectDetails';
import PaymentPlans from '../../components/AddProject/PaymentPlans';
import Thumbnail from '../../components/AddProject/Thumbnail';
import CoverImage from '../../components/AddProject/CoverImage';
import FloorPlan from '../../components/AddProject/FloorPlan';
import Availability from '../../components/AddProject/Availability';
import { uploadImage } from '../../components/AddProject/functions';

const AddProject = () => {
	const [errorMsg, setErrorMsg] = useState('');

	const [thumbnailPreview, setThumbnailPreview] = useState();
	const [coverImagePreview, setCoverImagePreview] = useState();
	const [floorPlanPreview, setFloorPlanPreview] = useState([]);

	const [thumbnailFile, setThumbnailFile] = useState();
	const [coverImageFile, setcoverImageFile] = useState();
	const [floorPlanFile, setFloorPlanFile] = useState([]);

	const navigate = useNavigate();

	const deleteFloorPlan = (index) => {
		const arr = [...floorPlanPreview];
		arr.splice(index, 1);
		setFloorPlanPreview(arr);
		setFloorPlanFile(arr);
	};

	const previewMultipleFiles = (file, setPreviewState) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () =>
			setPreviewState((prev) => [...prev, reader.result]);
	};

	const handleMultiplePreviewUpload = (e) => {
		const files = [...e.target.files];
		files.forEach((file) => {
			previewMultipleFiles(file, setFloorPlanPreview);
			setFloorPlanFile((prev) => [...prev, file]);
		});
	};

	const handleSubmit = async (values) => {
		setErrorMsg('');
		if (!thumbnailFile || !coverImageFile) {
			setErrorMsg('You have to upload a thumbnail and cover image');
			return;
		}

		const id = uuid();
		const thumbnailUrl = await uploadImage(thumbnailFile, 'thumbnail');
		const imageUrl = await uploadImage(coverImageFile, 'cover');

		values.id = id;
		values.thumbnail = thumbnailUrl;
		values.coverImage = imageUrl;

		try {
			await setDoc(doc(db, `projects/${id}`), values);
			navigate('/admin/projects');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="add-project">
			<Formik
				initialValues={{
					title: '',
					category: '',
					location: '',
					completionYear: '',
					description: '',
					livingRooms: '',
					bedRooms: '',
					status: '',
					finishedPrice: '',
					unFinishedPrice: '',
					totalUnits: '',
					availableUnits: '',
				}}
				validationSchema={Yup.object().shape({
					title: Yup.string().trim().required('This field is required'),
					category: Yup.string().trim().required('This field is required'),
					location: Yup.string().trim().required('This field is required'),
					completionYear: Yup.string()
						.trim()
						.required('This field is required'),
					description: Yup.string().trim().required('This field is required'),
					livingRooms: Yup.number().required('This field is required'),
					bedRooms: Yup.number().required('This field is required'),
					status: Yup.string().trim().required('This field is required'),
					finishedPrice: Yup.string().trim().required('This field is required'),
					unFinishedPrice: Yup.string()
						.trim()
						.required('This field is required'),
					totalUnits: Yup.number().required('This field is required'),
					availableUnits: Yup.number().required('This field is required'),
				})}
				onSubmit={(values) => handleSubmit(values)}
			>
				{({
					handleSubmit,
					handleChange,
					values,
					touched,
					errors,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit}>
						<h1>Add Project</h1>

						<ProjectDetails
							touched={touched}
							errors={errors}
							values={values}
							handleChange={handleChange}
						/>

						<PaymentPlans
							touched={touched}
							errors={errors}
							values={values}
							handleChange={handleChange}
						/>

						<Thumbnail
							setPreview={setThumbnailPreview}
							setFile={setThumbnailFile}
							preview={thumbnailPreview}
						/>

						<CoverImage
							setPreview={setCoverImagePreview}
							setFile={setcoverImageFile}
							preview={coverImagePreview}
						/>

						<FloorPlan
							handleMultiplePreviewUpload={handleMultiplePreviewUpload}
							setPreview={setFloorPlanPreview}
							setFile={setFloorPlanFile}
							preview={floorPlanPreview}
							deleteFloorPlan={deleteFloorPlan}
						/>

						<Availability
							touched={touched}
							errors={errors}
							values={values}
							handleChange={handleChange}
						/>

						<Button type="submit" variant="contained" size="large">
							{isSubmitting ? (
								<CircularProgress sx={{ color: 'white' }} />
							) : (
								'Add Project'
							)}
						</Button>
						{errorMsg && <p className="error">{errorMsg}</p>}
					</form>
				)}
			</Formik>
		</div>
	);
};

export default AddProject;
