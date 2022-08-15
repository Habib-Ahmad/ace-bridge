import Header from '../components/Header';
import ProjectsCarousel from '../components/ProjectsCarousel';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<>
			<Header />

			<div className="content-wrapper">
				<ProjectsCarousel />
				<Projects />
				<Testimonials />
			</div>

			<Partners />
			<Footer />
		</>
	);
};

export default Home;
