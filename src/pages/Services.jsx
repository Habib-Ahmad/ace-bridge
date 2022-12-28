import React from 'react';

const Services = () => {
	const services = [
		{
			bg: '#0650A0',
			title: 'Building Construction Services',
			points: ['Residential building', 'Office complex', 'Public buildings'],
		},
		{
			bg: '#00A84D',
			title: 'Real Estate & Property Development',
			points: ['Design, Planning and Construction', 'Layout development'],
		},
		{
			bg: '#109CF1',
			title: 'Facility Management',
			points: [
				'Rehabilitation and renovation of building structures',
				'Facility repairs and Maintenance',
			],
		},
		{
			bg: '#9747FF',
			title: 'Water Engineering',
			points: [
				'Geological/Geophysical investigation',
				'Borehole drilling',
				'Water stations, swimming pools and dams',
			],
		},
		{
			bg: '#FF4242',
			title: 'Civil Engineering Work',
			points: [
				'Multi-storey building',
				'Structural engineering work',
				'Drainages and culverts (Flood and surface water control)',
			],
		},
		{
			bg: '#757095',
			title: 'Structural Engineering Work',
			points: [
				'Hydraulic structures',
				'Foundation for special purposes',
				'Industrial, Factory buildings & Warehouse',
				'Agricultural storage facilities (e.g silos)',
			],
		},
	];

	return (
		<div className="services">
			<h1>Services</h1>

			<div className="container">
				<p className="info">
					Ace Bridge Ltd is passionate and focused to deliver various
					Building/Civil engineering related projects across every state in
					Nigeria. We are also poised to execute such project for Government
					establishment, Local Government, Corporate organization and Private
					individuals. The firm's professional scope of services in construction
					related works are as follows:
				</p>

				<div className="grid">
					{services.map((service) => (
						<div className="item" key={service.title}>
							<Checkmark bg={service.bg} />

							<div className="details">
								<h2>{service.title}</h2>

								<ul>
									{service.points.map((point) => (
										<li key={point}>{point}</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;

const Checkmark = ({ bg }) => {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 44 42"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M43.0832 21L38.4065 15.6717L39.0582 8.61833L32.139 7.04666L28.5165 0.95166L21.9998 3.74999L15.4832 0.95166L11.8607 7.04666L4.9415 8.59916L5.59317 15.6525L0.916504 21L5.59317 26.3283L4.9415 33.4008L11.8607 34.9725L15.4832 41.0675L21.9998 38.25L28.5165 41.0483L32.139 34.9533L39.0582 33.3817L38.4065 26.3283L43.0832 21ZM18.1665 30.5833L10.4998 22.9167L13.2023 20.2142L18.1665 25.1592L30.7973 12.5283L33.4998 15.25L18.1665 30.5833Z"
				fill={bg}
			/>
		</svg>
	);
};
