import { Button, CircularProgress, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
	const handleSubmit = async (values) => {
		console.log(values);
		await new Promise((resolve) => setTimeout(resolve, 2000));
	};

	return (
		<div className="contact-form">
			<Formik
				initialValues={{
					name: '',
					email: '',
					message: '',
				}}
				validationSchema={Yup.object().shape({
					name: Yup.string().required('This field is required'),
					email: Yup.string()
						.trim()
						.required('This field is required')
						.email('E-mail is not valid'),
					message: Yup.string().required('This field is required'),
				})}
				onSubmit={handleSubmit}
			>
				{({
					handleSubmit,
					handleChange,
					values,
					touched,
					errors,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit} noValidate>
						<div className="row">
							<TextField
								label="Name"
								name="name"
								size="small"
								fullWidth
								helperText={touched.name ? errors.name : ''}
								error={touched.name && Boolean(errors.name)}
								value={values.name}
								onChange={handleChange}
							/>
						</div>

						<div className="row">
							<TextField
								label="E-mail"
								name="email"
								size="small"
								fullWidth
								helperText={touched.email ? errors.email : ''}
								error={touched.email && Boolean(errors.email)}
								value={values.email}
								onChange={handleChange}
							/>
						</div>

						<TextField
							label="Message"
							name="message"
							size="medium"
							multiline
							minRows={4}
							fullWidth
							helperText={touched.message ? errors.message : ''}
							error={touched.message && Boolean(errors.message)}
							value={values.message}
							onChange={handleChange}
						/>

						<Button
							variant="contained"
							type="submit"
							size="large"
							sx={{
								marginTop: '20px',
								fontWeight: '400',
							}}
						>
							{isSubmitting ? (
								<CircularProgress size={25} sx={{ color: 'white' }} />
							) : (
								'Submit'
							)}
						</Button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default ContactForm;
