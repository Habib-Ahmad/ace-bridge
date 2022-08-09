import { useEffect, useMemo, useState } from 'react';
import { Button } from '@mui/material';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import PropertyCard from '../components/PropertyCard';
import { GetFilteredData } from '../functions';

const PAGE_RANGE = 5;
const CARDS_PER_PAGE = 12;

const BuildingMaterials = () => {
	const [propertyList, setPropertyList] = useState([]);
	const [page, setPage] = useState(1);
	const [displaySearch, setDisplaySearch] = useState(false);
	const [minPageLimit, setMinPageLimit] = useState(1);
	const [maxPageLimit, setMaxPageLimit] = useState(PAGE_RANGE);
	const [filters, setFilters] = useState({
		key: '',
	});

	const handleChange = (e) => {
		setFilters((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	useEffect(() => {
		setPropertyList(data);
	}, []);

	const properties = useMemo(
		() => GetFilteredData(filters, page, propertyList),
		[filters, page, propertyList]
	);

	const numOfPages = Math.ceil(propertyList.length / CARDS_PER_PAGE);
	const pageButtons = new Array(numOfPages)
		.fill('')
		.map((item, index) => index + 1);

	return (
		<div className="properties content-wrapper">
			<h1>Building Materials</h1>

			<Button
				className="advanced-search"
				onClick={() => setDisplaySearch((prevState) => !prevState)}
				variant="text"
			>
				Advanced search
			</Button>
			<Filters
				filters={filters}
				handleChange={handleChange}
				displaySearch={displaySearch}
			/>
			<div className="list">
				{properties.map((property) => (
					<PropertyCard key={property.id} {...property} />
				))}
			</div>

			<Pagination
				page={page}
				numOfPages={numOfPages}
				pageButtons={pageButtons}
				minPageLimit={minPageLimit}
				maxPageLimit={maxPageLimit}
				PAGE_RANGE={PAGE_RANGE}
				setPage={setPage}
				setMinPageLimit={setMinPageLimit}
				setMaxPageLimit={setMaxPageLimit}
			/>
		</div>
	);
};

export default BuildingMaterials;

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
