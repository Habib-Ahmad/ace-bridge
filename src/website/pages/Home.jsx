import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import WhoWeAre from '../components/WhoWeAre';
import WhatWeOffer from '../components/WhatWeOffer';
import Collage from '../components/Collage';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<>
			<Navbar transparent />
			<Header />

			<div className="content-wrapper">
				<About />
				<Projects />
				<WhoWeAre />
				<Collage />
				<WhatWeOffer />
			</div>

			<Partners />
			<Footer />
		</>
	);
};

export default Home;
