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

	const ids = [
		'cfc48a-e3a5-5ffe-c13d-d4b63ccd1c0',
		'185d8c7-ad20-fa84-a2d2-c3e0a8eab0c7',
		'8808b06-ced5-815-680d-31018451678b',
	];

	const headerProjects = projects.filter((item) => ids.includes(item.id));

	const sortedProjects = projects
		.sort((a, b) => (a.completedYear > b.completedYear ? 1 : -1))
		.slice(-3);

	return (
		<>
			<Navbar transparent />
			<Header projects={headerProjects} />

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
