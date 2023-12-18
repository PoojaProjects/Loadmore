import { Image, Text, TouchableOpacity, FlatList, ScrollView, View, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import { Dimensions } from 'react-native';
import { localimag } from './localimage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Electrician extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            data: [
                { key: '1', icon: localimag.fan1, text: 'Fan' },
                { key: '2', icon: localimag.switchbord, text: 'Switches & Sockets' },
                { key: '3', icon: localimag.bgBulb, text: 'Lights' },
                { key: '4', icon: localimag.inveterImage, text: 'Inverter & Stabilizer' },
                { key: '5', icon: localimag.application, text: 'Electrical Appliances' },
                { key: '6', icon: localimag.biring1_image, text: 'Wiring' },
                { key: '7', icon: localimag.doorbell, text: 'Door Bell' },
                { key: '8', icon: localimag.mcbfu_image, text: 'MCB & Fuses' },
                { key: '9', icon: localimag.genralElectrician, text: 'General Electrician' },
                // Add more items as needed
            ],
            Fan: [
                { id: '1', icon: localimag.fan1, title: 'Fan Installation', text: 'Installation of 1 Unit of celling,\nexhaust or wall fan', text1: 'Spare parts cost extra' },
                { id: '2', icon: localimag.girl_withMobile, title: 'Fan Uninstallation', text: 'Includes Uninstallation of 1 unit of celling, exhaust or wall fan', text1: 'Extra charges for decorative Fan' },
            ],
            Switches: [
                { id: '1', icon: localimag.switchbord, title: 'Switch Board Install', text: 'Installation of 1 Unit of celling,\nexhaust or wall fan', text1: 'Spare parts cost extra', add: '+ ADD' },
                { id: '2', icon: localimag.electrician, title: 'Switch Board Repair', text: 'Includes Uninstallation of 1 unit of celling, exhaust or wall fan', text1: 'Extra charges for decorative Fan', add: '+ ADD' },
            ],
            Lights: [
                { id: '1', icon: localimag.manyBulbs, title: 'Bulb Holder Installation', text: 'Installation of 1 Unit of celling,\nexhaust or wall fan', text1: 'Spare parts cost extra', add: '+ ADD' },
                { id: '2', icon: localimag.bulb, title: 'Bulbs/Tube Light\nInstallation ', text: 'Includes Uninstallation of 1 unit of celling, exhaust or wall fan', text1: 'Extra charges for decorative Fan', add: '+ ADD' },
            ],
            MCB: [
                { id: '1', icon: localimag.mcbfu_image, title: 'Fuse Replacement', text: 'Installation of 1 Unit of celling,\nexhaust or wall fan', text1: 'Spare parts cost extra', add: '+ ADD' },
                { id: '2', icon: localimag.mcbfuces, title: 'Single MCB Installation', text: 'Includes Uninstallation of 1 unit of celling, exhaust or wall fan', text1: 'Extra charges for decorative Fan', add: '+ ADD' },
            ],
            InverterStabilizer: [
                { id: '1', icon: localimag.inveterImage, title: 'Single Battery Inverter installation', text: 'Installation of 1 Unit of celling,\nexhaust or wall fan', text1: 'Spare parts cost extra', add: '+ ADD' },
                { id: '2', icon: localimag.inveters_images1, title: 'Dubble Battery Inverter installation', text: 'Includes Uninstallation of 1 unit of celling, exhaust or wall fan', text1: 'Extra charges for decorative Fan', add: '+ ADD' },
            ],
            Electrical: [
                { id: '1', icon: localimag.application, title: 'Single Battery Inverter installation', text: 'Installation of 1 Unit of celling,\nexhaust or wall fan', text1: 'Spare parts cost extra', add: '+ ADD' },
                { id: '2', icon: localimag.tvIntalletion, title: 'TV Installation(up to 42 inches)', text: 'Includes Uninstallation of 1 unit of celling, exhaust or wall fan', text1: 'Extra charges for decorative Fan', add: '+ ADD' },
            ],
            Wiring: [
                { id: '1', icon: localimag.biring, title: 'New Internal Wiring (pre 5m)', text: 'Installation of 1 Unit of celling,\nexhaust or wall fan', text1: 'Spare parts cost extra', add: '+ ADD' },
                { id: '2', icon: localimag.biring1_image, title: 'New Wiring with casing (pre 5m)', text: 'Includes Uninstallation of 1 unit of celling, exhaust or wall fan', text1: 'Extra charges for decorative Fan', add: '+ ADD' },
            ],
            Doorbell: [
                { id: '1', icon: localimag.doorbell, title: 'Door Bell installation', text: 'Installation of 1 Unit of celling,\nexhaust or wall fan', text1: 'Spare parts cost extra', add: '+ ADD' },
                { id: '2', icon: localimag.doorbell_image, title: 'Door Bell Replacement', text: 'Includes Uninstallation of 1 unit of celling, exhaust or wall fan', text1: 'Extra charges for decorative Fan', add: '+ ADD' },
            ],
            Genral_Electrician: [
                { id: '1', icon: localimag.genralElectrician, title: 'Custom/Genral Electrician', text: 'Installation of 1 Unit of celling,\nexhaust or wall fan', text1: 'Spare parts cost extra', add: '+ ADD' },
                { id: '2', icon: localimag.ac_repair_image, title: 'Dubble Battery Inverter installation', text: 'Includes Uninstallation of 1 unit of celling, exhaust or wall fan', text1: 'Extra charges for decorative Fan', add: '+ ADD' },
            ],
        }
    }

    componentDidMount() {

    }

    renderItem = ({ item }) => (
        <View style={{ flex: 1, flexDirection: 'column', margin: 10, alignItems: 'center' }}>
            <Image style={{ borderRadius: windowWidth * 3 / 100, width: windowWidth * 30 / 100, height: windowWidth * 23 / 100, }}
                source={item.icon}
            />
            <Text style={styles.itemText}>{item.text}</Text>
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
                        style={{ width: windowWidth * 10 / 100 }}
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.goBack()} >
                        <Image style={{
                            height: windowWidth * 7 / 100,
                            width: windowWidth * 7 / 100,
                        }} source={localimag.back} ></Image>
                    </TouchableOpacity>
                    <View style={{ width: windowWidth * 75 / 100 }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: windowWidth * 6.5 / 100,
                            color: 'black',
                            fontWeight: 'bold'
                        }} >{'Electricians'}</Text>
                    </View>
                    <View style={{ width: windowWidth * 10 / 100 }}>
                        <Image style={{
                            height: windowWidth * 7 / 100,
                            width: windowWidth * 7 / 100,
                        }} source={localimag.shopping_cart} ></Image>
                    </View>
                </View>
                {/* --------header end----------- */}
                <ScrollView style={{ width: windowWidth, paddingBottom: windowHeight * 5 / 100, alignSelf: 'center' }}>
                    <View style={styles.mainView}>
                        {/* --------------for view-------- */}
                        <View style={styles.tabView}>
                            <View style={styles.redButton1}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: windowWidth * 4 / 100 }}>{'Get Bids'}
                                </Text>
                                <Image style={{
                                    marginLeft:windowWidth*3/100,
                                    tintColor:'white',
                                    height: windowWidth * 4.2 / 100,
                                    width: windowWidth * 4.2 / 100,
                                }} source={localimag.question} ></Image>
                            </View>
                            <View
                                style={{ width: windowWidth * 43 / 100, justifyContent: 'center', alignItems: 'center' }}
                            >
                                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: windowWidth * 4 / 100 }}>{'Book Now'}
                                </Text>
                            </View>
                        </View>
                        {/* -------------------flatlist images--- */}
                        <FlatList
                            data={this.state.data}
                            renderItem={this.renderItem}
                            numColumns={3}
                            keyExtractor={(item) => item.key}
                            style={{ marginTop: windowWidth * 1 / 100 }}
                        />
                        {/* ------------view------------- */}
                        <View style={[styles.flatlist, { paddingVertical: windowWidth * 0 / 100 }]}>
                            <View style={{ width: windowWidth * 50 / 100, paddingHorizontal: windowWidth * 4 / 100 }}>

                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={styles.greenButton}>
                                    <Text style={{
                                        color: '#f5f4f5',
                                        fontSize: windowWidth * 2.8 / 100,
                                        fontWeight: 'normal'
                                    }}>Get Bids in 5mins</Text>
                                </TouchableOpacity>
                                {/* ----------- */}
                                <Text style={{
                                    fontSize: windowWidth * 4 / 100,
                                    color: 'black',
                                    fontWeight: 'bold',
                                    paddingVertical: windowHeight * 1 / 100
                                }} >{'Get Min Order Fee Off'}</Text>
                                <Text style={{
                                    fontSize: windowWidth * 3.3 / 100,
                                    color: 'black',
                                    fontWeight: 'normal'
                                }} >{'On Orders above #200'}</Text>
                            </View>
                            <View style={{ width: windowWidth * 40 / 100 }}>
                                <Image style={{
                                    height: windowWidth * 35 / 100,
                                    width: windowWidth * 40 / 100,
                                    borderTopRightRadius: windowWidth * 3 / 100,
                                    borderBottomRightRadius: windowWidth * 3 / 100,
                                }} source={localimag.images} ></Image>
                            </View>
                        </View>
                        {/* ---------------for category view----- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: windowHeight * 3 / 100
                        }}>
                            <Text style={{
                                fontSize: windowWidth * 5 / 100,
                                color: 'black',
                                fontWeight: 'bold'
                            }} >{'FAN'}</Text>
                        </View>
                        {/* ----------Fan flatlist------------- */}
                        <FlatList
                            data={this.state.Fan}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (

                                <View style={styles.flatlist}>
                                    <View style={{
                                        width: windowWidth * 55 / 100,
                                        paddingHorizontal: windowWidth * 2 / 100,
                                        marginLeft: windowWidth * 1 / 100,
                                        justifyContent: 'center',

                                    }}>

                                        {/* ----------- */}
                                        <Text style={{
                                            fontSize: windowWidth * 4 / 100,
                                            color: 'black',
                                            fontWeight: 'bold',

                                        }} >{item.title}</Text>
                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal',
                                            paddingVertical: windowHeight * 1 / 100
                                        }} >{item.text}</Text>
                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal'
                                        }} >{item.text1}</Text>
                                    </View>
                                    <View style={{
                                        width: windowWidth * 35 / 100,
                                        height: windowHeight * 20 / 100,
                                    }}>
                                        <Image style={{
                                            height: windowWidth * 28 / 100,
                                            width: windowWidth * 33 / 100,
                                            borderRadius: windowWidth * 3 / 100,
                                        }} source={item.icon} />

                                        <TouchableOpacity
                                            activeOpacity={0.7} style={styles.redButton}>
                                            <Text style={{
                                                color: '#f5f4f5', fontSize: windowWidth * 4.5 / 100, fontWeight: 'normal'
                                            }}>- 1 +</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                        {/* ---------------for switches & sockets view----- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            marginTop: windowHeight * 3 / 100
                        }}>
                            <Text style={{
                                fontSize: windowWidth * 5 / 100,
                                color: 'black',
                                fontWeight: 'bold'
                            }} >{'SWITCHES & SOCKETS'}</Text>

                        </View>
                        {/* ----------Fan flatlist------------- */}
                        <FlatList
                            data={this.state.Switches}
                            style={styles.flatlistContainer}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (

                                <View style={styles.flatlist}>
                                    <View style={{
                                        width: windowWidth * 55 / 100,
                                        paddingHorizontal: windowWidth * 2 / 100,
                                        marginLeft: windowWidth * 1 / 100,
                                        justifyContent: 'center'
                                    }}>
                                        {/* ----------- */}
                                        <Text style={{
                                            fontSize: windowWidth * 4 / 100,
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }} >{item.title}</Text>

                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal',
                                            paddingVertical: windowHeight * 1 / 100
                                        }} >{item.text}</Text>
                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal'
                                        }} >{item.text1}</Text>
                                    </View>
                                    <View style={{
                                        width: windowWidth * 35 / 100,
                                        height: windowHeight * 20 / 100,
                                    }}>
                                        <Image style={{
                                            height: windowWidth * 28 / 100,
                                            width: windowWidth * 33 / 100,
                                            borderRadius: windowWidth * 3 / 100,
                                        }} source={item.icon} />

                                        <TouchableOpacity
                                            activeOpacity={0.7} style={styles.redButton}>
                                            <Text style={{
                                                color: '#f5f4f5', fontSize: windowWidth * 4.5 / 100, fontWeight: 'normal'
                                            }}>{item.add}</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                        {/* ---------------for Light view----- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            marginTop: windowHeight * 3 / 100
                        }}>
                            <Text style={{
                                fontSize: windowWidth * 5 / 100,
                                color: 'black',
                                fontWeight: 'bold'
                            }} >{'LIGHTS'}</Text>
                        </View>
                        {/* ----------LIGHTS flatlist------------- */}
                        <FlatList
                            data={this.state.Lights}
                            style={styles.flatlistContainer}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (

                                <View style={styles.flatlist}>
                                    <View style={{
                                        width: windowWidth * 55 / 100,
                                        paddingHorizontal: windowWidth * 2 / 100,
                                        marginLeft: windowWidth * 1 / 100,
                                        justifyContent: 'center'
                                    }}>
                                        {/* ----------- */}
                                        <Text style={{
                                            fontSize: windowWidth * 4 / 100,
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }} >{item.title}</Text>

                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal',
                                            paddingVertical: windowHeight * 1 / 100
                                        }} >{item.text}</Text>
                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal'
                                        }} >{item.text1}</Text>
                                    </View>
                                    <View style={{
                                        width: windowWidth * 35 / 100,
                                        height: windowHeight * 20 / 100,
                                    }}>
                                        <Image style={{
                                            height: windowWidth * 28 / 100,
                                            width: windowWidth * 33 / 100,
                                            borderRadius: windowWidth * 3 / 100,
                                        }} source={item.icon} />

                                        <TouchableOpacity
                                            activeOpacity={0.7} style={styles.redButton}>
                                            <Text style={{
                                                color: '#f5f4f5', fontSize: windowWidth * 4.5 / 100, fontWeight: 'normal'
                                            }}>{item.add}</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                        {/* ---------------for MCB view----- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            marginTop: windowHeight * 3 / 100
                        }}>
                            <Text style={{
                                fontSize: windowWidth * 5 / 100,
                                color: 'black',
                                fontWeight: 'bold'
                            }} >{'MCB & FUSES'}</Text>
                        </View>
                        {/* ----------MCB flatlist------------- */}
                        <FlatList
                            data={this.state.MCB}
                            style={styles.flatlistContainer}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (

                                <View style={styles.flatlist}>
                                    <View style={{
                                        width: windowWidth * 55 / 100,
                                        paddingHorizontal: windowWidth * 2 / 100,
                                        marginLeft: windowWidth * 1 / 100,
                                        justifyContent: 'center'
                                    }}>
                                        {/* ----------- */}
                                        <Text style={{
                                            fontSize: windowWidth * 4 / 100,
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }} >{item.title}</Text>

                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal',
                                            paddingVertical: windowHeight * 1 / 100
                                        }} >{item.text}</Text>
                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal'
                                        }} >{item.text1}</Text>
                                    </View>
                                    <View style={{
                                        width: windowWidth * 35 / 100,
                                        height: windowHeight * 20 / 100,
                                    }}>
                                        <Image style={{
                                            height: windowWidth * 28 / 100,
                                            width: windowWidth * 33 / 100,
                                            borderRadius: windowWidth * 3 / 100,
                                        }} source={item.icon} />

                                        <TouchableOpacity
                                            activeOpacity={0.7} style={styles.redButton}>
                                            <Text style={{
                                                color: '#f5f4f5', fontSize: windowWidth * 4.5 / 100, fontWeight: 'normal'
                                            }}>{item.add}</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                        {/* ---------------for INVERTER & STABILIZER view----- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            marginTop: windowHeight * 3 / 100
                        }}>
                            <Text style={{
                                fontSize: windowWidth * 5 / 100,
                                color: 'black',
                                fontWeight: 'bold'
                            }} >{'INVERTER & STABILIZER'}</Text>
                        </View>
                        {/* ----------INVERTER & STABILIZER flatlist------------- */}
                        <FlatList
                            data={this.state.InverterStabilizer}
                            style={styles.flatlistContainer}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (

                                <View style={styles.flatlist}>
                                    <View style={{
                                        width: windowWidth * 55 / 100,
                                        paddingHorizontal: windowWidth * 2 / 100,
                                        marginLeft: windowWidth * 1 / 100,
                                        justifyContent: 'center'
                                    }}>
                                        {/* ----------- */}
                                        <Text style={{
                                            fontSize: windowWidth * 4 / 100,
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }} >{item.title}</Text>

                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal',
                                            paddingVertical: windowHeight * 1 / 100
                                        }} >{item.text}</Text>
                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal'
                                        }} >{item.text1}</Text>
                                    </View>
                                    <View style={{
                                        width: windowWidth * 35 / 100,
                                        height: windowHeight * 20 / 100,
                                    }}>
                                        <Image style={{
                                            height: windowWidth * 28 / 100,
                                            width: windowWidth * 33 / 100,
                                            borderRadius: windowWidth * 3 / 100,
                                        }} source={item.icon} />

                                        <TouchableOpacity
                                            activeOpacity={0.7} style={styles.redButton}>
                                            <Text style={{
                                                color: '#f5f4f5', fontSize: windowWidth * 4.5 / 100, fontWeight: 'normal'
                                            }}>{item.add}</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                        {/* ---------------for ELECTRICALS view----- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            marginTop: windowHeight * 3 / 100
                        }}>
                            <Text style={{
                                fontSize: windowWidth * 5 / 100,
                                color: 'black',
                                fontWeight: 'bold'
                            }} >{'ELECTRICALS'}</Text>

                        </View>
                        {/* ----------ELECTRICALS flatlist------------- */}
                        <FlatList
                            data={this.state.Electrical}
                            style={styles.flatlistContainer}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (

                                <View style={styles.flatlist}>
                                    <View style={{
                                        width: windowWidth * 55 / 100,
                                        paddingHorizontal: windowWidth * 2 / 100,
                                        marginLeft: windowWidth * 1 / 100,
                                        justifyContent: 'center'
                                    }}>
                                        {/* ----------- */}
                                        <Text style={{
                                            fontSize: windowWidth * 4 / 100,
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }} >{item.title}</Text>

                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal',
                                            paddingVertical: windowHeight * 1 / 100
                                        }} >{item.text}</Text>
                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal'
                                        }} >{item.text1}</Text>
                                    </View>
                                    <View style={{
                                        width: windowWidth * 35 / 100,
                                        height: windowHeight * 20 / 100,
                                    }}>
                                        <Image style={{
                                            height: windowWidth * 28 / 100,
                                            width: windowWidth * 33 / 100,
                                            borderRadius: windowWidth * 3 / 100,
                                        }} source={item.icon} />

                                        <TouchableOpacity
                                            activeOpacity={0.7} style={styles.redButton}>
                                            <Text style={{
                                                color: '#f5f4f5', fontSize: windowWidth * 4.5 / 100, fontWeight: 'normal'
                                            }}>{item.add}</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                        {/* ---------------for WIRING view----- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            marginTop: windowHeight * 3 / 100
                        }}>
                            <Text style={{
                                fontSize: windowWidth * 5 / 100,
                                color: 'black',
                                fontWeight: 'bold'
                            }} >{'WIRING'}</Text>
                        </View>
                        {/* ----------WIRING flatlist------------- */}
                        <FlatList
                            data={this.state.Wiring}
                            style={styles.flatlistContainer}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (

                                <View style={styles.flatlist}>
                                    <View style={{
                                        width: windowWidth * 55 / 100,
                                        paddingHorizontal: windowWidth * 2 / 100,
                                        marginLeft: windowWidth * 1 / 100,
                                        justifyContent: 'center'
                                    }}>
                                        {/* ----------- */}
                                        <Text style={{
                                            fontSize: windowWidth * 4 / 100,
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }} >{item.title}</Text>

                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal',
                                            paddingVertical: windowHeight * 1 / 100
                                        }} >{item.text}</Text>
                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal'
                                        }} >{item.text1}</Text>
                                    </View>
                                    <View style={{
                                        width: windowWidth * 35 / 100,
                                        height: windowHeight * 20 / 100,
                                    }}>
                                        <Image style={{
                                            height: windowWidth * 28 / 100,
                                            width: windowWidth * 33 / 100,
                                            borderRadius: windowWidth * 3 / 100,
                                        }} source={item.icon} />

                                        <TouchableOpacity
                                            activeOpacity={0.7} style={styles.redButton}>
                                            <Text style={{
                                                color: '#f5f4f5', fontSize: windowWidth * 4.5 / 100, fontWeight: 'normal'
                                            }}>{item.add}</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                        {/* ---------------for DOOR BELL view----- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            marginTop: windowHeight * 3 / 100
                        }}>
                            <Text style={{
                                fontSize: windowWidth * 5 / 100,
                                color: 'black',
                                fontWeight: 'bold'
                            }} >{'DOOR BELL'}</Text>

                        </View>
                        {/* ----------DOOR BELL flatlist------------- */}
                        <FlatList
                            data={this.state.Doorbell}
                            style={styles.flatlistContainer}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (

                                <View style={styles.flatlist}>
                                    <View style={{
                                        width: windowWidth * 55 / 100,
                                        paddingHorizontal: windowWidth * 2 / 100,
                                        marginLeft: windowWidth * 1 / 100,
                                        justifyContent: 'center'
                                    }}>
                                        {/* ----------- */}
                                        <Text style={{
                                            fontSize: windowWidth * 4 / 100,
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }} >{item.title}</Text>

                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal',
                                            paddingVertical: windowHeight * 1 / 100
                                        }} >{item.text}</Text>
                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal'
                                        }} >{item.text1}</Text>
                                    </View>
                                    <View style={{
                                        width: windowWidth * 35 / 100,
                                        height: windowHeight * 20 / 100,
                                    }}>
                                        <Image style={{
                                            height: windowWidth * 28 / 100,
                                            width: windowWidth * 33 / 100,
                                            borderRadius: windowWidth * 3 / 100,
                                        }} source={item.icon} />

                                        <TouchableOpacity
                                            activeOpacity={0.7} style={styles.redButton}>
                                            <Text style={{
                                                color: '#f5f4f5', fontSize: windowWidth * 4.5 / 100, fontWeight: 'normal'
                                            }}>{item.add}</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
                        {/* ---------------for GENRAL ELECTRICIAN view----- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            marginTop: windowHeight * 3 / 100
                        }}>
                            <Text style={{
                                fontSize: windowWidth * 5 / 100,
                                color: 'black',
                                fontWeight: 'bold'
                            }} >{'GENRAL ELECTRICIAN'}</Text>

                        </View>
                        {/* ----------GENRAL ELECTRICIAN flatlist------------- */}
                        <FlatList
                            data={this.state.Genral_Electrician}
                            style={styles.flatlistContainer}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (

                                <View style={styles.flatlist}>
                                    <View style={{
                                        width: windowWidth * 55 / 100,
                                        paddingHorizontal: windowWidth * 2 / 100,
                                        marginLeft: windowWidth * 1 / 100,
                                        justifyContent: 'center'
                                    }}>
                                        {/* ----------- */}
                                        <Text style={{
                                            fontSize: windowWidth * 4 / 100,
                                            color: 'black',
                                            fontWeight: 'bold',
                                        }} >{item.title}</Text>

                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal',
                                            paddingVertical: windowHeight * 1 / 100
                                        }} >{item.text}</Text>
                                        <Text style={{
                                            fontSize: windowWidth * 3.5 / 100,
                                            color: 'black',
                                            fontWeight: 'normal'
                                        }} >{item.text1}</Text>
                                    </View>
                                    <View style={{
                                        width: windowWidth * 35 / 100,
                                        height: windowHeight * 20 / 100,
                                    }}>
                                        <Image style={{
                                            height: windowWidth * 28 / 100,
                                            width: windowWidth * 33 / 100,
                                            borderRadius: windowWidth * 3 / 100,
                                        }} source={item.icon} />

                                        <TouchableOpacity
                                            activeOpacity={0.7} style={styles.redButton}>
                                            <Text style={{
                                                color: '#f5f4f5', fontSize: windowWidth * 4.5 / 100, fontWeight: 'normal'
                                            }}>{item.add}</Text>

                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        />
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
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    header:{
        width: windowWidth * 95 / 100,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: windowHeight * 7 / 100,
        marginTop:windowHeight*2/100
    },
    mainView: {
        paddingBottom: windowHeight * 5 / 100,
        alignSelf: 'center',
        width: windowWidth * 95 / 100
    },
    flatlistContainer: {
        marginTop: windowHeight * 1 / 100
    },
    itemText: {
        fontSize: windowWidth * 4 / 100,
        fontWeight: 'normal',
        color: 'black',
        marginTop: windowHeight * 0.5 / 100
    },
    flatlist: {
        width: windowWidth * 90 / 100,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: windowWidth * 2 / 100,
        flexDirection: 'row',
        marginTop: windowHeight * 2 / 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 5,
        paddingVertical: windowHeight * 1 / 100,
        bottom: windowHeight * 0.6 / 100
    },
    greenButton: {
        backgroundColor: '#60D394',
        height: windowHeight * 2.8 / 100,
        width: windowWidth * 30 / 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: windowHeight * 2 / 100
    },
    redButton: {
        backgroundColor: '#C20114',
        height: windowHeight * 4.8 / 100,
        width: windowWidth * 20 / 100,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: windowHeight * 1 / 100,
        bottom: windowHeight * 4 / 100
    },
    tabView: {
        width: windowWidth * 90 / 100,
        alignSelf: 'center',
        backgroundColor: '#ECEBF3',
        paddingVertical: windowHeight * 1 / 100,
        paddingHorizontal: windowWidth * 2 / 100,
        flexDirection: 'row',
        borderRadius: windowWidth * 10 / 100,
        marginTop: windowHeight * 4 / 100
    },
    redButton1: {
        backgroundColor: '#C20114',
        height: windowHeight * 7.5 / 100,
        width: windowWidth * 43 / 100,
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: windowWidth * 10 / 100,
        justifyContent: 'center',
        flexDirection: 'row'
    },

})