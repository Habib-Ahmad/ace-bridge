import { TextField } from '@mui/material';

const Availability = ({ touched, errors, values, handleChange }) => {
	return (
		<>
			<h2>Availability</h2>
			<div className="row">
				<TextField
					label="Total Units"
					name="totalUnits"
					type="number"
					fullWidth
					helperText={touched.totalUnits ? errors.totalUnits : ''}
					error={touched.totalUnits && Boolean(errors.totalUnits)}
					value={values.totalUnits}
					onChange={handleChange}
				/>

				<div className="space" />

				<TextField
					label="Available Units"
					name="availableUnits"
					type="number"
					fullWidth
					helperText={touched.availableUnits ? errors.availableUnits : ''}
					error={touched.availableUnits && Boolean(errors.availableUnits)}
					value={values.availableUnits}
					onChange={handleChange}
				/>
			</div>
		</>
	);
};

export default Availability;
