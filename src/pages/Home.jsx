import Header from '../components/Header';
import PropertiesCarousel from '../components/Properties';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<>
			<Header />

			<div className="content-wrapper">
				<PropertiesCarousel />
				<Projects />
				<Testimonials />
			</div>

			<Partners />
			<Footer />
		</>
	);
};

export default Home;
