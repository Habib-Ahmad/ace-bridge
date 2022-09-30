import { MenuItem, TextField } from '@mui/material';

const ProjectDetails = ({ touched, errors, values, handleChange }) => {
	return (
		<>
			<h2>Project Details</h2>

			<div className="row">
				<TextField
					label="Title"
					name="title"
					fullWidth
					helperText={touched.title ? errors.title : ''}
					error={touched.title && Boolean(errors.title)}
					value={values.title}
					onChange={handleChange}
				/>

				<div className="space" />

				<TextField
					label="Category"
					name="category"
					fullWidth
					helperText={touched.category ? errors.category : ''}
					error={touched.category && Boolean(errors.category)}
					value={values.category}
					onChange={handleChange}
				/>

				<div className="space" />

				<TextField
					label="Status"
					name="status"
					fullWidth
					select
					helperText={touched.status ? errors.status : ''}
					error={touched.status && Boolean(errors.status)}
					value={values.status}
					onChange={handleChange}
				>
					<MenuItem key={1} value="complete">
						Complete
					</MenuItem>
					<MenuItem key={2} value="incomplete">
						Incomplete
					</MenuItem>
				</TextField>
			</div>
			<div className="row">
				<TextField
					label="Description"
					name="description"
					fullWidth
					helperText={touched.description ? errors.description : ''}
					error={touched.description && Boolean(errors.description)}
					value={values.description}
					onChange={handleChange}
				/>
			</div>

			<div className="row">
				<TextField
					label="Completion Year"
					name="completionYear"
					type="number"
					fullWidth
					helperText={touched.completionYear ? errors.completionYear : ''}
					error={touched.completionYear && Boolean(errors.completionYear)}
					value={values.completionYear}
					onChange={handleChange}
				/>

				<div className="space" />

				<TextField
					label="Living Rooms"
					name="livingRooms"
					type="number"
					fullWidth
					helperText={touched.livingRooms ? errors.livingRooms : ''}
					error={touched.livingRooms && Boolean(errors.livingRooms)}
					value={values.livingRooms}
					onChange={handleChange}
				/>

				<div className="space" />

				<TextField
					label="Bed Rooms"
					name="bedRooms"
					fullWidth
					helperText={touched.bedRooms ? errors.bedRooms : ''}
					error={touched.bedRooms && Boolean(errors.bedRooms)}
					value={values.bedRooms}
					onChange={handleChange}
				/>
			</div>

			<div className="row ctrl-width">
				<TextField
					label="Type"
					name="type"
					fullWidth
					helperText={touched.type ? errors.type : ''}
					error={touched.type && Boolean(errors.type)}
					value={values.type}
					onChange={handleChange}
				/>

				<div className="space" />

				<TextField
					label="Location"
					name="location"
					fullWidth
					helperText={touched.location ? errors.location : ''}
					error={touched.location && Boolean(errors.location)}
					value={values.location}
					onChange={handleChange}
				/>
			</div>
		</>
	);
};

export default ProjectDetails;
