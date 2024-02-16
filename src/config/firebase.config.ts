import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../constants/constants';

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
