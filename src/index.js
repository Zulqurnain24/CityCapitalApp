import React from 'react'
import AddCity from './AddCity/AddCity'
import Cities from './Cities/Cities'
import City from './Cities/City'
//import { colors } from './theme'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

const CitiesNav = createStackNavigator({
    Cities: { screen: Cities },
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#008080"
        }, headerTintColor: '#fff'
    }
})

const Tabs = createBottomTabNavigator({
    Cities: { screen: CitiesNav },
    AddCity: { screen: AddCity }
})

export default Tabs