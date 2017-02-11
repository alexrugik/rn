import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';


export default class Hello extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>Hello world</Text>
            </View>
        )
    }
}

