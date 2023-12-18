
import React, { Component } from 'react';
import { Text, View,  TouchableOpacity, Image ,} from 'react-native'

export default class Drawerscreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('focus', () => {
            global.active_page = 0
        })
    }
    render() {
        return (

            <View>

                {/* -------------------- VehicleInspection --------------- */}

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('VehicleInspection')}
                    activeOpacity={0.7}
                    style={{
                        width: mobileW * 85 / 100,
                        marginTop: mobileH * 5 / 100,
                        borderBottomWidth: mobileW * 0.1 / 100,
                        borderBottomColor: Colors.black_color,
                        alignSelf: 'center',
                        paddingBottom: mobileH * 2 / 100
                    }} >
                    <View style={{
                        width: mobileW * 80 / 100,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignSelf: 'center'

                    }} >

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: mobileW * 70 / 100,

                        }} >

                            <Image style={{
                                height: mobileW * 6 / 100,
                                width: mobileW * 6 / 100,
                            }} source={localimag.newcheckedIcon} ></Image>

                            <Text style={{
                                marginLeft: mobileW * 5 / 100,
                                fontSize: mobileW * 4 / 100,
                                fontFamily: Font.FontBold,
                                color: Colors.black_color
                            }}  >Vehicle Inspections</Text>

                        </View>

                        <Image style={{
                            height: mobileW * 3 / 100,
                            width: mobileW * 3 / 100,
                        }} source={localimag.back_arrow} ></Image>
                    </View>
                </TouchableOpacity>

                {/* ---------------- Reporting ---------------- */}
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('InitialIncidentHazardReprort')}
                    activeOpacity={0.7}
                    style={{
                        width: mobileW * 85 / 100,
                        marginTop: mobileH * 3 / 100,
                        borderBottomWidth: mobileW * 0.1 / 100,
                        borderBottomColor: Colors.black_color,
                        alignSelf: 'center',
                        paddingBottom: mobileH * 2 / 100
                    }} >
                    <View style={{
                        width: mobileW * 80 / 100,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignSelf: 'center'

                    }} >

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: mobileW * 70 / 100,

                        }} >

                            <Image style={{
                                height: mobileW * 6 / 100,
                                width: mobileW * 6 / 100,
                            }} source={localimag.profitreport} ></Image>

                            <Text style={{
                                marginLeft: mobileW * 5 / 100,
                                fontSize: mobileW * 4 / 100,
                                fontFamily: Font.FontBold,
                                color: Colors.black_color
                            }}>Reporting</Text>

                        </View>

                        <Image style={{
                            height: mobileW * 3 / 100,
                            width: mobileW * 3 / 100,
                        }} source={localimag.back_arrow} ></Image>
                    </View>
                </TouchableOpacity>

                {/* ---------------- My Submissions ---------------- */}
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Submission')}
                    activeOpacity={0.7}
                    style={{
                        width: mobileW * 85 / 100,
                        marginTop: mobileH * 3 / 100,
                        borderBottomWidth: mobileW * 0.1 / 100,
                        borderBottomColor: Colors.black_color,
                        alignSelf: 'center',
                        paddingBottom: mobileH * 2 / 100
                    }} >
                    <View style={{
                        width: mobileW * 80 / 100,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignSelf: 'center'

                    }} >

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: mobileW * 70 / 100,

                        }} >

                            <Image style={{
                                height: mobileW * 6 / 100,
                                width: mobileW * 6 / 100,
                            }} source={localimag.activesubmissionIcon} ></Image>

                            <Text style={{
                                marginLeft: mobileW * 5 / 100,
                                fontSize: mobileW * 4 / 100,
                                fontFamily: Font.FontBold,
                                color: Colors.black_color
                            }}  >My Submissions</Text>

                        </View>

                        <Image style={{
                            height: mobileW * 3 / 100,
                            width: mobileW * 3 / 100,
                        }} source={localimag.back_arrow} ></Image>
                    </View>
                </TouchableOpacity>

                {/* --------------------- Profile -------------------------- */}
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Profile')}
                    activeOpacity={0.7}
                    style={{
                        width: mobileW * 85 / 100,
                        marginTop: mobileH * 3 / 100,
                        borderBottomWidth: mobileW * 0.1 / 100,
                        borderBottomColor: Colors.black_color,
                        alignSelf: 'center',
                        paddingBottom: mobileH * 2 / 100
                    }} >
                    <View style={{
                        width: mobileW * 80 / 100,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignSelf: 'center'

                    }} >

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: mobileW * 70 / 100,

                        }} >

                            <Image style={{
                                height: mobileW * 6 / 100,
                                width: mobileW * 6 / 100,
                            }} source={localimag.activeprofileIcon} ></Image>

                            <Text style={{
                                marginLeft: mobileW * 5 / 100,
                                fontSize: mobileW * 4 / 100,
                                fontFamily: Font.FontBold,
                                color: Colors.black_color
                            }}  >Profile</Text>

                        </View>

                        <Image style={{
                            height: mobileW * 3 / 100,
                            width: mobileW * 3 / 100,
                        }} source={localimag.back_arrow} ></Image>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}