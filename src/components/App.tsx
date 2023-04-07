import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBSBAq8JTqvZbbF5mKc20tM5o9IvpqWFOY',
  authDomain: 'social-game-d2747.firebaseapp.com',
  projectId: 'social-game-d2747',
  storageBucket: 'social-game-d2747.appspot.com',
  messagingSenderId: '135347244914',
  appId: '1:135347244914:web:b8ee200b532cd2a77157eb',
  measurementId: 'G-3K4YYXMFTS'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function App() {

  const email = 'toducz.endre@gmail.com';
  const password = 'passwor';

  const logInWithEmailAndPassword = async (currentEmail: string, currentPassword: string) => {
      await signInWithEmailAndPassword(auth, currentEmail, currentPassword);
  };

  return (
    <>
    <Toolbar>asd</Toolbar>
    <Button onClick={() => logInWithEmailAndPassword(email, password)}> </Button>
    </>
  );
}

export default App;
