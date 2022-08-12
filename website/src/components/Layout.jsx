import Navbar from './Navbar';
import Partners from './Partners';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="layout">
			<Navbar />

			<div className="children">{children}</div>

			<Partners />
			<Footer />
		</div>
	);
};

export default Layout;
