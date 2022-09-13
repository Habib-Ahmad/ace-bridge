import SectionHeading from './SectionHeading';
import mission from '../assets/mission.svg';
import vision from '../assets/vision.svg';
import core from '../assets/core-values.svg';

const WhoWeAre = () => {
	return (
		<div className="who-we-are">
			<SectionHeading tag="AceBridge" heading="Who we are" />

			<div className="card-wrapper">
				{cardData.map((card, index) => (
					<div
						key={card.title}
						className="card"
						data-aos="fade-up"
						data-aos-delay={String(index * 100)}
					>
						<img src={card.icon} alt="" />
						<h3>{card.title}</h3>
						<p className="text">{card.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default WhoWeAre;

const cardData = [
	{
		icon: mission,
		title: 'Mission',
		text: 'To perform for our customers the highest level of quality construction services at fair and market competitive prices',
	},
	{
		icon: vision,
		title: 'Vision',
		text: "To be Nigeria's most dynamic developing construction company",
	},
	{
		icon: core,
		title: 'Core Values',
		text: 'At Ace Bridge our core values are simply; safety, people, ingenuity, results and success. These are the foundation of our company, motivating and leading us in a unified direction',
	},
];
