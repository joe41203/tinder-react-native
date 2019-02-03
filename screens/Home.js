import React from 'react';
import SwipeCards from '../components/SwipeCards';
import { TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'firebase';

import { Text, View } from 'react-native';

class Home extends React.Component {
  state = {};

  componentWillMount() {}

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text onPress={this.handleLogout}>signOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
