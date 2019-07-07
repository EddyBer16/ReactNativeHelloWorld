/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet, 
  Text,
  TextInput,
  View
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

    }
  }
  

  render() {
    return (
      <View style={ styles.view } >
        <Text>Hi!</Text>
        <TextInput style={ styles.input } />
      </View>
    );
  }
}

const styles = new StyleSheet.create({
  view: {
    flex: 1
  },
  input: {
    width: 150,
    height: 20,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  }
})