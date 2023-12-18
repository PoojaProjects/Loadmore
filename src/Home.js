import { Image, Text, TouchableOpacity, FlatList, ScrollView, View, TextInput, StyleSheet, SafeAreaView, StatusBar, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import { Dimensions } from 'react-native';
import { localimag } from './localimage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            data: [
                { key: '1', text: 'Home Service' },
                { key: '2', text: 'Business Services' },
                { key: '3', text: 'Personal Services' },
                { key: '4', text: 'Item 4' },
                { key: '5', text: 'Item 5' },
                // Add more items as needed
            ],
            data1: [
                { key: '1', image: localimag.electrician, text: 'Electrician' },
                { key: '2', image: localimag.plumber_image, text: 'Plumber' },
                { key: '3', image: localimag.carpentar_image, text: 'Carpenter' },
                { key: '4', image: localimag.ac_repair_image, text: 'AC service' },
                { key: '5', image: localimag.location, text: 'Explore' },
                // Add more items as needed
            ],
            data2: [
                { key: '1', image: localimag.girl_withMobile, text: 'Tours and travels' },
                { key: '2', image: localimag.man_image, text: 'Packers & Movers' },
                { key: '3', image: localimag.girl_withMobile, text: 'Carpenter' },
                { key: '4', image: localimag.black_mobile, text: 'AC service' },
                // Add more items as needed
            ],
            data3: [
                { key: '1', image: localimag.images, text: 'Tours and travels' },
                { key: '2', image: localimag.man_image, text: 'Packers & Movers' },
                { key: '3', image: localimag.girl_withMobile, text: 'Carpenter' },
                { key: '4', image: localimag.black_mobile, text: 'AC service' },
                // Add more items as needed
            ],
            data4: [
                { key: '1', image: localimag.electrician, title: 'Electrician' },
                { key: '2', image: localimag.plumber_image, title: 'Plumber' },
                { key: '3', image: localimag.ac_repair_image, title: 'AC Repair' },
                { key: '4', image: localimag.carpentar_image, title: 'Carpenter' },
                // Add more items as needed
            ],
        }
    }

    componentDidMount() {
    }

    renderListItem = ({ item }) => (
        <View style={styles.itemContainer4}>
            <View style={styles.item4}>
                <Image
                    style={styles.itemImage4}
                    source={item.image} />
                <Text style={styles.itemText4}>{item.title}</Text>
            </View>
        </View>
    );

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    hidden={false}
                    translucent={false}
                    barStyle="dark-content"
                    backgroundColor='white'
                    networkActivityIndicatorVisible={true}
                />
                {/* -------------------header------------- */}
                <View style={styles.headar}>
                    <View
                        style={styles.imgView}>
                        <Image style={{
                            height: windowWidth * 11 / 100,
                            width: windowWidth * 11 / 100,
                            borderRadius: windowWidth * 2 / 100
                        }} source={localimag.man_image} ></Image>
                    </View>
                    {/* ------------text view------------- */}
                    <View style={{
                        width: windowWidth * 70 / 100,
                        paddingHorizontal: windowWidth * 2 / 100
                    }}>
                        <Text style={{
                            fontSize: windowWidth * 5 / 100,
                            color: 'black',
                            fontWeight: 'bold'
                        }} >{'Hi,Karthik!'}</Text>
                        {/* -----------for onother view----------- */}
                        <View style={{
                            width: windowWidth * 70 / 100,
                            flexDirection: 'row', alignItems: 'center'
                        }}>
                            <Image style={{
                                height: windowWidth * 5 / 100,
                                width: windowWidth * 5 / 100,
                                tintColor: 'lightgreen'
                            }} source={localimag.location} ></Image>
                            <Text style={{
                                fontSize: windowWidth * 4 / 100,
                                color: 'black',
                                fontWeight: 'normal',
                                marginLeft: windowWidth * 1 / 100
                            }} >{'Indiranagar, Banglore'}</Text>
                        </View>
                    </View>
                    {/*---------image view---------  */}
                    <View style={{ width: windowWidth * 10 / 100 }}>
                        <Image style={{
                            height: windowWidth * 7 / 100,
                            width: windowWidth * 7 / 100,
                        }} source={localimag.notification} ></Image>
                    </View>

                </View>
                {/* --------header end -------------------- */}
                <ScrollView
                    style={{ width: windowWidth, paddingBottom: windowWidth * 15 / 100 }}
                >
                    <View style={{
                        width: windowWidth,
                        alignSelf: 'center',
                        paddingBottom: windowWidth * 5 / 100
                    }}>
                        <ImageBackground
                            resizeMode='contain'
                            imageStyle={{}}
                            style={{
                                height: windowWidth * 70 / 100,
                                width: windowWidth,
                            }}
                            source={localimag.black_mobile}>
                            {/* ----------for text view--------- */}
                            <View style={{
                                width: windowWidth * 90 / 100,
                                alignSelf: 'center',
                                marginTop: windowHeight * 1 / 100
                            }}>
                                <Text style={{
                                    fontSize: windowWidth * 6 / 100,
                                    color: 'black',
                                    fontWeight: 'bold'
                                }} >{'Bid And Get Best\nDeals'}</Text>
                                <Text style={{
                                    fontSize: windowWidth * 4 / 100,
                                    color: 'black',
                                    fontWeight: 'normal'
                                }} >{'Bid and save 70% on premium\nservice'}</Text>

                                {/* -------------lear more button------- */}

                                <TouchableOpacity activeOpacity={0.7}
                                    style={styles.redbutton}>
                                    <Text style={{
                                        marginLeft: windowWidth * 4 / 100,
                                        color: '#f5f4f5', fontSize: windowWidth * 4.5 / 100, fontWeight: 'normal'
                                    }}>Lear more</Text>
                                </TouchableOpacity>

                                {/* ----------------for search bar-------------- */}
                                <View style={{
                                    width: windowWidth * 90 / 100,
                                    height: windowHeight * 7 / 100,
                                    borderRadius: 7,
                                    flexDirection: 'row',
                                    alignSelf: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    borderColor: '#1C1B1F',
                                    borderWidth: 0.5,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 1,
                                    },
                                    shadowOpacity: 0.22,
                                    shadowRadius: 2.22,
                                    elevation: 5,
                                    // elevation: 5,
                                    marginTop: windowHeight * 12 / 100,
                                    paddingHorizontal: windowWidth * 4 / 100
                                }}>
                                    <View style={{ width: windowWidth * 10 / 100, }}>
                                        <Image resizeMode='contain' style={{
                                            height: windowHeight * 7 / 100,
                                            width: windowWidth * 7 / 100
                                        }} source={localimag.search}></Image>
                                    </View>

                                    <TextInput style={{
                                        width: windowWidth * 73 / 100,
                                        fontSize: windowWidth * 4 / 100,
                                    }}
                                        placeholderTextColor="black"
                                        placeholder='Search for service'
                                        keyboardType='default'  // Corrected 'number-pas' to 'number-pad'
                                        returnKeyLabel='done'
                                        returnKeyType='done'
                                        ref={(input) => { this.mobilefield = input; }}
                                        onSubmitEditing={() => { Keyboard.dismiss() }}
                                        onFocus={() => { this.setState({ errorno: 0, activeinput: 1 }) }}
                                        onChangeText={(txt) => { this.setState({ search: txt }) }}
                                        value={this.state.search}
                                        maxLength={16}
                                    />
                                </View>
                            </View>
                        </ImageBackground>

                        {/* ---------------for category view----- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: windowHeight * 7 / 100
                        }}>
                            <Text style={{
                                fontSize: windowWidth * 5 / 100,
                                color: 'black',
                                fontWeight: 'bold'
                            }} >{'Categories'}</Text>
                            <Text style={{
                                fontSize: windowWidth * 4 / 100,
                                color: '#C20114',
                                fontWeight: 'normal'
                            }} >{'See all'}</Text>
                        </View>
                        {/* -------for flatlist---------- */}
                        <FlatList
                            data={this.state.data}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (
                                <View style={[styles.item, { backgroundColor: item.key == 1 ? 'black' : 'lightgray', }]}>
                                    <Text style={[styles.itemText, { color: item.key == 1 ? 'white' : 'black', }]}>{item.text}</Text>
                                </View>
                            )}
                        />
                        {/* ------------icon flat list--------------- */}
                        <FlatList
                            data={this.state.data1}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Electrician')}
                                    activeOpacity={0.7}
                                    style={[styles.item1, {}]}>
                                    <Image style={{
                                        width: windowWidth * 17 / 100,
                                        height: windowWidth * 17 / 100,
                                        borderRadius: windowWidth * 50 / 100,
                                        borderWidth: windowWidth * 0.6 / 100,
                                        borderColor: 'lightgray',
                                    }}
                                        source={item.image} />
                                    <Text style={styles.itemText}>{item.text}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        {/* ------------view------------- */}

                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            backgroundColor: '#ECEBF3',
                            borderRadius: windowWidth * 2 / 100,
                            flexDirection: 'row',
                            marginTop: windowHeight * 3 / 100,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 5,
                        }}>
                            <View style={{ width: windowWidth * 50 / 100, paddingHorizontal: windowWidth * 4 / 100 }}>

                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('Home')}
                                    activeOpacity={0.7}
                                    style={{
                                        backgroundColor: '#003E1F',
                                        height: windowHeight * 3 / 100,
                                        width: windowWidth * 30 / 100,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 5,
                                        marginTop: windowHeight * 2 / 100
                                    }}>
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
                                    fontSize: windowWidth * 3 / 100,
                                    color: 'black',
                                    fontWeight: 'normal'
                                }} >{'On Orders above #200'}</Text>
                            </View>
                            <View style={{ width: windowWidth * 40 / 100 }}>
                                <Image style={{
                                    height: windowWidth * 33 / 100,
                                    width: windowWidth * 40 / 100,
                                    borderTopRightRadius: windowWidth * 3 / 100,
                                    borderBottomRightRadius: windowWidth * 3 / 100,
                                }} source={localimag.images} ></Image>
                            </View>
                        </View>

                        {/* ------------icon flat list--------------- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: windowHeight * 2 / 100
                        }}>
                            <Text style={{
                                fontSize: windowWidth * 5 / 100,
                                color: 'black',
                                fontWeight: 'bold'
                            }} >{'Top Bidding Services'}</Text>
                        </View>
                        {/* ---------------- */}
                        <FlatList
                            data={this.state.data2}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ marginLeft: windowWidth * 6 / 100, marginTop: windowHeight * 1 / 100, width: windowWidth, alignSelf: 'center' }}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (
                                <View style={[styles.item2,]}>
                                    <ImageBackground
                                        resizeMode='contain'
                                        borderRadius={windowWidth * 4 / 100}
                                        style={{
                                            width: windowWidth * 40 / 100,
                                            height: windowWidth * 36 / 100,
                                        }}
                                        source={item.image}>
                                        <Text style={styles.itemText1}>{item.text}</Text>
                                    </ImageBackground>
                                </View>
                            )}
                        />
                        {/* ----------------- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            marginTop: windowHeight * 2 / 100
                        }}>
                            <View style={{
                                width: windowWidth * 90 / 100,
                                alignSelf: 'center',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{
                                    fontSize: windowWidth * 5 / 100,
                                    color: 'black',
                                    fontWeight: 'bold'
                                }} >{'Newly Launched Services'}</Text>
                                <Text style={{
                                    fontSize: windowWidth * 3.5 / 100,
                                    color: '#C20114',
                                    fontWeight: 'bold'
                                }} >{'See all'}</Text>
                            </View>
                            {/* -------------- */}
                            <View style={{
                                width: windowWidth * 90 / 100,
                                alignSelf: 'center',
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: windowHeight * 0.5 / 100
                            }}>
                                <Image
                                    style={{
                                        width: windowWidth * 8 / 100,
                                        height: windowWidth * 8 / 100,
                                    }}
                                    source={localimag.trend}>
                                </Image>
                                <Text style={{
                                    fontSize: windowWidth * 4 / 100,
                                    color: '#003E1F',
                                    fontWeight: 'bold',
                                    marginLeft: windowWidth * 2 / 100
                                }} >{'449+ Bids were made recently!'}</Text>
                            </View>
                        </View>
                        {/* ---------flatlist local----------- */}
                        <FlatList
                            data={this.state.data3}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{
                                marginLeft: windowWidth * 3 / 100,
                                marginBottom: windowHeight * 1 / 100, // Add marginBottom for bottom space
                            }}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (
                                <View style={styles.item3}>
                                    <View style={{
                                        width: windowWidth * 70 / 100,
                                        alignSelf: 'center',
                                        // backgroundColor: '#ECEBF3',
                                        backgroundColor: 'white',
                                        borderRadius: windowWidth * 2 / 100,
                                        flexDirection: 'row',
                                        marginTop: windowHeight * 1 / 100,
                                        paddingVertical: windowHeight * 1 / 100,
                                        paddingHorizontal: windowWidth * 2 / 100,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 1,
                                        },
                                        shadowOpacity: 0.22,
                                        shadowRadius: 2.22,
                                        elevation: 5,
                                    }}>
                                        <View style={{ width: windowWidth * 20 / 100 }}>
                                            <Image style={{
                                                height: windowWidth * 20 / 100,
                                                width: windowWidth * 20 / 100,
                                                borderRadius: windowWidth * 2 / 100
                                            }} source={item.image} />
                                        </View>
                                        <View style={{
                                            width: windowWidth * 50 / 100,
                                            paddingHorizontal: windowWidth * 4 / 100
                                        }}>
                                            <TouchableOpacity
                                                activeOpacity={0.7}
                                                style={{
                                                    backgroundColor: '#60D394',
                                                    height: windowHeight * 2.5 / 100,
                                                    width: windowWidth * 12 / 100,
                                                    marginRight: windowWidth * 2 / 100,
                                                    alignSelf: 'flex-end',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 5,
                                                }}>
                                                <Text style={{
                                                    color: '#f5f4f5',
                                                    fontSize: windowWidth * 2.8 / 100,
                                                    fontWeight: 'normal'
                                                }}>New</Text>
                                            </TouchableOpacity>
                                            {/* ----------- */}
                                            <Text style={{
                                                fontSize: windowWidth * 4 / 100,
                                                color: 'black',
                                                fontWeight: 'normal',
                                                paddingVertical: windowHeight * 1 / 100
                                            }} >{'IT Services'}</Text>
                                        </View>

                                    </View>
                                </View>
                            )}
                        />
                        {/* -----------------for refar code --------- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            backgroundColor: '#ECEBF3',
                            borderRadius: windowWidth * 2 / 100,
                            flexDirection: 'row',
                            marginTop: windowHeight * 1 / 100,
                            paddingVertical: windowHeight * 1 / 100,
                            paddingHorizontal: windowWidth * 2 / 100,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.22,
                            shadowRadius: 2.22,
                            elevation: 5,
                        }}>
                            {/* ------------for icons---------- */}
                            <View style={{
                                width: windowWidth * 30 / 100,
                                alignSelf: 'center',
                                marginTop: windowHeight * 2 / 100
                            }}>
                                <Image resizeMode='cover'
                                    style={{
                                        width: windowWidth * 25 / 100,
                                        height: windowWidth * 20 / 100
                                    }}
                                    source={localimag.working_woman}
                                >
                                </Image>
                            </View>
                            {/* ------------for text---------- */}
                            <View style={{
                                width: windowWidth * 60 / 100,
                                alignSelf: 'center',
                                marginTop: windowHeight * 2 / 100
                            }}>
                                <Text style={{
                                    fontSize: windowWidth * 5 / 100,
                                    color: 'black',
                                    fontWeight: 'bold'
                                }} >{'Refer And Earn'}</Text>
                                <Text style={{
                                    marginTop: windowWidth * 1 / 100,
                                    fontSize: windowWidth * 3.3 / 100,
                                    color: 'black',
                                    fontWeight: 'normal'
                                }} >{'Invite your friends and get\nExciting Rewards'}</Text>
                            </View>
                        </View>

                        {/* ---------------for category view----- */}
                        <View style={{
                            width: windowWidth * 90 / 100,
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: windowHeight * 2 / 100
                        }}>
                            <Text style={{
                                fontSize: windowWidth * 5 / 100,
                                color: 'black',
                                fontWeight: 'bold'
                            }} >{'Trending services'}</Text>
                            <Text style={{
                                fontSize: windowWidth * 4 / 100,
                                color: '#C20114',
                                fontWeight: 'normal'
                            }} >{'See all'}</Text>
                        </View>
                        {/* -------------for services flatlist--------- */}
                        <FlatList
                            data={this.state.data4}
                            numColumns={2} // Set the number of columns
                            keyExtractor={(item) => item.key}
                            renderItem={this.renderListItem}
                            contentContainerStyle={styles.flatListContainer}
                        />

                        {/* ---------------for coronavirus----- */}
                        <View style={{
                            width: windowWidth,
                            backgroundColor: '#E5ECE9',
                            alignSelf: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            // justifyContent: 'space-between',
                            marginTop: windowHeight * 1 / 100
                        }}>
                            <View style={{
                                width: windowWidth * 70 / 100,
                                alignSelf: 'center',
                                marginLeft: windowWidth * 4 / 100,
                                paddingVertical: windowHeight * 4 / 100
                            }}>
                                <Text style={{
                                    fontSize: windowWidth * 5 / 100,
                                    color: 'black',
                                    fontWeight: 'bold'
                                }} >{'We can fight CORONAVIRUS'}</Text>
                                <Text style={{
                                    fontSize: windowWidth * 4 / 100,
                                    color: 'black',
                                    paddingVertical: windowWidth * 1 / 100,
                                    fontWeight: 'normal'
                                }} >{'Virus Prevention is in your Hand!'}</Text>
                                <Text style={{
                                    fontSize: windowWidth * 3 / 100,
                                    color: 'black',
                                    fontWeight: 'normal'
                                }} >{"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"}</Text>
                            </View>
                            <View style={{
                                width: windowWidth * 30 / 100,
                                alignSelf: 'center',
                                paddingVertical: windowHeight * 4 / 100
                            }}>
                                <Image style={{
                                    width: windowWidth * 25 / 100,
                                    height: windowWidth * 25 / 100
                                }}
                                    source={localimag.coronaVerius}
                                >
                                </Image>
                            </View>
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
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headar: {
        width: windowWidth * 90 / 100,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: windowHeight * 2 / 100,
    },
    imgView: {
        width: windowWidth * 13 / 100,
        height: windowWidth * 13 / 100,
        borderRadius: windowWidth * 2 / 100,
        borderWidth: windowWidth * 0.5 / 100,
        borderColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center'
    },
    redbutton: {
        backgroundColor: '#C20114',
        height: windowHeight * 5.5 / 100,
        width: windowWidth * 43 / 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: windowHeight * 2 / 100
    },
    item: {
        width: windowWidth * 38 / 100, // Adjust as needed
        height: windowHeight * 5.8 / 100, // Adjust as needed
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: windowHeight * 2 / 100,
    },
    item1: {
        width: windowWidth * 20 / 100,
        marginTop: windowHeight * 3 / 100,
        height: windowHeight * 13 / 100,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: windowHeight * 2 / 100,
    },
    item2: {
        width: windowWidth * 40 / 100,
        paddingVertical: windowHeight * 1 / 100,
        marginHorizontal: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,

    },
    item3: {
        width: windowWidth * 70 / 100,
        paddingVertical: windowHeight * 1 / 100,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,

    },
    itemText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black'
    },
    itemText1: {
        fontSize: windowWidth * 4.5 / 100,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginTop: windowHeight * 15.5 / 100
    },
    // ----------
    item4: {
        borderRadius: 8,
        padding: 10,
    },
    itemImage4: {
        width: '100%',
        height: 100, // Adjust the height as needed
        borderRadius: 8,
        marginBottom: 5,
    },
    itemText4: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    flatListContainer: {
        margin: 10,
    },
    itemContainer4: {
        flex: 1,
        margin: 5,
    },
})