import { TextField } from '@mui/material';

const PaymentPlans = ({ touched, errors, values, handleChange }) => {
	return (
		<>
			<h2>Payment Plans</h2>

			<div className="row">
				<TextField
					label="Fully Finished Price"
					name="finishedPrice"
					fullWidth
					helperText={touched.finishedPrice ? errors.finishedPrice : ''}
					error={touched.finishedPrice && Boolean(errors.finishedPrice)}
					value={values.finishedPrice}
					onChange={handleChange}
				/>

				<div className="space" />

				<TextField
					label="Semi Finished Price"
					name="unFinishedPrice"
					fullWidth
					helperText={touched.unFinishedPrice ? errors.unFinishedPrice : ''}
					error={touched.unFinishedPrice && Boolean(errors.unFinishedPrice)}
					value={values.unFinishedPrice}
					onChange={handleChange}
				/>
			</div>
		</>
	);
};

export default PaymentPlans;
