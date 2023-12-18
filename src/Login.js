import { Image, Text, TouchableOpacity, ScrollView, View, TextInput, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React, { Component } from 'react'
import { Dimensions } from 'react-native';
import { localimag } from './localimage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Carousel from 'react-native-snap-carousel';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: '',
            data: [
                { id: '1', imageUrl: localimag.working_woman },
                { id: '2', imageUrl: localimag.download_images },
                { id: '3', imageUrl: localimag.images },
            ],
        }

    }
    componentDidMount() {

    }

    renderItem = ({ item }) => (
        <View style={styles.slide}>
            <Image source={item.imageUrl} style={styles.image} resizeMode="cover" />
        </View>
    );

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
                            height: windowWidth * 7 / 100,
                            width: windowWidth * 7 / 100,
                        }} source={localimag.left_arrow} ></Image>
                    </TouchableOpacity>
                    {/* ----------------for text view---------- */}
                    <View style={{ width: windowWidth * 55 / 100 }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: windowWidth * 6.5 / 100,
                            color: 'black',
                            fontWeight: 'bold'
                        }} >{'BidFrail'}</Text>
                    </View>
                    {/* ------------another text--------------- */}
                    <View style={{ width: windowWidth * 15 / 100 }}>
                        <Text style={{
                            fontSize: windowWidth * 3.5 / 100,
                            color: 'black',
                            textAlign: 'right'
                        }} >{'Skip'}</Text>
                    </View>
                </View>
                {/* --------------------end---------------- */}
                <ScrollView
                    style={{ width: windowWidth, paddingBottom: windowWidth * 15 / 100 }}
                >
                    <View style={{
                        width: windowWidth * 90 / 100,
                        alignSelf: 'center',
                        marginTop: windowHeight * 2 / 100,
                        paddingBottom: windowHeight * 5 / 100
                    }}>
                        {/*--------------------for Carousel-------------  */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                        }}>
                            <Carousel
                                layout="default"
                                data={this.state.data}
                                renderItem={this.renderItem}
                                sliderWidth={windowWidth}
                                itemWidth={windowWidth}
                            />
                        </View>
                        {/* ----------for text---------------- */}
                        <Text style={{ marginTop: windowHeight * 3 / 100, fontSize: windowWidth * 6 / 100, color: 'black', fontWeight: 'bold' }}>
                            {'Enter you Phone'} </Text>
                        <Text style={{ fontSize: windowWidth * 3.8 / 100, color: 'black', fontWeight: 'normal', marginTop: windowHeight * 1.5 / 100 }}>
                            {'You will receive a 4 digit code for phone number/n Verification'}</Text>
                        {/* --------------------------for email text-------------------- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignItems: 'center',
                            alignSelf: 'center',
                            flexDirection: 'row'
                        }}>

                            <View style={{
                                width: windowWidth * 20 / 100,
                                marginTop: windowHeight * 3 / 100,
                                height: windowHeight * 8 / 100,
                                borderRadius: 7,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#1C1B1F',
                                borderWidth: 0.5
                            }}>
                                <Text style={{ fontSize: windowWidth * 4.5 / 100, color: 'black', fontWeight: 'bold' }}>
                                    {'+91'}
                                </Text>
                                <Image resizeMode='contain' style={{
                                    marginLeft: windowWidth * 2 / 100,
                                    height: windowHeight * 3 / 100,
                                    width: windowWidth * 3 / 100
                                }} source={localimag.down}></Image>
                            </View>

                            <View style={{
                                width: windowWidth * 65 / 100,
                                marginTop: windowHeight * 3 / 100,
                                height: windowHeight * 8 / 100,
                                borderRadius: 7,
                                flexDirection: 'row',
                                alignItems: 'center',
                                borderColor: '#1C1B1F',
                                borderWidth: 0.5,
                                marginLeft: windowWidth * 3 / 100
                            }}>
                                <TextInput style={{
                                    width: windowWidth * 70 / 100,
                                    fontSize: windowWidth * 4.5 / 100,
                                    marginLeft: windowWidth * 2 / 100
                                }}
                                    placeholderTextColor="black"
                                    placeholder='Enter your number'
                                    keyboardType='number-pad'  // Corrected 'number-pas' to 'number-pad'
                                    returnKeyLabel='done'
                                    returnKeyType='done'
                                    ref={(input) => { this.mobilefield = input; }}
                                    onSubmitEditing={() => { Keyboard.dismiss() }}
                                    onFocus={() => { this.setState({ errorno: 0, activeinput: 1 }) }}
                                    onChangeText={(txt) => { this.setState({ number: txt }) }}
                                    value={this.state.number}
                                    maxLength={16}
                                />
                            </View>
                        </View>
                        {/* ================for button-------------- */}
                        <View style={{ alignItems: 'center', alignSelf: 'center' }} >
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('OTPVarification')}
                                activeOpacity={0.7}
                                 style={styles.button}>
                                <Text style={{ color: '#f5f4f5', fontSize: windowWidth * 4.5 / 100, fontWeight: 'normal' }}>Generate OTP</Text>
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
    slide: {
        flex: 1,
        width: windowWidth,
        alignSelf: 'center',
        alignItems: 'center',
        marginRight: windowWidth * 5 / 100

    },
    image: {
        width: windowWidth,
        height: windowWidth * 95 / 100,
        alignSelf: 'center',
        // borderRadius: 5,
        resizeMode: 'cover'
    },
    button:{
        backgroundColor: '#C20114',
        height: windowHeight * 7 / 100,
        width: windowWidth * 90 / 100,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: windowHeight * 4 / 100
    }



})