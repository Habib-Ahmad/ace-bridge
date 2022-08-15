import { Search } from '@mui/icons-material';
import {
	FormControl,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';

const Filters = ({
	filters: { listing, location, type, key },
	handleChange,
	displaySearch,
}) => {
	return (
		<div className={`filters ${displaySearch ? 'display' : ''}`}>
			{typeof listing === 'string' && (
				<FormControl fullWidth size="small">
					<InputLabel>Listing</InputLabel>
					<Select
						label="Listing"
						name="listing"
						value={listing}
						onChange={handleChange}
					>
						<MenuItem value="sale">For sale</MenuItem>
						<MenuItem value="rent">For rent</MenuItem>
					</Select>
				</FormControl>
			)}

			{typeof location === 'string' && (
				<FormControl fullWidth size="small">
					<InputLabel>Location</InputLabel>
					<Select
						label="Location"
						name="location"
						value={location}
						onChange={handleChange}
					>
						<MenuItem value="asokoro">Asokoro</MenuItem>
					</Select>
				</FormControl>
			)}

			{typeof type === 'string' && (
				<FormControl fullWidth size="small">
					<InputLabel>Project type</InputLabel>
					<Select
						label="Project type"
						name="type"
						value={type}
						onChange={handleChange}
					>
						<MenuItem value="office">Office space</MenuItem>
						<MenuItem value="residential">Residential</MenuItem>
					</Select>
				</FormControl>
			)}

			{typeof key === 'string' && (
				<TextField
					variant="outlined"
					size="small"
					name="key"
					fullWidth
					label="Search"
					value={key}
					onChange={handleChange}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Search />
							</InputAdornment>
						),
					}}
				/>
			)}
		</div>
	);
};

export default Filters;
