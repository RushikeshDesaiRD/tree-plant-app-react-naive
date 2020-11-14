import React from 'react'
import { View, Text, Image, ImageBackground, FlatList } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler'
import { sizes, color } from './Constants';
import MenuIcon from "../images/1.png";
import Logo from "../images/2.png";
import LinearGradient from "react-native-linear-gradient"
import Serach from "../images/3.png"
import Plant1 from "../images/4.png"
import Plant2 from "../images/5.png"
import Plant3 from "../images/6.png"
import Plant4 from "../images/7.png"
import FeaturedImg1 from "../images/18.png";
import FeaturedImg2 from "../images/19.png";
const plants=[
    {
      id:1,
      imageUrl:Plant1,
      name:"Rose Plant",
      price:23
    },
    {
      id:2,
      imageUrl:Plant2,
      name:"Rose Plant2",
      price:54
    },
    {
      id:3,
      imageUrl:Plant3,
      name:"Rose Planth",
      price:87
    },
    { 
      id:4,
      imageUrl:Plant4,
      name:"Rose Plantf",
      price:90
    }
  ]
export default function Home({navigation}) {
  const [Plants, setPlants]=React.useState(plants)
  const renderItem=({item})=>(


    <TouchableOpacity
    style={{
      height:200,
      width:150,
      backgroundColor:color.white,
      marginLeft:sizes.radius,
      elevation:8,
      borderRadius:sizes.padding
    }}
    onPress={() => navigation.navigate("Details")}
    >
       <Image source={item.imageUrl} resizeMode="cover" 
       style={{ 
         height:140, 
         width:"100%",
         borderTopLeftRadius:sizes.padding,
         borderTopRightRadius:sizes.padding
        }} />

        <View 
        style={{
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
          paddingHorizontal:sizes.radius,
          marginTop:sizes.padding
        }}
        >
          <Text style={{
            fontWeight:"bold"
          }}>{item.name}</Text>
          <Text style={{
            color:color.primary
          }}>${item.price}</Text>
        </View>
    </TouchableOpacity>
  
  )
    return (
        <View style={{flex:1}}>
           <View style={{
               backgroundColor:color.primary,
               height:"28%",
               borderBottomLeftRadius:sizes.h2,
               borderBottomRightRadius:sizes.h2
           }}>
           <Image
            source={MenuIcon}
             height={30} 
             style={{
                marginTop:sizes.padding,
                marginLeft:sizes.padding
              }} 
           width={30}/>


           <View 
           style={{
             flexDirection:"row",
             justifyContent:"space-between",
             alignItems:"center",
             marginTop:sizes.h1,
             paddingHorizontal:sizes.padding
           }}
           >
             <Text style={{
                 color:color.white,
                 fontSize:sizes.h1,
                 fontWeight:"bold",
             }}>HI UISPLASH..</Text>
              <Image 
              source={Logo}
              style={{width:50, height:50}}/>
           </View>

           </View>
           <LinearGradient 
           
           colors={[color.primary, 'transparent']} 
           style={{
             left:0,
             right:0,
             height:90,
              margin:-45
           }}
           >
          <View
           style={{
              padding:sizes.radius,
              marginHorizontal:"15%",
              backgroundColor:color.white,
              width:"70%",
              marginTop:sizes.h2,
              borderRadius:sizes.radius,
              elevation:4,
              justifyContent:"space-between",
              flexDirection:"row",
              
          }}>
          <Text style={{color:color.primary}}>Search</Text>
          <Image source={Serach} height={40} width={40}/>
          </View>
         </LinearGradient>



         <View 
          style={{
            flexDirection:"row", 
          justifyContent:"space-between",
           alignItems:"center",
           paddingHorizontal:sizes.padding,
           marginTop:sizes.h1
        }}>
           <Text
            style={{textDecorationLine:"underline", 
           textDecorationColor:color.primary
            
          }}>Recommended</Text>
           <TouchableOpacity 
           style={{
             paddingHorizontal:sizes.radius,
             paddingVertical:6,
             borderRadius:15,
             backgroundColor:color.primary,
           }}>
           <Text style={{color:color.white, fontWeight:"bold"}}>More</Text>
           </TouchableOpacity>
         </View>

    

    

      <FlatList
      data={Plants}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        marginTop:sizes.radius,
        paddingHorizontal:sizes.padding
      }}
    />
     




      
    <View 
    style={{
      flexDirection:"row", 
    justifyContent:"space-between",
     alignItems:"center",
     paddingHorizontal:sizes.padding,
     marginTop:-100
  }}>
     <Text
      style={{textDecorationLine:"underline", 
     textDecorationColor:color.primary
      
    }}>Featured</Text>
     <TouchableOpacity 
     style={{
       paddingHorizontal:sizes.radius,
       paddingVertical:6,
       borderRadius:15,
       backgroundColor:color.primary,
     }}>
     <Text style={{color:color.white, fontWeight:"bold"}}>More</Text>
     </TouchableOpacity>
   </View>


    


          <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop:sizes.radius,
            paddingHorizontal:sizes.padding
          }}
          >
             <Image
             source={FeaturedImg1}
             resizeMode="cover"
               style={{
                 marginBottom:-200,
                 marginLeft:sizes.padding
               }}
              />
              <Image
              source={FeaturedImg2}
              resizeMode="cover"
                style={{
                  marginBottom:-200,
                  marginLeft:sizes.padding
                }}
               />
          </ScrollView>
        </View>
    )
}
