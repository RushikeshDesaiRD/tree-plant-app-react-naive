import React from 'react'
import { View, Text, Image, TouchableHighlight, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import BackBtn from "../images/17.png"
import SwipeComponents from './../components/SwipeComponents';
import { sizes, color } from './Constants';
import Menu1 from "../images/11.png"
import Menu2 from "../images/12.png"
import Menu3 from "../images/13.png"
import Menu4 from "../images/14.png"

export default function Details({navigation}) {
    return (
        <>
        <StatusBar barStyle="light-content" hidden={true} />
        <View style={{
            flex:1,
            backgroundColor:"#FFF"
         
        }}>
     
        <TouchableOpacity
         onPress={
             ()=>navigation.goBack()
         }
        >
           <Image source={BackBtn}
            style={{
                marginLeft:sizes.padding,
                paddingVertical:sizes.padding,
                resizeMode:"contain"
                
            }} />
        </TouchableOpacity>
          <View 
          style={{
              width:"100%",
              height:"80%",
              flexDirection:"row"
          }}
          >

                   <View
                   style={{
                        width:"30%",
                       
                   }}
                   >
                     <View style={{
                         padding:sizes.radius,
                         borderRadius:sizes.radius,
                         marginHorizontal:sizes.padding,
                         marginVertical:sizes.padding,
                         backgroundColor:"#FFF",
                         elevation:6,
                         alignItems:"center",
                         justifyContent:"center"
                     }}>
                       <Image source={Menu1}/>
                     </View>

                     <View style={{
                        padding:sizes.radius,
                        borderRadius:sizes.radius,
                        marginHorizontal:sizes.padding,
                        marginVertical:sizes.padding,
                        backgroundColor:"#FFF",
                        elevation:6,
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                      <Image source={Menu2}/>
                    </View>


                    <View style={{
                        padding:sizes.radius,
                        borderRadius:sizes.radius,
                        marginHorizontal:sizes.padding,
                        marginVertical:sizes.padding,
                        backgroundColor:"#FFF",
                        elevation:6,
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                      <Image source={Menu3}/>
                    </View>



                    <View style={{
                        padding:sizes.radius,
                        borderRadius:sizes.radius,
                        marginHorizontal:sizes.padding,
                        marginVertical:sizes.padding,
                        backgroundColor:"#FFF",
                        elevation:6,
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                      <Image source={Menu4}/>
                    </View>
                       
                   </View>












                   <View
                   style={{
                        width:"70%",
                        height:"100%",
                        
                        
                   }}
                   >
                   <SwipeComponents/>
                   </View>
          </View>



         



         <View style={{
             flexDirection:"row",
             justifyContent:"space-between",
             alignItems:"center",
             marginTop:sizes.padding,
             marginHorizontal:sizes.padding,
            
             padding:sizes.radius
         }}>
         <TouchableOpacity
         style={{
             backgroundColor:color.primary,
             padding:sizes.radius,
             borderRadius:sizes.padding
         }}
         >
         <Text style={{color:"white", textTransform:"uppercase",fontSize:sizes.h3}}>shop now</Text>
         </TouchableOpacity>
            <Text style={{color:color.primary, textTransform:"uppercase",fontSize:sizes.h4}}>$45</Text>
            <Text style={{color:color.primary, textTransform:"uppercase",fontSize:sizes.h4}}>Rose Plant</Text>
            
         </View>




        </View>
        </>
    )
}
