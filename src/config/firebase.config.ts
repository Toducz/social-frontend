import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../constans/constans';

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
