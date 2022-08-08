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
					firstName: '',
					lastName: '',
					email: '',
					phone: '',
					message: '',
				}}
				validationSchema={Yup.object().shape({
					firstName: Yup.string().required('This field is required'),
					lastName: Yup.string().required('This field is required'),
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
								label="First name"
								name="firstName"
								size="small"
								fullWidth
								helperText={touched.firstName ? errors.firstName : ''}
								error={touched.firstName && Boolean(errors.firstName)}
								value={values.firstName}
								onChange={handleChange}
							/>
							<div className="space" />
							<TextField
								label="Last Name"
								name="lastName"
								size="small"
								fullWidth
								helperText={touched.lastName ? errors.lastName : ''}
								error={touched.lastName && Boolean(errors.lastName)}
								value={values.lastName}
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
							<div className="space" />
							<TextField
								label="Phone Number"
								name="phone"
								size="small"
								helperText={errors.email ? ' ' : ''}
								fullWidth
								value={values.phone}
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
								display: 'block',
								margin: '20px 0 0 auto',
								width: '100px',
								height: '40px',
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
