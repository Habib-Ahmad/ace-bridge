import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
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
	const [projects, setProjects] = useState([]);

	const getProjects = () => {
		const ref = collection(db, 'projects');
		onSnapshot(ref, (snap) => {
			const data = snap.docs.map((snapDoc) => ({
				...snapDoc.data(),
				id: snapDoc.id,
			}));
			setProjects(data);
		});
	};

	useEffect(() => {
		getProjects();
	}, []);

	const sortedProjects = projects
		.sort((a, b) => (a.order > b.order ? 1 : -1))
		.slice(0, 3);

	return (
		<>
			<Navbar transparent />
			<Header />

			<div className="content-wrapper">
				<About />
				<Projects projects={sortedProjects} />
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
