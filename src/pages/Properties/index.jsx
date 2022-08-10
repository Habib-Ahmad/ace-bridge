import { useState, useEffect, useMemo } from 'react';
import { Button } from '@mui/material';
import { GetFilteredData } from '../../functions';
import PropertyCard from '../../components/PropertyCard';
import Filters from '../../components/Filters';
import Pagination from '../../components/Pagination';

const PAGE_RANGE = 5;
const CARDS_PER_PAGE = 12;

const Properties = () => {
	const [propertyList, setPropertyList] = useState([]);
	const [page, setPage] = useState(1);
	const [displaySearch, setDisplaySearch] = useState(false);
	const [minPageLimit, setMinPageLimit] = useState(1);
	const [maxPageLimit, setMaxPageLimit] = useState(PAGE_RANGE);
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

	const properties = useMemo(
		() => GetFilteredData(filters, page, propertyList),
		[filters, page, propertyList]
	);

	const numOfPages = Math.ceil(propertyList.length / CARDS_PER_PAGE);
	const pageButtons = new Array(numOfPages)
		.fill('')
		.map((item, index) => index + 1);

	return (
		<div className="properties">
			<h1>Properties </h1>

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

export default Properties;

const data = new Array(70).fill('').map((card, index) => {
	const num = Math.floor(Math.random() * 10);
	return {
		id: Math.floor(Math.random() * 10000),
		listing: num > 5 ? 'rent' : 'sale',
		img: 'https://houseplanng.com/wp-content/uploads/wp-realestate-uploads/_property_gallery/2021/02/4-bedroom-bungalow-hp1-1-1024x652.jpg',
		type: num % 2 === 0 ? 'Residential' : 'Office space',
		title: 'Alison building apartment',
		price: String(Math.floor(Math.random() * 100000000)),
		amenities: [
			'24 Hours Electricity',
			'Backp Generator',
			'Bore Hole',
			'CCTV Cameras',
			'Intercom',
		],
		description:
			'This magnificently designed tower offers views that redefine international luxury standards while challenging the underlying conventions of residential high-rise architecture. Located in the exciting high-demand upper side of Westlands, Nairobi a walking distance of numerous social amenities such as 5-star hotels, shopping malls, recreational centers, schools, and many more, makes Elite Residence the ideal home for young families. This Urban inspired layout is truly remarkable inside and out. An elegant modern concept featuring unparalleled craftsmanship and exceptional amenities. Elite towers feature a synthesis of artificial and natural elements all together creating a high quality of life and a sense of belonging and pride among residents. The balcony and custom curtain windows provide plenty of natural lighting expansive and gorgeous views of the city skyline from the core of your home.',
		location: 'Asokoro, Abuja',
		bathrooms: '3',
		bedrooms: '3',
		parking: '3',
	};
});
