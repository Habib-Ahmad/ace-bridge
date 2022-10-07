import prevArrow from '../assets/prev-arrow.svg';

const PrevArrow = ({ slider }) => (
	<div style={{ cursor: 'pointer' }} onClick={() => slider.current.slickPrev()}>
		<img src={prevArrow} alt="previous" />
	</div>
);

export default PrevArrow;
