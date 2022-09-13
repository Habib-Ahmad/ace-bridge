import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
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
import back from '../../assets/back-btn.svg';

const AddProject = () => {
	const [state, setState] = useState({
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
	});
	const [errorMsg, setErrorMsg] = useState('');

	const [thumbnailPreview, setThumbnailPreview] = useState();
	const [coverImagePreview, setCoverImagePreview] = useState();
	const [floorPlanPreview, setFloorPlanPreview] = useState([]);

	const [thumbnailFile, setThumbnailFile] = useState();
	const [coverImageFile, setcoverImageFile] = useState();
	const [floorPlanFile, setFloorPlanFile] = useState([]);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		setState((prev) => {
			if (location.state) {
				return location.state;
			}
			return prev;
		});
	}, [location.state]);

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
		if (
			(!thumbnailFile && !values.thumbnail) ||
			(!coverImageFile && !values.coverImage)
		) {
			setErrorMsg('You have to upload a thumbnail and cover image');
			return;
		}

		if (!values.id) {
			values.id = uuid();
		}

		if (thumbnailFile) {
			values.thumbnail = await uploadImage(thumbnailFile, 'thumbnail');
		}

		if (coverImageFile) {
			values.coverImage = await uploadImage(coverImageFile, 'thumbnail');
		}

		try {
			await setDoc(doc(db, `projects/${values.id}`), values);
			navigate('/admin/projects');
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className="add-project">
			<Formik
				initialValues={state}
				enableReinitialize={true}
				validationSchema={Yup.object().shape({
					title: Yup.string().trim().required('This field is required'),
					category: Yup.string().trim().required('This field is required'),
					type: Yup.string().trim().required('This field is required'),
					status: Yup.string().trim().required('This field is required'),
					description: Yup.string().trim().required('This field is required'),
					completionYear: Yup.number().required('This field is required'),
					livingRooms: Yup.number().required('This field is required'),
					bedRooms: Yup.number().required('This field is required'),
					location: Yup.string().trim().required('This field is required'),
					finishedPrice: Yup.number().required('This field is required'),
					unFinishedPrice: Yup.number().required('This field is required'),
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
						<div className="heading-wrapper">
							<div onClick={() => navigate(-1)}>
								<img src={back} alt="" />
							</div>
							<h1>Add Project</h1>
						</div>

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
							preview={thumbnailPreview}
							setFile={setThumbnailFile}
							value={state.thumbnail}
						/>

						<CoverImage
							setPreview={setCoverImagePreview}
							setFile={setcoverImageFile}
							preview={coverImagePreview}
							value={state.coverImage}
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
								'Upload'
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
