import React from 'react';
import SwipeCards from '../components/SwipeCards';

import { 
  Text, 
  View
} from 'react-native';

class Home extends React.Component {
  state = {}

  componentWillMount() {}

  render() {
    return (
      <SwipeCards />
    )
  }
}

export default Home;