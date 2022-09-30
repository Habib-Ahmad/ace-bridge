import { useState, useEffect, forwardRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import uuid from 'react-uuid';
import {
	Button,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
} from '@mui/material';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Formik } from 'formik';
import ProjectDetails from '../../components/AddProject/ProjectDetails';
import PaymentPlans from '../../components/AddProject/PaymentPlans';
import Thumbnail from '../../components/AddProject/Thumbnail';
import CoverImage from '../../components/AddProject/CoverImage';
import FloorPlan from '../../components/AddProject/FloorPlan';
import Availability from '../../components/AddProject/Availability';
import { uploadImage } from '../../components/AddProject/functions';
import ProgressImages from '../../components/AddProject/ProgressImages';
import validationSchema from '../../components/AddProject/validationSchema';
import back from '../../assets/back-btn.svg';

const AddProject = () => {
	const [state, setState] = useState({
		id: '',
		title: '',
		category: 'Premium Residence',
		location: '',
		completionYear: '',
		description: '',
		livingRooms: '',
		bedRooms: '',
		status: '',
		type: '',
		finishedPrice: '',
		unFinishedPrice: '',
		totalUnits: '',
		availableUnits: '',
	});
	const [errorMsg, setErrorMsg] = useState('');
	const [delayText, setDelayText] = useState('');
	const [open, setOpen] = useState(false);

	const [thumbnailPreview, setThumbnailPreview] = useState();
	const [coverImagePreview, setCoverImagePreview] = useState();
	const [floorPlanPreview, setFloorPlanPreview] = useState([]);
	const [progImagesPreview, setProgImagesPreview] = useState([]);

	const [thumbnailFile, setThumbnailFile] = useState();
	const [coverImageFile, setcoverImageFile] = useState();
	const [floorPlanFile, setFloorPlanFile] = useState([]);
	const [progImagesFile, setProgImagesFile] = useState([]);

	const navigate = useNavigate();
	const location = useLocation().state;

	useEffect(() => {
		setState((prev) => {
			if (location) {
				return location;
			}
			return prev;
		});
		setFloorPlanPreview((prev) => {
			if (location?.floorPlan) {
				return location?.floorPlan;
			}
			return prev;
		});
		setFloorPlanFile((prev) => {
			if (location?.floorPlan) {
				return location?.floorPlan;
			}
			return prev;
		});
		setProgImagesPreview((prev) => {
			if (location?.progressImages) {
				return location?.progressImages;
			}
			return prev;
		});
		setProgImagesFile((prev) => {
			if (location?.progressImages) {
				return location?.progressImages;
			}
			return prev;
		});
	}, [location]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDelete = async () => {
		await deleteDoc(doc(db, `projects/${state.id}`));
		navigate('/admin/projects');
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

		setDelayText(
			'Upload may take some time depending on number and quality of images'
		);

		if (!values.id) {
			values.id = uuid();
		}

		if (thumbnailFile) {
			values.thumbnail = await uploadImage(thumbnailFile, 'thumbnail');
		}

		if (coverImageFile) {
			values.coverImage = await uploadImage(coverImageFile, 'cover');
		}

		values.floorPlan = await Promise.all(
			[...floorPlanFile].map(async (img) => {
				if (typeof img !== 'string') {
					return await uploadImage(img, 'floor-plan');
				}
				return img;
			})
		);

		values.progressImages = await Promise.all(
			[...progImagesFile].map(async (img) => {
				if (typeof img !== 'string') {
					return await uploadImage(img, 'progress-images');
				}
				return img;
			})
		);

		try {
			await setDoc(doc(db, `projects/${values.id}`), values);
			setDelayText('');
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
				validationSchema={validationSchema}
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
					<form onSubmit={handleSubmit} data-aos="fade-up">
						<div className="header">
							<div className="heading-wrapper">
								<div onClick={() => navigate(-1)}>
									<img src={back} alt="" />
								</div>
								<h1>{state.id ? 'Edit' : 'Add'} Project</h1>
							</div>

							{state.id && (
								<div>
									<Button variant="contained" onClick={handleClickOpen}>
										Delete
									</Button>
									<Dialog
										open={open}
										TransitionComponent={Transition}
										keepMounted
										onClose={handleClose}
										aria-describedby="alert-dialog-slide-description"
									>
										<DialogTitle>{'Confirm'}</DialogTitle>
										<DialogContent>
											<DialogContentText id="alert-dialog-slide-description">
												Are you sure you want to delete this project?
											</DialogContentText>
										</DialogContent>
										<DialogActions>
											<Button sx={{ color: '#0650a0' }} onClick={handleClose}>
												Cancel
											</Button>
											<Button sx={{ color: '#0650a0' }} onClick={handleDelete}>
												Delete
											</Button>
										</DialogActions>
									</Dialog>
								</div>
							)}
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
							setPreview={setFloorPlanPreview}
							setFile={setFloorPlanFile}
							preview={floorPlanPreview}
						/>

						<ProgressImages
							setPreview={setProgImagesPreview}
							setFile={setProgImagesFile}
							preview={progImagesPreview}
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
						{delayText && <p className="delay">{delayText}</p>}
						{errorMsg && <p className="error">{errorMsg}</p>}
					</form>
				)}
			</Formik>
		</div>
	);
};

export default AddProject;

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
