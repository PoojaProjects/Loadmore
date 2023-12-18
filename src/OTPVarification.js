import { Image, Text, TouchableOpacity, ScrollView, View, TextInput, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React, { Component } from 'react'
import { Dimensions } from 'react-native';
import { localimag } from './localimage';
import OTPTextView from 'react-native-otp-textinput'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class OTPVarification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            otp: '',
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    hidden={false}
                    translucent={false}
                    barStyle="dark-content"
                    backgroundColor={'white'}
                    networkActivityIndicatorVisible={true}
                />
                {/* -------------------header------------- */}
                <View style={styles.header} >
                    <TouchableOpacity
                        style={{ width: windowWidth * 20 / 100 }}
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.goBack()} >
                        <Image style={{
                            height: windowWidth * 8 / 100,
                            width: windowWidth * 8 / 100,
                        }} source={localimag.left_arrow} ></Image>
                    </TouchableOpacity>
                    <View style={{ width: windowWidth * 55 / 100 }}>

                    </View>
                    <View style={{ width: windowWidth * 15 / 100 }}>

                    </View>

                </View>
                {/* --------------------end---------------- */}
                <ScrollView
                    style={{ width: windowWidth, paddingBottom: windowWidth * 15 / 100 }}>

                    <View style={{
                        width: windowWidth * 90 / 100,
                        alignSelf: 'center',
                        marginTop: windowHeight * 2 / 100
                    }}>
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignItems: 'center',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginTop: windowHeight * 5 / 100
                        }}>
                            <Text style={{ fontSize: windowWidth * 12 / 100, color: '#C20114', fontWeight: 'bold', }}>
                                {'Bid'} </Text>
                            <Text style={{ fontSize: windowWidth * 12 / 100, color: 'black', fontWeight: 'bold', marginLeft: windowWidth * 1 / 100 }}>
                                {"Frail"}</Text>
                        </View>
                        {/* ------------------verification code---------------- */}
                        <Text style={{ marginTop: windowHeight * 13 / 100, fontSize: windowWidth * 7 / 100, color: 'black', fontWeight: 'bold' }}>
                            {'Verification Code'}</Text>
                        <Text style={{ fontSize: windowWidth * 3.8 / 100, color: 'black', fontWeight: 'bold', marginTop: windowHeight * 1.5 / 100 }}>
                            {'Enter 4 digit code sent to your phone'} </Text>
                        <Text style={{ fontSize: windowWidth * 3.8 / 100, color: '#C20114', fontWeight: 'bold', marginTop: windowHeight * 0.5 / 100 }}>
                            {'+91 9987115132'} </Text>
                        {/* --------------------------for email text-------------------- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignItems: 'center',
                            alignSelf: 'center',
                            flexDirection: 'row'
                        }}>
                            {/* .....................Text input............... */}

                            <OTPTextView
                                handleTextChange={(text) => {
                                    this.setState({ otp: text }),
                                        console.log(text)
                                }}
                                containerStyle={{
                                    marginVertical: windowWidth * 10 / 100,
                                    width: windowWidth * 55 / 100,
                                    alignSelf: 'center'
                                }}
                                textInputStyle={{
                                    borderRadius: windowWidth * 2 / 100,
                                    borderWidth: windowWidth * 0.2 / 100,
                                    width: windowWidth * 19 / 100,
                                    color: 'black'
                                }}
                                inputCount={4}
                                inputCellLength={1}
                                tintColor={'black'}
                                offTintColor={'black'}
                            />
                        </View>
                        {/* ================for button-------------- */}
                        <View style={{ alignItems: 'center', alignSelf: 'center' }} >
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Home')}
                                activeOpacity={0.7} style={styles.button}>
                                <Text style={{
                                    marginLeft: windowWidth * 4 / 100,
                                    color: '#f5f4f5', fontSize: windowWidth * 4.5 / 100, fontWeight: 'normal'
                                }}>CONTINUE</Text>
                                <Image style={{
                                    height: windowWidth * 8 / 100,
                                    width: windowWidth * 8 / 100,
                                    marginRight: windowWidth * 4 / 100
                                }} source={localimag.arrow_right} ></Image>

                            </TouchableOpacity>
                        </View>
                        {/* ----------------view end------------ */}
                        <View style={styles.lastView}>
                            <Text style={{ fontSize: windowWidth * 3.8 / 100, color: 'black', fontWeight: 'bold', }}>
                                {"Didn't get code?"}
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.7} >
                                <Text style={{ fontSize: windowWidth * 3.8 / 100, color: '#C20114', fontWeight: 'bold', marginLeft: windowWidth * 1 / 100 }}>
                                    {'Resend Code'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    header: {
        width: windowWidth * 90 / 100,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: windowHeight * 7 / 100,
    },
    button: {
        backgroundColor: '#C20114',
        height: windowHeight * 7 / 100,
        width: windowWidth * 90 / 100,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 25,
        flexDirection: 'row',

        justifyContent: 'space-between',
        marginTop: windowHeight * 1 / 100
    },
    lastView: {
        width: windowWidth * 90 / 100,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: windowHeight * 2 / 100
    }

})