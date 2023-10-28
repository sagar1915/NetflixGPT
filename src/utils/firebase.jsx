// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCUpKPMG_crl8mQBhg29YBA2nDfZIHX43g",
	authDomain: "netflixgpt-ce668.firebaseapp.com",
	projectId: "netflixgpt-ce668",
	storageBucket: "netflixgpt-ce668.appspot.com",
	messagingSenderId: "162977713078",
	appId: "1:162977713078:web:f686c7bf6a93cbd35bcf17",
	measurementId: "G-D0GJFMYCPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();