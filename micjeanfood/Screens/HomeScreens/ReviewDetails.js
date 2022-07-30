import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { View,Text, Image, ScrollView, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
const ReviewDetails=({navigation,route})=>{


    useLayoutEffect(()=>{
        // console.log(route.params)
        navigation.setOptions({
            headerShown:false,
        })
    })

    return(
        <ScrollView>
            <View style={{position:"relative"}}>
                <Image style={{width:"100%",height:300}}
                source={{
                    uri:route.params.imgUrl
                }}
            />
            <TouchableOpacity onPress={()=>{
                navigation.goBack()
            }} style={{opacity:0.7,paddingHorizontal:10,paddingVertical:3,borderRadius:20,position:"absolute",bottom:30,left:10,backgroundColor:"lightgray"}}>
                <Text style={{fontWeight:"bold",color:"black"}}>BACK</Text>
            </TouchableOpacity>
            </View>
            {/* Name */}
            <View style={{backgroundColor:'white',padding:10,margin:10,borderRadius:10}}>
                <View>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"gray"}}>{route.params.title}</Text>
                </View>
                <View>
                    <Text>{route.params.price}</Text>
                </View>
            </View>
        </ScrollView>
    )
}
export default ReviewDetails