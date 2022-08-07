import Header from '../components/Header';
import Properties from '../components/Properties';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';

const Home = () => {
	return (
		<>
			<Header />

			<div className="content-wrapper">
				<Properties />
				<Projects />
				<Testimonials />
				<Partners />
			</div>

			<div style={{ height: '100vh' }}></div>
		</>
	);
};

export default Home;
