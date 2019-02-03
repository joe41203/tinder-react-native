import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// import the different screens
import Loading from './screens/Loading';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Home from './screens/Home';

import firebase from 'firebase';
import firebaseConfig from './config/firebase';

firebase.initializeApp(firebaseConfig);

const App = createAppContainer(
  createSwitchNavigator(
    {
      Loading,
      SignUp,
      Login,
      Home
    },
    {
      initialRouteName: 'Loading'
    }
  )
);

export default App;
