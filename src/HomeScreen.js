import { ActivityIndicator, View, Image, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import axios from "axios";
import { Dimensions } from 'react-native';
import { localimag } from './localimage';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const limit = 10;
let loadmore = true
const HomeScreen = (props) => {

  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {

    let query = `?skip=${skip}&limit=${limit}`
    //    ------axios-----------
    //    axios.get('https://dummyjson.com/products'+query)
    //    .then(res=>{
    //     console.log('res',res.data)
    //     if(res.data.products.length==0){
    //       loadmore:false
    //     }

    //     setShowLoader(false)
    //     setData([...data,...res.data.products])
    //     setSkip(skip+10)
    //   })
    //     .catch(err=>{
    //       console.log('error')
    //     })

    // ------------fetch------------
    fetch('https://dummyjson.com/products' + query)
      .then(res => res.json())
      .then(res => {
        console.log('res', res)
        if (res.products.length == 0) {
          loadmore: false
        }
        // setData(res.products)
        setShowLoader(false)
        setData([...data, ...res.products])
        setSkip(skip + 10)
      })
      .catch(err => {
        console.log('error')
      })
  }


  const itemseprator = useCallback(() => {
    return (
      <View style={{ height: 20 }}></View>
    )
  }, [data])
  const onEndReached = () => {
    setShowLoader(true)
    if (loadmore) {
      fetchData()
    }
  }

  const listFooterComponent = useCallback(() => {
    return (
      <ActivityIndicator style={{ marginVertical: 16 }} size='large' />
    )
  }, [data])

  return (

    <View style={styles.container}>
      <SafeAreaView style={{ flex: 0 }} />
      {/* -------------------header------------- */}
      <View style={{
        width: windowWidth * 90 / 100,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        height: windowHeight * 7 / 100,
      }} >
        <TouchableOpacity
          style={{ width: windowWidth * 20 / 100 }}
          activeOpacity={0.7}
          // onPress={() => this.props.navigation.goBack()}
           >
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


      <FlatList
        data={data}
        ItemSeparatorComponent={itemseprator}
        onEndReached={onEndReached}
        ListFooterComponent={showLoader && listFooterComponent}
        renderItem={({ item, index }) =>

          <View style={styles.flatlistshadow}>
            <Image style={{ height: 200, width: '100%', borderRadius: 8 }} source={{ uri: item.thumbnail }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>{item.brand}</Text>
              <Text>{item.price}</Text>

            </View>
            <Text>{item.description}</Text>
          </View>


        }
      />
    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16

  },
  flatlistshadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
      marginTop: windowHeight * 5 / 100
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 3,
    backgroundColor: 'white',
    padding: 8,
    margin: 2,
    borderRadius: 8,
  }
})

export default HomeScreen

