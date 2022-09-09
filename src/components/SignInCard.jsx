import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Button, CircularProgress, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import avatar from '../assets/avatar.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const SignInCard = () => {
	const [errorMsg, setErrorMsg] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async ({ email, password }) => {
		setErrorMsg('');

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const token = userCredential.user.accessToken;
				localStorage.setItem('ace-bridge-accessToken', token);
				navigate('projects');
			})
			.catch((error) => {
				if (error.code === 'auth/wrong-password') setErrorMsg('Wrong password');
			});
	};

	return (
		<div className="auth-card">
			<img src={avatar} alt="" />

			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={Yup.object().shape({
					email: Yup.string()
						.trim()
						.required('This field is required')
						.email('E-mail is not valid'),
					password: Yup.string().required('This field is required'),
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
						<TextField
							label="Email"
							name="email"
							fullWidth
							helperText={touched.email ? errors.email : ''}
							error={touched.email && Boolean(errors.email)}
							value={values.email}
							onChange={handleChange}
						/>

						<TextField
							label="Password"
							name="password"
							type="password"
							fullWidth
							helperText={touched.password ? errors.password : ''}
							error={touched.password && Boolean(errors.password)}
							value={values.password}
							onChange={handleChange}
						/>

						<Button variant="text">Forgot password?</Button>

						<Button type="submit" variant="contained" size="large" fullWidth>
							{isSubmitting ? (
								<CircularProgress sx={{ color: 'white' }} />
							) : (
								'Sign in'
							)}
						</Button>
						{errorMsg && <p className="error">{errorMsg}</p>}
					</form>
				)}
			</Formik>
		</div>
	);
};

export default SignInCard;
