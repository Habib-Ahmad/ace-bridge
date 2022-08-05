import Header from '../components/Header';
import Properties from '../components/Properties';

const Home = () => {
	return (
		<>
			<Header />

			<div style={{ padding: '0 10vw' }}>
				<Properties />
			</div>

			{/* <div style={{ margin: '40px' }}>
				<PropertyCard
					tag="For sale"
					img="https://houseplanng.com/wp-content/uploads/wp-realestate-uploads/_property_gallery/2021/02/4-bedroom-bungalow-hp1-1-1024x652.jpg"
					type="Office space"
					title="Alison building apartment"
					price="60,800,000"
					location="Asokoro, Abuja"
					bathrooms="3"
					bedrooms="3"
					parking="3"
				/>
			</div> */}
			<div style={{ height: '200px' }}></div>
		</>
	);
};

export default Home;
