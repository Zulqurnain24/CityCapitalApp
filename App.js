/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
  Platform, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import Tabs from './src';

export default class App extends Component {
  state = {
    cities: []
  }
  addCity = (city) => {
      const cities = this.state.cities
      cities.push(city)
      this.setState({ cities })
  }
  addLocation = () => {
     
  }
  render() {
    return <Tabs 
    screenProps={ {
      cities: this.state.cities,
      addCity: this.addCity
    }
    } 
    />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
