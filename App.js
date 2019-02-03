import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import LoginScreen from './screens/Login';
import { isLogin } from './services/firebaseService';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (isLogin) {
      return <AppNavigator />;
    } else {
      return <LoginScreen />;
    }
  }
}
