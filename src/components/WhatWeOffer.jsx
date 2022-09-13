import SectionHeading from './SectionHeading';
import purchase from '../assets/purchase.svg';
import coFinancing from '../assets/co-financing.svg';
import realEstate from '../assets/real-estate.svg';

const WhatWeOffer = () => {
	return (
		<div className="what-we-offer">
			<SectionHeading tag="Services" heading="What we offer" />

			<div className="card-wrapper">
				<div className="card card1" data-aos="fade-up">
					<img src={purchase} alt="" className="icon" />
					<h3>Direct Purchase (Off Plan)</h3>
					<p className="text">
						Investors can purchase from any of the acebrige estates at off plan
						and make up 20% at completion
					</p>
				</div>

				<div className="card card2" data-aos="fade-up" data-aos-delay="100">
					<img src={coFinancing} alt="" className="icon" />
					<h3>Project Co-financing</h3>
					<p className="text">
						Acebridge gives the investor an opportunuty to co finance any of its
						active projects and make returns of upto 35% investor can invest
						from 3,000,000 Naira
					</p>
				</div>

				<div className="card card3" data-aos="fade-up" data-aos-delay="200">
					<img src={realEstate} alt="" className="icon" />
					<h3>Real Estate Partnerships</h3>
					<p className="text">
						Acebridge is open to pertnering with land owners to carry out real
						estate partnerships and deliver quality real estate.
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhatWeOffer;
