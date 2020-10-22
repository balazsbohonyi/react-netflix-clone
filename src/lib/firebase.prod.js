import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// we need to somehow seed the database;

// we need a config here
const config = {
  apiKey: 'AIzaSyAjn37FdW8oeHzWX_gB2nn23zXNmYObUBw',
  authDomain: 'netflix-4077d.firebaseapp.com',
  databaseURL: 'https://netflix-4077d.firebaseio.com',
  projectId: 'netflix-4077d',
  storageBucket: 'netflix-4077d.appspot.com',
  messagingSenderId: '673709578272',
  appId: '1:673709578272:web:43c93581ba6100c6918445',
};

const firebase = Firebase.initializeApp(config);

// dangerous line below - only execute it once when seeding the initial database
// seedDatabase(firebase);

export { firebase };
