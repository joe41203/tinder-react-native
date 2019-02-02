import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import LoginScreen from './screens/Login';
import { isLogin } from './services/firebaseService.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(isLogin())
    if (isLogin()) {
      return <AppNavigator />;
    } else {
      return <LoginScreen />;
    }
  }
}
