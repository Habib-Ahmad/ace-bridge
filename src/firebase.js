import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: 'ace-bridge.firebaseapp.com',
	projectId: 'ace-bridge',
	storageBucket: 'ace-bridge.appspot.com',
	messagingSenderId: '954618823871',
	appId: '1:954618823871:web:97da3bc811940c35f4320a',
	measurementId: 'G-8NKHXVBXBS',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

export { auth, db };
