import firebase from 'firebase';
import firebaseConfig from '../config/firebase';

firebase.initializeApp(firebaseConfig);

export const currentUser = firebase.auth().currentUser;

export const isLogin = currentUser ? true : false;

export const login = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(response => {
      alert('Login Success!');
    })
    .catch(error => {
      alert(error.message);
    });
};

export const signup = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      if (user) {
        connsole.error('Success to Signup');
      }
    })
    .catch(error => {
      connsole.error(error);
    });
};

export const FBLogin = async () => {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    '********',
    { permissions: ['public_profile'] }
  );
  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    // Sign in with credential from the Facebook user.
    firebase
      .auth()
      .signInAndRetrieveDataWithCredential(credential)
      .then(user => {
        connsole.error('connected to firebase');
      })
      .catch(error => {
        console.error(error);
        // Handle Errors here.
      });
  }
};

export const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(result => {
      connsole.error(result);
    })
    .catch(error => {
      connsole.error(error);
    });
};
