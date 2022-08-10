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
            <View style={{backgroundColor:'white',padding:10,margin:10,borderRadius:10, paddingBottom:1000}}>
                <View>
                    <Text style={{fontSize:20,fontWeight:"bold",color:"gray"}}>{route.params.title}</Text>
                </View>
            </View>
            <View style={{marginVertical:10,marginRight:10}}>
                <Text style={{textAlign:"right",fontSize:20}}>GH₵ {(route.params.price).toFixed(2)}</Text>
            </View>
            <View style={{margin:10}}>
                <View style={{borderWidth:2,borderColor:"#F5044F",padding:10,borderRadius:10,marginBottom:10}}>
                    <Text style={{color:"black",fontSize:18,textAlign:"center"}}>COMES WITH</Text>
                </View>
                <View>
                    {route.params.whatYouGet.split(",").map((item,index)=>{
                            return(
                                <View style={{padding:8,margin:2,backgroundColor:"white",borderRadius:10}} key={index}>
                                    <Text style={{fontWeight:"bold"}}>{item}</Text>
                                </View>
                            )
                    })}
                </View>
            </View>
            <View style={{margin:10}}>
                <TouchableOpacity style={{padding:10,backgroundColor:"#F5044F",borderRadius:10}}>
                    <Text style={{textAlign:"center",color:"white",fontWeight:"bold",fontSize:20}}>ADD TO BASKET +</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default ReviewDetails