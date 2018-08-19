import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class City extends React.Component {
    static navigationOptions = (props) => {
        title: props.navigation.state.params.city.name
        return {
            title: props.navigation.state.params.city.city,
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 400
            }
        }
    }
    state = {
        name: '',
        info: ''
    }
    render() {
       return (
           <View>
                <Text>Hello World</Text> 
           </View>
       ) 
    }
}