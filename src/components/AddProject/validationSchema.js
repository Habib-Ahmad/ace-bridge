import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	title: Yup.string().trim().required('This field is required'),
	category: Yup.string().trim().required('This field is required'),
	type: Yup.string().trim().required('This field is required'),
	status: Yup.string().trim().required('This field is required'),
	description: Yup.string().trim().required('This field is required'),
	completionYear: Yup.number().required('This field is required'),
	livingRooms: Yup.number().required('This field is required'),
	bedRooms: Yup.string().required('This field is required'),
	location: Yup.string().trim().required('This field is required'),
	finishedPrice: Yup.string().required('This field is required'),
	unFinishedPrice: Yup.string().required('This field is required'),
	totalUnits: Yup.number().required('This field is required'),
	availableUnits: Yup.number().required('This field is required'),
});

export default validationSchema;
