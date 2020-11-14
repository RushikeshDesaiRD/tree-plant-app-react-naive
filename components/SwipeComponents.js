import React from 'react'
import { View, Text, Image, Touchable, TouchableOpacity, StatusBar, StyleSheet } from 'react-native'

import Swiper from 'react-native-swiper'
import Img from "../images/img.png"
import Img1 from "../images/img-1.png"
import Img2 from "../images/img2.png"
export default function SwipeComponents() {
    return (
       <Swiper style={styles.wrapper}
       dotStyle={{
           marginTop:-200,
           width:15,
           height:5,
           borderRadius:10,
           backgroundColor:"#FFF"
       }}
       activeDotColor="#FFF"
       activeDotStyle={{
           marginTop:-200,
           width:30,
           height:6,
           backgroundColor:"#FFF",
           activeDotColor:"#FFF"
       }}
       >
          <View style={styles.slide}>
            <Image
            source={Img}
            style={{
                marginLeft:120,
                marginBottom:130,
                height:620,
                width:420,
                marginTop:60,
                resizeMode:"stretch"
            }}
            />
            </View>
            <View style={styles.slide}>
            <Image
            source={Img1}
            style={{
                marginLeft:120,
                marginBottom:130,
                height:620,
                width:420,
                marginTop:60,
                resizeMode:"stretch"
            }}
            />
            </View>
            <View style={styles.slide}>
            <Image
            source={Img2}
            style={{
                marginLeft:120,
                marginBottom:130,
                height:620,
                width:420,
                marginTop:60,
                resizeMode:"stretch"
            }}
            />
          </View>
       </Swiper>
    )
}
const styles=StyleSheet.create({
    wrapper:{

    },
    slide:{
       
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFF"
    }

})
