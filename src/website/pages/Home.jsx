import Navbar from '../components/Navbar';
import Header from '../components/Header';
import About from '../components/About';
import ProjectsCarousel from '../components/ProjectsCarousel';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<>
			<Navbar transparent />
			<Header />

			<div className="content-wrapper">
				<About />
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
