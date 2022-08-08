import { useState, useEffect, useMemo } from 'react';
import {
	Button,
	FormControl,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import { GetFilteredData } from '../functions';
import PropertyCard from '../components/PropertyCard';

const PAGE_LIMIT = 5;

const Properties = () => {
	const [propertyList, setPropertyList] = useState([]);
	const [page, setPage] = useState(1);
	const [displaySearch, setDisplaySearch] = useState(false);
	const [minPageLimit, setMinPageLimit] = useState(1);
	const [maxPageLimit, setMaxPageLimit] = useState(PAGE_LIMIT);
	const [filters, setFilters] = useState({
		listing: '',
		location: '',
		type: '',
		key: '',
	});

	useEffect(() => {
		setPropertyList(data);
	}, []);

	const handleChange = (e) => {
		setFilters({
			...filters,
			[e.target.name]: e.target.value,
		});
	};

	const handleLoadLess = () => {
		setPage(minPageLimit - 1);
		setMinPageLimit((prev) => prev - PAGE_LIMIT);
		setMaxPageLimit((prev) => prev - PAGE_LIMIT);
	};

	const handleLoadMore = () => {
		setPage(maxPageLimit + 1);
		setMinPageLimit((prev) => prev + PAGE_LIMIT);
		setMaxPageLimit((prev) => prev + PAGE_LIMIT);
	};

	const handlePrev = () => {
		setPage((prev) => {
			const newPage = prev - 1;
			if (newPage >= minPageLimit) return newPage;
			handleLoadLess();
			return minPageLimit - 1;
		});
	};

	const handleNext = () => {
		setPage((prev) => {
			const newPage = prev + 1;
			if (newPage <= maxPageLimit) return newPage;
			handleLoadMore();
			return maxPageLimit + 1;
		});
	};

	const properties = useMemo(
		() => GetFilteredData(filters, page, propertyList),
		[filters, page, propertyList]
	);

	const numOfPages = Math.ceil(propertyList.length / 12);
	const pageButtons = new Array(numOfPages)
		.fill('')
		.map((item, index) => index + 1);

	return (
		<div className="properties content-wrapper">
			<h1>Properties </h1>

			<Button
				className="advanced-search"
				onClick={() => setDisplaySearch((prevState) => !prevState)}
				variant="text"
			>
				Advanced search
			</Button>
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

			<div className="list">
				{properties.map((property) => (
					<PropertyCard key={property.id} {...property} />
				))}
			</div>

			<div className="pagination">
				<Button disabled={page < 2} variant="text" onClick={handlePrev}>
					Prev
				</Button>
				{minPageLimit > PAGE_LIMIT && (
					<Button className="dots" variant="text" onClick={handleLoadLess}>
						&hellip;
					</Button>
				)}

				{pageButtons.slice(minPageLimit - 1, maxPageLimit).map((pg) => (
					<Button
						className={`btn ${pg === page ? 'current' : ''}`}
						key={pg}
						variant="text"
						onClick={() => setPage(pg)}
					>
						{pg}
					</Button>
				))}

				{numOfPages > maxPageLimit && (
					<Button className="dots" variant="text" onClick={handleLoadMore}>
						&hellip;
					</Button>
				)}

				<Button
					disabled={page === pageButtons[pageButtons.length - 1]}
					variant="text"
					onClick={handleNext}
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default Properties;

const data = new Array(120).fill('').map((card, index) => {
	const num = Math.floor(Math.random() * 10);
	return {
		id: index,
		listing: num > 5 ? 'rent' : 'sale',
		img: 'https://houseplanng.com/wp-content/uploads/wp-realestate-uploads/_property_gallery/2021/02/4-bedroom-bungalow-hp1-1-1024x652.jpg',
		type: num % 2 === 0 ? 'Residential' : 'Office space',
		title: 'Alison building apartment',
		price: String(Math.floor(Math.random() * 100000000)),
		location: 'Asokoro, Abuja',
		bathrooms: '3',
		bedrooms: '3',
		parking: '3',
	};
});
