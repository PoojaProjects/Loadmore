import { Text, View, StyleSheet, StatusBar, Image } from 'react-native'
import React, { Component } from 'react'
import { localimag } from './localimage';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Splash extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            player_id: '',
            isConnected: true,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login')
        }, 2000);

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    alignSelf: 'center',
                    alignItems: 'center',
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    width: windowWidth * 60 / 100,
                    height: windowWidth * 60 / 100,
                    borderRadius: windowWidth * 50 / 100
                }}>
                    <Text style={{ fontSize: windowWidth * 8 / 100, fontWeight: 'bold', color: 'white' }}>
                        {'BidFrail'}
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },

});