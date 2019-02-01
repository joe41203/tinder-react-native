import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import LoginScreen from './screens/Login';
import firebase from 'firebase';
import firenaseConfig from './config/firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    firebase.initializeApp(firenaseConfig);
  }

  render() {
    
    const currentUser = firebase.auth().currentUser;
    console.log('currentUser', currentUser);

    if (currentUser) {
      return (<AppNavigator/>);
    } else {
      return (<LoginScreen/>);
    }
  }
}