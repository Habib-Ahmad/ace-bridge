import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import nextArrow from '../assets/next-arrow.svg';
import prevArrow from '../assets/prev-arrow.svg';

const ProjectsCarousel = () => {
	const slider = useRef();

	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		arrows: true,
		lazyLoading: true,
		nextArrow: <NextArrow slider={slider} />,
		prevArrow: <PrevArrow slider={slider} />,
		className: 'custom-styles',
		responsive: [
			{
				breakpoint: 1900,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 1500,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 900,
				settings: {
					speed: 200,
					swipeToSlide: true,
					arrows: false,
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 750,
				settings: {
					speed: 200,
					swipeToSlide: true,
					arrows: false,
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div id="projects" className="carousel">
			<SectionHeader title="Projects" />

			<Slider {...settings} ref={slider}>
				{CardData.map((card) => (
					<ProjectCard key={card.id} {...card} />
				))}
			</Slider>
		</div>
	);
};

export default ProjectsCarousel;

const NextArrow = ({ slider }) => (
	<div style={{ cursor: 'pointer' }} onClick={() => slider.current.slickNext()}>
		<img src={nextArrow} alt="next" />
	</div>
);
const PrevArrow = ({ slider }) => (
	<div style={{ cursor: 'pointer' }} onClick={() => slider.current.slickPrev()}>
		<img src={prevArrow} alt="previous" />
	</div>
);

const CardData = new Array(40).fill('').map((card, index) => ({
	id: index,
	listing: 'sale',
	img: 'https://houseplanng.com/wp-content/uploads/wp-realestate-uploads/_property_gallery/2021/02/4-bedroom-bungalow-hp1-1-1024x652.jpg',
	type: 'Office space',
	title: 'Alison building apartment',
	price: '60,800,000',
	location: 'Asokoro, Abuja',
	bathrooms: '3',
	bedrooms: '3',
	parking: '3',
}));
