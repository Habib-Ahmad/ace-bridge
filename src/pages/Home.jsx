import Header from '../components/Header';
import Properties from '../components/Properties';

const Home = () => {
	return (
		<>
			<Header />

			<div className="content-wrapper">
				<Properties />
			</div>

			<div style={{ height: '200px' }}></div>
		</>
	);
};

export default Home;
