import nextArrow from '../assets/next-arrow.svg';

const NextArrow = ({ slider }) => (
	<div style={{ cursor: 'pointer' }} onClick={() => slider.current.slickNext()}>
		<img src={nextArrow} alt="next" />
	</div>
);

export default NextArrow;
