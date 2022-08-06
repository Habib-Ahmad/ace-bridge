import Header from '../components/Header';
import Properties from '../components/Properties';
import Projects from '../components/Projects';

const Home = () => {
	return (
		<>
			<Header />

			<div className="content-wrapper">
				<Properties />
				<Projects />
			</div>

			<div style={{ height: '100vh' }}></div>
		</>
	);
};

export default Home;
