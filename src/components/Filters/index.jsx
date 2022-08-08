import { Search } from '@mui/icons-material';
import {
	FormControl,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';

const Filters = ({ filters, handleChange, displaySearch }) => {
	return (
		<div className={`filters ${displaySearch ? 'display' : ''}`}>
			<FormControl fullWidth size="small">
				<InputLabel>Listing</InputLabel>
				<Select
					label="Listing"
					name="listing"
					value={filters.listing}
					onChange={handleChange}
				>
					<MenuItem value="sale">For sale</MenuItem>
					<MenuItem value="rent">For rent</MenuItem>
				</Select>
			</FormControl>

			<FormControl fullWidth size="small">
				<InputLabel>Location</InputLabel>
				<Select
					label="Location"
					name="location"
					value={filters.location}
					onChange={handleChange}
				>
					<MenuItem value="asokoro">Asokoro</MenuItem>
				</Select>
			</FormControl>

			<FormControl fullWidth size="small">
				<InputLabel>Property type</InputLabel>
				<Select
					label="Property type"
					name="type"
					value={filters.type}
					onChange={handleChange}
				>
					<MenuItem value="office">Office space</MenuItem>
					<MenuItem value="residential">Residential</MenuItem>
				</Select>
			</FormControl>

			<TextField
				variant="outlined"
				size="small"
				name="key"
				fullWidth
				label="Key word"
				value={filters.key}
				onChange={handleChange}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Search />
						</InputAdornment>
					),
				}}
			/>
		</div>
	);
};

export default Filters;
