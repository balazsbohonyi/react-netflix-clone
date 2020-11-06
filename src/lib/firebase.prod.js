import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll need to uncomment this!
// import { seedDatabase } from '../seed';

// TOOD: remove all these API keys / configuration stuff below
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

// 2) when seeding the database you'll have to uncomment this
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data in the databse

export { firebase };
