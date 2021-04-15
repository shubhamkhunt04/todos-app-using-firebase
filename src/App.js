import './App.css';
import Todos from './Todos';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import firebase from 'firebase';

const sighInWithGoogle = () =>
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

const SignIn = () => (
  <main>
    <button onClick={sighInWithGoogle} style={{ backgroundColor: '#648DAE' }}>
      Sign In With Google
    </button>
  </main>
);

const App = () => {
  // const [user] = useAuthState(auth);

  // return user ? <Todos /> : <SignIn />;
  return <Todos/>
};

export default App;
