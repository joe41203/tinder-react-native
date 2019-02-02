import firebase from 'firebase';
import firebaseConfig from '../config/firebase'

firebase.initializeApp(firebaseConfig);

// サインインしているかどうかの判定
export const isLogin = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      return true
    } else {
      return false
    }
  })
}

// サインインしているかどうかの判定２
export const currentUser = firebase.auth().currentUser

// メール＆パスワードログイン
export const login = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(response => {
    alert("Login Success!");
  })
  .catch(error => {
    alert(error.message);
  });
}

// ユーザ登録
export const signup = (email, password) =>{
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(user => {
    if (user) {
      console.log("Success to Signup")
    }
  })
  .catch(error => {
    console.log(error);
  })
}

// Facebookログイン
export const FBLogin = async () => {
  const { type, token } = 
    await Expo.Facebook.logInWithReadPermissionsAsync('********', 
      { permissions: ['public_profile'] 
    })
  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token)
    // Sign in with credential from the Facebook user.
    firebase
      .auth().signInAndRetrieveDataWithCredential(credential)
      .then(user => {
        console.log('connected to firebase')
      })
      .catch(error => {
        console.error(error)
        // Handle Errors here.
      })
  }
}

// サインアウト処理
export const logout = () => {
  firebase.auth().signOut()
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
}