import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './components/Timer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const START_TIME_AMOUNT = 25 * 60

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer startTime={START_TIME_AMOUNT} />
      </View>
    );
  }
}
