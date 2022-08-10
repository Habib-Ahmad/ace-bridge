import { useEffect, useMemo, useState } from 'react';
import Filters from '../components/Filters';
import MaterialCard from '../components/MaterialCard';
import { GetFilteredData } from '../functions';

const BuildingMaterials = () => {
	const [propertyList, setPropertyList] = useState([]);
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
		() => GetFilteredData(filters, 1, propertyList),
		[filters, propertyList]
	);

	return (
		<div className="properties">
			<h1>Building Materials</h1>

			<Filters
				filters={filters}
				handleChange={handleChange}
				displaySearch={true}
			/>

			<div className="materials-list">
				{properties.map((material) => (
					<MaterialCard key={material.id} {...material} />
				))}
			</div>
		</div>
	);
};

export default BuildingMaterials;

const data = [
	{
		id: '1',
		img: 'https://nimvo.com/wp-content/uploads/2019/05/Stone-Dust.jpg',
		title: 'Stone dust',
		pricePerUnit: '4000',
		unit: 'bag',
	},
	{
		id: '2',
		img: 'https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2021/07/1625980458926blob.png?fit=711%2C403&ssl=1',
		title: 'Cement',
		pricePerUnit: '6000',
		unit: 'bag',
	},
	{
		id: '3',
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bluemetal_coarse_granite_gravel_texture.jpg/1200px-Bluemetal_coarse_granite_gravel_texture.jpg',
		title: 'Gravel',
		pricePerUnit: '3500',
		unit: 'bag',
	},
	{
		id: '4',
		img: 'https://cdn-media.buildersmart.in/media/blog/bgsand1.jpg',
		title: 'Sand',
		pricePerUnit: '25000',
		unit: 'bag',
	},
];
