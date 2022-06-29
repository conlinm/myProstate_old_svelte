// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAFOQNBqvxsBG087lv0bZJsiaK4dC7j984',
	authDomain: 'myprostate-41696.firebaseapp.com',
	projectId: 'myprostate-41696',
	storageBucket: 'myprostate-41696.appspot.com',
	messagingSenderId: '1037887263339',
	appId: '1:1037887263339:web:81c3fa8d1b4dc17833572e',
	measurementId: 'G-5VCSSB8PZZ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
