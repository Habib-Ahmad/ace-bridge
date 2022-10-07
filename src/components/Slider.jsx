import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = ({ project }) => {
	const slider = useRef();

	const settings = {
		autoplay: true,
		dots: true,
		infinite: true,
		speed: 2000,
		lazyLoading: true,
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
				{project.sliderImages?.map((img, idx) => (
					<div key={idx} className="slide">
						<img src={img} alt="" />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SliderComponent;
