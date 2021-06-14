import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyB4qkp_YWvt5GMJp8jgMQnWefGSmGuHpF4',
	authDomain: 'crwn-clothing-v1.firebaseapp.com',
	projectId: 'crwn-clothing-v1',
	storageBucket: 'crwn-clothing-v1.appspot.com',
	messagingSenderId: '211799820546',
	appId: '1:211799820546:web:978f6e8c0a85903050da1b',
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase;