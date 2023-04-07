import { Toolbar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { initializeApp } from "firebase/app";
import { UserCredential, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSBAq8JTqvZbbF5mKc20tM5o9IvpqWFOY",
  authDomain: "social-game-d2747.firebaseapp.com",
  projectId: "social-game-d2747",
  storageBucket: "social-game-d2747.appspot.com",
  messagingSenderId: "135347244914",
  appId: "1:135347244914:web:b8ee200b532cd2a77157eb",
  measurementId: "G-3K4YYXMFTS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function App() {

  console.log(auth);
  const email = "toducz.endre@gmail.com";
  const password = "password";

  const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      let response: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <>
    <Toolbar>asd</Toolbar>
    <Button onClick={() => logInWithEmailAndPassword(email, password)}> </Button>
    </>
  );
}

export default App;
