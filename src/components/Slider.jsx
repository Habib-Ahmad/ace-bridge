import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import nextArrow from '../assets/next-arrow.svg';
import prevArrow from '../assets/prev-arrow.svg';

const SliderComponent = ({ project }) => {
	const slider = useRef();

	const settings = {
		autoplay: true,
		dots: false,
		infinite: true,
		speed: 2000,
		arrows: true,
		lazyLoading: true,
		nextArrow: <NextArrow slider={slider} />,
		prevArrow: <PrevArrow slider={slider} />,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		pauseOnFocus: true,
		pauseOnDotsHover: true,
		className: 'custom-styles',
		responsive: [
			{
				breakpoint: 800,
				settings: {
					speed: 1000,
					arrows: false,
				},
			},
		],
	};

	return (
		<div className="slider">
			<Slider ref={slider} {...settings}>
				<div className="slide">
					<img src={project.coverImage} alt="" />
				</div>
				<div className="slide">
					<img src={project.coverImage} alt="" />
				</div>
				<div className="slide">
					<img src={project.coverImage} alt="" />
				</div>
				<div className="slide">
					<img src={project.coverImage} alt="" />
				</div>
				<div className="slide">
					<img src={project.coverImage} alt="" />
				</div>
				<div className="slide">
					<img src={project.coverImage} alt="" />
				</div>
			</Slider>
		</div>
	);
};

export default SliderComponent;

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
