import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import LoginScreen from './screens/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isLogin = false;

    if (isLogin) {
      return (<AppNavigator/>);
    } else {
      return (<LoginScreen/>);
    }
  }
}